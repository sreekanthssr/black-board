import React from 'react';
import {fabric} from 'fabric';
import FabricComponent from './component/fabric-component';
import MainMenuComponent from './component/main-menu-component';

import './App.scss';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {canvas : null, currentColor : '#000000', currentSize : 5,  currentBrushType : 'pen' };
    this.setCanvas = this.setCanvas.bind(this);
    this.setCurrentBrushType = this.setCurrentBrushType.bind(this);
    this.setCurrentSize = this.setCurrentSize.bind(this);
    this.setCurrentColor = this.setCurrentColor.bind(this);
  }

  setCanvas(canvas,done){
    this.setState({
      canvas
    }, () =>{
      done(this.state.canvas);
    });
  }

  setCurrentBrushType(currentBrushType){
    this.setState({currentBrushType});
  }

  setCurrentColor(currentColor){
    this.setState({currentColor});
  }
  
  setCurrentSize(currentSize){
    this.setState({currentSize});
  }


  render(){
    return (<div className="main-container">
      <MainMenuComponent  setCurrentBrushType = {this.setCurrentBrushType} 
                          setCurrentSize = {this.setCurrentSize} 
                          setCurrentColor = {this.setCurrentColor}
                          color={this.state.currentColor}
                          size={this.state.currentSize}
      />
      <FabricComponent  setCanvas={this.setCanvas} 
                        canvas={this.state.canvas} 
                        color={this.state.currentColor} 
                        size={this.state.currentSize} 
                        brushType = {this.state.currentBrushType}
      />
    </div>);
  }
}

export default App;
