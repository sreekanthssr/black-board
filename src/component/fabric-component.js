import React from "react";
import {fabric} from 'fabric';

export default class FabricComponent extends React.Component{
    
    componentDidMount(){
        this.props.setCanvas(new fabric.Canvas('fabricCanvas', {
            isDrawingMode: true
        }));
        
    }

    

    render(){
        return(
            <div>
                <canvas id="fabricCanvas" width={'600'} height={'600'}></canvas>
            </div>
        );
    }
}