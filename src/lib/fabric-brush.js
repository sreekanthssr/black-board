import {fabric} from 'fabric';

export default class FabricBrush{
    constructor(options){   
        console.log(options);
        this.options = {};
        this.options.canvas = (options.canvas) ? options.canvas : null;
        this._setBrushType(options.brushType);
        this._setColor(options.color);
        this._setSize(options.size);
    }

    getBrush(){
        let brush = this._getBrushProp();
        this.options.canvas.freeDrawingBrush = new fabric[brush.brushType](this.options.canvas);
        
        this.options.canvas.freeDrawingBrush.color = brush.color;
        this.options.canvas.freeDrawingBrush.width = parseInt(this.options.size, 10) || 1;
        this.options.canvas.freeDrawingBrush.shadow = new fabric.Shadow({
            blur: parseInt(brush.blur, 10) || 0,
            offsetX: 0,
            offsetY: 0,
            affectStroke: true,
            color: brush.color,
        });
    }

    _setColor(color){
        this.options.color = (color) ? color : '#000000';
    }

    _setSize(size){
        this.options.size = (size) ? parseInt(size) : 5;
    }
    
    _setBrushType(brushType){
        this.options.brushType = (brushType) ? brushType : 'pen';
    }

    setColorSizeBrush(color, size, brushType){
        this._setColor(color);
        this._setSize(size);
        this._setBrushType(brushType);
    }

    _getBrushProp(){
        /*"BaseBrush", "PencilBrush", "CircleBrush", "SprayBrush", "PatternBrush"*/
        let brush = {};
        switch(this.options.brushType){
            case 'pen':
                brush = {brushType : "PencilBrush", blur : 5, color : this.options.color};
                break;
            case 'pencil':
                brush = {brushType : "PencilBrush", blur : 0, color : this.options.color};
                break;
            case 'brush':
                brush = {brushType : "SprayBrush", blur : 10, color : this.options.color};
                break;
            case 'highlighter':
                brush = {brushType : "PencilBrush", blur : 2, color : this.options.color+'aa'};
                break;
            default:
                brush = {brushType : "PencilBrush", blur : 1, color : this.options.color};
        }
        return brush;
    }
}