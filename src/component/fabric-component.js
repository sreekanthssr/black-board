import React from "react";
import {fabric} from 'fabric';

export default class FabricComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        var canvas = this.__canvas = new fabric.Canvas('fabricCanvas', {
            isDrawingMode: true
          });
    }

    render(){
        return(
            <div>
                <canvas id="fabricCanvas"></canvas>
            </div>
        );
    }
}