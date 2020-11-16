import React from 'react';
import './App.scss';

import FabricComponent from './component/fabric-component';
import MainMenuComponent from './component/main-menu-component';
import ImageUploadComponent from './component/image-upload-component';
import ImportJsonComponent from './component/import-json-component';
import CustomModalComponent from './component/custom-modal-component';
import ConfirmBoxComponent from './component/confirm-box-component';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = { canvas: null, color: '#000000', size: 5, brushType: 'pen', canvasBackground: 'ruled', BGImage: '', showImageUploadBox: false, drawingCanvasRef: null, action: null, saveConfirmFlag: false, importJsonFlag: false, importJson: null };

        this.setCurrentState = this.setCurrentState.bind(this);
        this.setCanvas = this.setCanvas.bind(this);
        this.oldCanvasBackground = { image: '', type: 'ruled' };
    }

    setCanvas (canvas, done) {
        this.setState({
            canvas
        }, () => {
            done(this.state.canvas);
        });
    }

    resetAction () {
        this.setState({ action: null });
    }

    setCurrentState (param) {
        let actionFlag = false;
        if (param) {
            console.log(param);
            if (param.action) {
                actionFlag = true;
                this.setState({ saveConfirmFlag: false, action: null });
                switch (param.action) {
                case 'new-confirm':
                    this.setState({ saveConfirmFlag: true });
                    break;
                case 'new':
                    this.setState({ action: 'new', saveConfirmFlag: false });
                    break;
                case 'open':
                    this.setState({ importJsonFlag: true });
                    break;
                case 'cancel-save':
                    this.setState({ action: null, saveConfirmFlag: false });
                    break;
                default:
                    this.setState(param);
                }
            } else if (param.importJson) {
                if (param.importJson && param.importJson.target && param.importJson.target.files) {
                    actionFlag = true;
                    this.setState({ action: 'open', importJson: param.importJson.target.files[0], importJsonFlag: false });
                } else {
                    this.setState({ importJsonFlag: false });
                }
            } else if (param.canvasBackground) {
                this.oldCanvasBackground.type = this.state.canvasBackground;
                this.setState(param);
                if (param.canvasBackground === 'image') {
                    this.setState({ showImageUploadBox: true });
                } else {
                    this.setState({ BGImage: null });
                }
            } else if (param.BGImage) {
                this.oldCanvasBackground.image = this.state.BGImage;
                if (param.BGImage && param.BGImage.target && param.BGImage.target.files) {
                    this.setState({ BGImage: URL.createObjectURL(param.BGImage.target.files[0]), showImageUploadBox: false });
                } else {
                    this.setState({ BGImage: this.oldCanvasBackground.image, canvasBackground: this.oldCanvasBackground.type, showImageUploadBox: false });
                }
            } else {
                this.setState(param);
            }
            if (!actionFlag) {
                this.resetAction();
                actionFlag = false;
            }
        }
    }

    checkCanvasUpdated () {
        return (this.state.canvas && this.state.canvas.getObjects().length > 1);
    }

    render () {
        return (<div className="main-container">
            <MainMenuComponent setCurrentState = {this.setCurrentState}
                canvasBackground={this.state.canvasBackground}
                drawingCanvasRef = {this.state.drawingCanvasRef}
                color={this.state.color}
                size={this.state.size}
            />

            <FabricComponent setCanvas={this.setCanvas}
                setCurrentState = {this.setCurrentState}
                canvas={this.state.canvas}
                color={this.state.color}
                size={this.state.size}
                brushType = {this.state.brushType}
                canvasBackground={this.state.canvasBackground}
                currentBGImage = {this.state.BGImage}
                action = {this.state.action}
                brushType = {this.state.brushType}
                canvasBackground={this.state.canvasBackground}
                BGImage = {this.state.BGImage}
                importJson = {this.state.importJson}
                drawingCanvasRef = {this.state.drawingCanvasRef}
            />

            <CustomModalComponent show={this.state.showImageUploadBox} closeCallBack = {(param) => this.setCurrentState({ showImageUploadBox: param })}>
                <ImageUploadComponent setCurrentState = {this.setCurrentState}/>
            </CustomModalComponent>

            <CustomModalComponent show={this.state.importJsonFlag} closeCallBack = {(param) => this.setCurrentState({ importJsonFlag: param })}>
                <ImportJsonComponent setCurrentState = {this.setCurrentState}/>
            </CustomModalComponent>

            <CustomModalComponent show={this.state.saveConfirmFlag} closeCallBack = {() => this.setCurrentState({ saveConfirmFlag: false })}>
                <ConfirmBoxComponent messgae="Do you want to clear all the changes?" button1="Yes" button2="No" button1CallBack={() => this.setCurrentState({ action: 'new' })} button2Callback={() => this.setCurrentState({ action: 'cancel-save' })} />
            </CustomModalComponent>
        </div>);
    }
}

export default App;
