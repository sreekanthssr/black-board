export default class FabricOperations {
    constructor(options){  
        this.cursor = null; 
        this.options = {};
        this.options.canvas = (options.canvas) ? options.canvas : null;
        this.redoArray = [];
    }

    action(type, param){
        switch(type){
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
            default:
        }

    }

    _undo(){
        let object = this.options.canvas.getObjects();
        if(object && object.length){
            let lastObject = object[object.length-1];
            this._setRedoArray(lastObject);
            this.options.canvas.remove(lastObject);
        }
        
    }

    _redo(){
        if(this.redoArray && this.redoArray.length){
            this.options.canvas.add(this.redoArray.pop());
            this.options.canvas.renderAll();
        }
    }

    _setRedoArray(object){
        this.redoArray.push(object);
    }

    _claerAll(){
        if(this.options.canvas){
            this.redoArray.length = 0;
            this.options.canvas.clear();
        }
        
    }

    _getFormatedDate(){
        let date = new Date();
        return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
    }

    _save(){
        if(this.options.canvas && this.options.canvas.getObjects().length){
            let canvasJson = this.options.canvas.toDatalessJSON();
            let link = document.createElement("a");
            link.download = `Notebook-${this._getFormatedDate()}.json`;
            link.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(canvasJson));
            link.click();
        }
    }

    _open(file){
        if(this.options.canvas && file){
            this._claerAll();
            try{
                
                    let reader = new FileReader();
                    reader.onload = (event)=>{
                        console.log(event.target.result);
                        let json = JSON.parse(event.target.result);
                        if(json.objects){
                            this.options.canvas.loadFromJSON(json, (obj) =>{
                                this.options.canvas.renderAll();
                            });
                        }
                    };
                    reader.readAsText(file);

                
            }catch(e){
                console.log(e);
            }
            
        }
    }
}