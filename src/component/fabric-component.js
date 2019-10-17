import React from "react";
import {fabric} from 'fabric';

export default class FabricComponent extends React.Component{
    
    componentDidMount(){
        this.props.setCanvas(new fabric.Canvas('fabricCanvas', {
            isDrawingMode: true,
            backgroundColor: "transparent"
        }),(canvas) =>{
           canvas.setDimensions({width: '97vw', height: '101vh'}, {cssOnly: true})
        });
        ;
    }

    componentDidUpdate(){
        let canvas = this.props.canvas;
        let color = this.props.color;
        let size = this.props.size;

        canvas.freeDrawingBrush = new fabric['PencilBrush'](canvas);
        canvas.freeDrawingBrush.color = color;
        canvas.freeDrawingBrush.width = parseInt(size, 10) || 1;
        canvas.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: parseInt(0, 10) || 0,
        offsetX: 0,
        offsetY: 0,
        affectStroke: true,
        color: color,
        });
    
    console.log(color,size,canvas);
    }

    render(){
        return(
            <div className="drawing-canvas-main ruled">
                <canvas id="fabricCanvas" width={'600'} height={'600'}></canvas>
            </div>
        );
    }
}