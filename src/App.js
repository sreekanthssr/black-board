import React from 'react';
import './App.scss';


import FabricComponent from './component/fabric-component';
import MainMenuComponent from './component/main-menu-component';
import ImageUploadComponent from './component/image-upload-component';
import CustomModalComponent from './component/custom-modal-component';
import ConfirmBoxComponent from './component/confirm-box-component';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {canvas : null, currentColor : '#000000', currentSize : 5,  currentBrushType : 'pen', currentCanvasBackground : 'ruled', currentBGImage:'',showImageUploadBox : false, drawingCanvasRef : null,currentAction : null, saveConfirmFlag : false };
    this.setCanvas = this.setCanvas.bind(this);
    this.setCurrentBrushType = this.setCurrentBrushType.bind(this);
    this.setCurrentSize = this.setCurrentSize.bind(this);
    this.setCurrentColor = this.setCurrentColor.bind(this);
    this.setCurrentCanvasBackground = this.setCurrentCanvasBackground.bind(this);
    this.setCurrentBGImage = this.setCurrentBGImage.bind(this);
    this.passRef = this.passRef.bind(this);
    this.setCurrentAction = this.setCurrentAction.bind(this);
    this.oldCanvasBackground = {image:'',type:'ruled'};
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
    this.oldCanvasBackground.type = this.state.currentCanvasBackground;
    this.setState({currentCanvasBackground});
    if(currentCanvasBackground  === 'image'){
      this.setState({showImageUploadBox : true});
    }
  }

  setCurrentBGImage(currentBGImage){
    this.oldCanvasBackground.image = this.state.currentBGImage;
    if(currentBGImage){
      this.setState({currentBGImage, showImageUploadBox:false});
    } else {
      this.setState({currentBGImage:this.oldCanvasBackground.image,currentCanvasBackground:this.oldCanvasBackground.type, showImageUploadBox:false});
    }
    
  }
 
  passRef(drawingCanvasRef){
    this.setState({drawingCanvasRef});
  }

  checkCanvasUpdated(){
    return (this.state.canvas && this.state.canvas.getObjects().length >1);
  }

  setCurrentAction(currentAction,overWriteCheck){
    this.setState({saveConfirmFlag : false});
    switch(currentAction){
      case 'new':
        (this.checkCanvasUpdated() && !overWriteCheck) ? this.setState({saveConfirmFlag : true}) : this.setState({currentAction});
        break;
      default: 
        this.setState({currentAction});
    }
  }

  setSaveConfirmFlag(saveConfirmFlag){
    this.setState({saveConfirmFlag});
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

      <CustomModalComponent show={this.state.showImageUploadBox} closeCallBack = {this.setCurrentBGImage}>
        <ImageUploadComponent  setCurrentBGImage = {this.setCurrentBGImage}/>
      </CustomModalComponent>

      <CustomModalComponent show={this.state.saveConfirmFlag} closeCallBack = {() => this.setSaveConfirmFlag(false)}>
        <ConfirmBoxComponent messgae="Do you want to save the changes?" button1="Yes" button2="No" button1CallBack={() => this.setCurrentAction('save')} button2Callback={() => this.setCurrentAction('new', true)} />
      </CustomModalComponent>
    </div>);
  }
}

export default App;
