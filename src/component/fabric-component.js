import React from "react";
import {fabric} from 'fabric';
import FabricBrush from '../lib/fabric-brush';

export default class FabricComponent extends React.Component{
    constructor(props){
        super(props);
        this.fabricBrush = null;
    }
    
    componentDidMount(){
        this.props.setCanvas(new fabric.Canvas('fabricCanvas', {
            isDrawingMode: true,
            backgroundColor: "transparent",
            freeDrawingCursor : 'none'
        }),(canvas) =>{
           canvas.setDimensions({width: '97vw', height: '101vh'}, {cssOnly: true});
           this.fabricBrush = new FabricBrush({
                canvas : canvas,
                color : this.props.color,
                size: this.props.size,
                brushType: this.props.brushType
            });
            this.fabricBrush.getBrush();
        });
        
    }

    componentDidUpdate(){
        let color = this.props.color;
        let size = this.props.size;
        let brushType = this.props.brushType;
        if(this.fabricBrush){
            this.fabricBrush.setColorSizeBrush(color, size, brushType);
            this.fabricBrush.getBrush();
        }
        
    }

    render(){
        let currrentBGImageStyle = {};
        if(this.props.currentBGImage){
            currrentBGImageStyle.background = `url('${this.props.currentBGImage}') no-repeat center center`;
            currrentBGImageStyle.backgroundSize = 'contain';
        }
        return(
            <div className={`drawing-canvas-main ${this.props.canvasBackground}`} style={currrentBGImageStyle}>
                <canvas id="fabricCanvas" width={'600'} height={'600'}></canvas>
            </div>
        );
    }
}