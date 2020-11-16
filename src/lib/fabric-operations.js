import { fabric } from 'fabric';
export default class FabricOperations {
    constructor (options) {
        this.cursor = null;
        this.options = {};
        this.options.canvas = (options.canvas) ? options.canvas : null;
        this.redoArray = [];
    }

    action (type, param) {
        switch (type) {
        case 'undo':
            this._undo();
            break;
        case 'redo':
            this._redo();
            break;
        case 'new':
            this._claerAll();
            break;
        case 'save':
            this._save();
            break;
        case 'open':
            this._open(param);
            break;
        case 'download':
            this._download(param);
            break;
        default:
        }
    }

    _undo () {
        const object = this.options.canvas.getObjects();
        if (object && object.length) {
            const lastObject = object[object.length - 1];
            this._setRedoArray(lastObject);
            this.options.canvas.remove(lastObject);
        }
    }

    _redo () {
        if (this.redoArray && this.redoArray.length) {
            this.options.canvas.add(this.redoArray.pop());
            this.options.canvas.renderAll();
        }
    }

    _setRedoArray (object) {
        this.redoArray.push(object);
    }

    _claerAll () {
        if (this.options.canvas) {
            this.redoArray.length = 0;
            this.options.canvas.clear();
        }
    }

    _getFormatedDate () {
        const date = new Date();
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    }

    _save () {
        if (this.options.canvas && this.options.canvas.getObjects().length) {
            const canvasJson = this.options.canvas.toDatalessJSON();
            const link = document.createElement('a');
            link.download = `Notebook-${this._getFormatedDate()}.json`;
            link.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(canvasJson));
            link.click();
        }
    }

    _open (file) {
        if (this.options.canvas && file) {
            this._claerAll();
            try {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const data = event.target.result;
                    if (data) {
                        fabric.loadSVGFromString(data, (objects, options) => {
                            var obj = fabric.util.groupSVGElements(objects, options);
                            this.options.canvas.add(obj).renderAll();
                        });
                    }
                };
                reader.readAsText(file);
            } catch (e) {
                console.log(e);
            }
        }
    }

    _download () {
        if (this.options.canvas) {
            const svgData = this.options.canvas.toSVG();
            const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
            const svgUrl = URL.createObjectURL(svgBlob);
            const downloadLink = document.createElement('a');
            downloadLink.href = svgUrl;
            downloadLink.download = 'notebook.svg';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    }

    setHeight (heigth) {
        if (this.options.canvas && heigth) {
            this.options.canvas.setDimensions({ width: `${1540}px`, height: `${heigth}px` }, { cssOnly: true, backstoreOnly: true });
            console.log('test');
        }
    }
}
