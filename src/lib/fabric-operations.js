export default class FabricOperations {
    constructor(options){  
        this.cursor = null; 
        this.options = {};
        this.options.canvas = (options.canvas) ? options.canvas : null;
        this.redoArray = [];
    }

    action(type){
        switch(type){
            case 'undo':
                this._undo();
                break;
            case 'redo':
                this._redo();
                break;
            case 'new':
                this._claerAll();
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
}