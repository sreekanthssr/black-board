import { fabric } from 'fabric';

export default class fabricMouseCursor {
    constructor (options) {
        this.cursor = null;
        this.options = {};
        this.options.canvas = (options.canvas) ? options.canvas : null;
        this._setColor(options.color);
        this._setSize(options.size);
        this._setMouseHandler();
    }

    _setColor (color) {
        this.options.color = (color) || '#000000';
    }

    _setSize (size) {
        this.options.size = (size) ? parseInt(size) : 5;
    }

    setColorSize (color, size) {
        this._setColor(color);
        this._setSize(size);
    }

    _setMouseHandler () {
        this.options.canvas.on('mouse:move', (e) => {
            this._createCursor(e.pointer);
            this._showCursor(e.pointer);
        });
        this.options.canvas.on('mouse:out', (e) => {
            this._removeCursor(e.pointer);
        });
    }

    _createCursor (pointer) {
        if (pointer && this.cursor === null) {
            this.cursor = new fabric.Circle({
                left: pointer.x - this.options.size / 2,
                top: pointer.y - this.options.size / 2,
                radius: this.options.size / 2,
                stroke: this.options.color,
                strokeWidth: 0,
                fill: this.options.color,
                customName: 'customMouseCursor',
                hasControls: false,
                hasBorders: false,
                selectable: false
            });
            this.options.canvas.add(this.cursor).setActiveObject();
        }
    }

    _removeCursor () {
        this.options.canvas.getObjects().forEach((obj) => {
            if (obj.customName === 'customMouseCursor') {
                this.options.canvas.remove(obj);
                this.options.canvas.renderAll();
                this.cursor = null;
            }
        });
    }

    _showCursor (pointer) {
        this.cursor.left = pointer.x - this.options.size / 2;
        this.cursor.top = pointer.y - this.options.size / 2;
        this.cursor.setCoords();
        this.options.canvas.renderAll();
    }
}
