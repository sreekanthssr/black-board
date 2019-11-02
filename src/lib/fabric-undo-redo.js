import {fabric} from 'fabric';

export default class fabricUndoRedo {
    constructor(options){  
        this.cursor = null; 
        this.options = {};
        this.options.canvas = (options.canvas) ? options.canvas : null;
        this.redoArray = [];
    }

    action(type){
        if(type === 'undo'){
            this._undo();
        } else if(type === 'redo'){
            this._redo();
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
}