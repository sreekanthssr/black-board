import React from 'react';
import './App.scss';

import FabricComponent from './component/fabric-component';
import MainMenuComponent from './component/main-menu-component';
import ImageUploadComponent from './component/image-upload-component';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {canvas : null, currentColor : '#000000', currentSize : 5,  currentBrushType : 'pen', currentCanvasBackground : 'ruled', currentBGImage:'',showModel : false, drawingCanvasRef : null,currentAction : null };
    this.setCanvas = this.setCanvas.bind(this);
    this.setCurrentBrushType = this.setCurrentBrushType.bind(this);
    this.setCurrentSize = this.setCurrentSize.bind(this);
    this.setCurrentColor = this.setCurrentColor.bind(this);
    this.setCurrentCanvasBackground = this.setCurrentCanvasBackground.bind(this);
    this.setCurrentBGImage = this.setCurrentBGImage.bind(this);
    this.passRef = this.passRef.bind(this);
    this.setCurrentAction = this.setCurrentAction.bind(this);
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
  
  setCurrentCanvasBackground(currentCanvasBackground){
    this.setState({currentCanvasBackground});
    if(currentCanvasBackground  === 'image'){
      this.setState({showModel : true});
    }
  }

  setCurrentBGImage(currentBGImage){
    this.setState({currentBGImage, showModel:false});
    
  }

  passRef(drawingCanvasRef){
    this.setState({drawingCanvasRef});
  }

  setCurrentAction(currentAction){
    this.setState({currentAction});
  }

  render(){
    return (<div className="main-container">
      <MainMenuComponent  setCurrentBrushType = {this.setCurrentBrushType} 
                          setCurrentSize = {this.setCurrentSize} 
                          setCurrentColor = {this.setCurrentColor}
                          setCurrentCanvasBackground = {this.setCurrentCanvasBackground}
                          setCurrentAction = {this.setCurrentAction}
                          color={this.state.currentColor}
                          size={this.state.currentSize}
                          canvasBackground={this.state.currentCanvasBackground}
                          drawingCanvasRef = {this.state.drawingCanvasRef}

      />
      <FabricComponent  setCanvas={this.setCanvas} 
                        canvas={this.state.canvas} 
                        color={this.state.currentColor} 
                        size={this.state.currentSize} 
                        brushType = {this.state.currentBrushType}
                        canvasBackground={this.state.currentCanvasBackground}
                        currentBGImage = {this.state.currentBGImage}
                        passRef = {this.passRef}
                        action = {this.state.currentAction}
      />
      {this.state.showModel && <ImageUploadComponent 
                      setCurrentBGImage = {this.setCurrentBGImage}
                      setCurrentCanvasBackground = {this.setCurrentCanvasBackground}/>}
    </div>);
  }
}

export default App;
