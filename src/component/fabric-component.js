import React from 'react';
import { fabric } from 'fabric';
import FabricBrush from '../lib/fabric-brush';
import FabricOperations from '../lib/fabric-operations';

export default class FabricComponent extends React.Component {
    constructor (props) {
        super(props);
        this.fabricBrush = null;
        this.fabricOperationsObj = null;
        this.drawingCanvasRef = React.createRef();
    }

    componentDidMount () {
        this.props.setCanvas(new fabric.Canvas('fabricCanvas', {
            isDrawingMode: true,
            backgroundColor: 'transparent',
            freeDrawingCursor: 'none'
        }), (canvas) => {
            canvas.setDimensions({ width: `${document.documentElement.offsetWidth}px`, height: `${document.documentElement.offsetHeight}px` }, { cssOnly: true });
            this.fabricBrush = new FabricBrush({
                canvas: canvas,
                color: this.props.color,
                size: this.props.size,
                brushType: this.props.brushType
            });
            this.fabricBrush.getBrush();
            this.fabricOperationsObj = new FabricOperations({ canvas: canvas });
        });
        this.props.setCurrentState({ drawingCanvasRef: this.drawingCanvasRef.current });
    }

    componentDidUpdate () {
        const color = this.props.color;
        const size = this.props.size;
        const brushType = this.props.brushType;
        if (this.fabricBrush) {
            this.fabricBrush.setColorSizeBrush(color, size, brushType);
            this.fabricBrush.getBrush();
        }
        if (this.fabricOperationsObj) {
            this.fabricOperationsObj.action(this.props.action, this.props.importJson);
        }
    }

    render () {
        const currrentBGImageStyle = {};
        if (this.props.BGImage) {
            currrentBGImageStyle.background = `url('${this.props.BGImage}') no-repeat center center`;
            currrentBGImageStyle.backgroundSize = 'contain';
        }
        return (
            <div ref={this.drawingCanvasRef} className={`drawing-canvas-main ${this.props.canvasBackground}`} style={currrentBGImageStyle}>
                <canvas id="fabricCanvas" width={'600'} height={'600'}></canvas>
            </div>
        );
    }
}
