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

  setCurrentColorAndSize(currentColor,currentSize){
    this.setState({currentColor, currentSize});
  }


  render(){
    return (<div className="main-container">
      <MainMenuComponent  setCurrentBrushType = {this.setCurrentBrushType} 
                          setCurrentColorAndSize = {this.setCurrentColorAndSize} 
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
