import React from 'react';
import {fabric} from 'fabric';
import FabricComponent from './component/fabric-component';
import MainMenuComponent from './component/main-menu-component';

import './App.scss';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {canvas : null, currentColor : 'black', currentSize : 5,  currentBrushType : 'pen' };
    this.setCanvas = this.setCanvas.bind(this);
    this.setCurrentBrushType = this.setCurrentBrushType.bind(this);
    this.setCurrentColorAndSize = this.setCurrentColorAndSize.bind(this);
  }

  setCanvas(canvas){
    this.setState({
      canvas
    }, this.drawingPropChanged);
  }

  setCurrentBrushType(currentBrushType){
    this.setState({currentBrushType}, this.drawingPropChanged);
  }

  setCurrentColorAndSize(currentColor,currentSize){
    this.setState({currentColor, currentSize}, this.drawingPropChanged);
  }

  drawingPropChanged(){
    let canvas = this.state.canvas;
    let color = this.state.currentColor;
    let size = this.state.currentSize;

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
    return (<div >
      <MainMenuComponent  setCurrentBrushType = {this.setCurrentBrushType} 
                          setCurrentColorAndSize = {this.setCurrentColorAndSize} 
      />
      <FabricComponent  setCanvas={this.setCanvas} 
                        canvas={this.state.canvas} 
                        color={this.state.currentBrushType} 
                        size={this.state.currentSize} 
                        brushType = {this.state.currentBrushType}
      />
    </div>);
  }
}

export default App;
