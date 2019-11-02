import {fabric} from 'fabric';

export default class fabricUndoRedo {
    constructor(options){  
        this.cursor = null; 
        this.options = {};
        this.options.canvas = (options.canvas) ? options.canvas : null;
        this.redoArray = [];
        //this._setMouseHandler();
    }

    _setMouseHandler(){
        this.options.canvas.includeDefaultValues = false;
        /*this.options.canvas.on("mouse:down", () =>{
        });*/
        // let path = new fabric.Path('M 187.72019659936237 137.68010092291348 Q 187.71519659936237 137.68010092291348 187.50041948654845 137.68010092291348 ', {
        //     stroke: 'red',
        //     strokeWidth: 1,
        //     fill: false,
        //     originX: 'left',
        //     originY: 'top'
        // });
        // path.set({ left: 100, top: 100 });
        // this.options.canvas.add(path);
        this.options.canvas.on("path:created", (e) =>{
            // let objs = this.options.canvas.getObjects().map(function(o) {
            //     return o;
            //   });
            //   if(objs[0].path)
            console.log(this.options.canvas.toJSON());
        });
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
            console.log(this.redoArray);
            this.options.canvas.add(this.redoArray.pop());
            this.options.canvas.renderAll();
        }
    }

    _setRedoArray(object){
        this.redoArray.push(object);
    }
}