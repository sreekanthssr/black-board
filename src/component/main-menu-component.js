import React from 'react';
import html2canvas from 'html2canvas';

export default class MainMenuComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state = {"brushClass" : 'fa-pen'};
        this.menuClick = this.menuClick.bind(this);
        this.setColorAndSize = this.setColorAndSize.bind(this);
        this.setBrushType = this.setBrushType.bind(this);        
        this.setCurrentColor = this.setCurrentColor.bind(this);        
        this.setCurrentSize = this.setCurrentSize.bind(this);
        this.setCanvasBackground = this.setCanvasBackground.bind(this);
    }

    menuClick(e,type){
        this.props.setCurrentAction(type);
    }    

    setColorAndSize(e,size,color){
        this.props.setCurrentColor(color);        
        this.props.setCurrentSize(size);
    }

    setCurrentSize(e){             
        this.props.setCurrentSize(e.target.value);
    }

    setCurrentColor(e){
        this.props.setCurrentColor(e.target.value); 
    }

    setBrushType(e,brush){
        let brushClass = 'fa-pen';
        switch(brush){
            case 'pencil':
                brushClass = 'fa-pencil-alt';
                break;
            case 'brush':
                brushClass = 'fa-paint-brush';
                break;               
            case 'highlighter':
                brushClass = 'fa-highlighter';                   
                break;
            default:
                brushClass = 'fa-pen';
        }
        this.setState({brushClass});
        this.props.setCurrentBrushType(brush);
    }

    setCanvasBackground(e,canvasBackground){
        this.props.setCurrentCanvasBackground(canvasBackground);
    }

    save(){
            html2canvas(this.props.drawingCanvasRef,
                {
                    allowTaint : true,
                    foreignObjectRendering : true,
                    useCORS: true,
                    backgroundColor: null
                })
                .then((canvas)=>{
                let link = document.createElement("a");
                    link.download = "Notebook.png";
                    link.href = canvas.toDataURL("image/png");
                    link.click();
            });/*, {
                onrendered: function (canvas) {
                    let myImage = canvas.toDataURL("image/png");
                    console.log(myImage);
                    
                }
            });*/
    }

    render(){
        return(
            <div className="main-menu-container">
                <div className="main-menu">
                    <div className="toolList">
                        <i className="fa fa-bars"></i>
                        <ul>
                            <li><i className={`paper-white-icon ${(this.props.canvasBackground === 'white')? 'paper-active' : ''}`} onClick={(e) => this.setCanvasBackground(e,'white')}></i><div>White paper</div></li>
                            <li><i className={`paper-ruled-icon ${(this.props.canvasBackground === 'ruled') ? 'paper-active' : ''}`} onClick={(e) => this.setCanvasBackground(e,'ruled')}></i><div>Ruled paper</div></li>
                            <li><i className={`paper-landscape-icon ${(this.props.canvasBackground === 'landscape') ? 'paper-active' : ''}`} onClick={(e) => this.setCanvasBackground(e,'landscape')}></i><div>Landscape paper</div></li>
                            <li><i className={`paper-gird-icon ${(this.props.canvasBackground === 'gird') ? 'paper-active' : ''}`} onClick={(e) => this.setCanvasBackground(e,'grid')}></i><div>Grid paper</div></li>
                            <li><i className={`fa fa-image ${(this.props.canvasBackground === 'image') ? 'paper-active' : ''}`} onClick={(e) => this.setCanvasBackground(e,'image')}></i><div>Custom Image</div></li>
                        </ul>
                    </div>
                    <div><i className="fa fa-save" onClick={(e) => this.save(e,'save')}></i></div>
                    <div><i className="fa fa-undo" onClick={(e) => this.menuClick(e,'undo')}></i></div>
                    <div><i className="fa fa-redo" onClick={(e) => this.menuClick(e,'redo')}></i></div>
                    <div><i className="fa fa-paste" onClick={(e) => this.menuClick(e,'paste')}></i></div>
                    <div><i className="fa fa-file" onClick={(e) => this.menuClick(e,'new')}></i></div>
                    <div><i className="fa fa-sliders-h" onClick={(e) => this.menuClick(e,'setting')}></i></div>
                    <div className="pageName"><span>Name</span></div>
                    <div><i className={`fa fa-circle fa-circle-small black ${(this.props.color === '#000000' && this.props.size === '5') ? 'active' : ''}`} onClick={(e) => this.setColorAndSize(e,'5','#000000')}></i></div>
                    <div><i className={`fa fa-circle fa-circle-small red ${(this.props.color === '#F00' && this.props.size === '5') ? 'active' : ''}`} onClick={(e) => this.setColorAndSize(e,'5','#F00')}></i></div>
                    <div><i className={`fa fa-circle fa-circle-small green ${(this.props.color === '#0F0' && this.props.size === '5') ? 'active' : ''}`} onClick={(e) => this.setColorAndSize(e,'5','#0F0')}></i></div>
                    <div><i className={`fa fa-circle fa-circle-small blue ${(this.props.color === '#00F' && this.props.size === '5') ? 'active' : ''}`} onClick={(e) => this.setColorAndSize(e,'5','#00F')}></i></div>
                    <div><i className={`fa fa-circle fa-circle-big cyan ${(this.props.color === '#009999' && this.props.size === '30') ? 'active' : ''}`} onClick={(e) => this.setColorAndSize(e,'30','#009999')}></i></div>
                    <div><i className={`fa fa-circle fa-circle-big orang ${(this.props.color === '#ff6600' && this.props.size === '30') ? 'active' : ''}`} onClick={(e) => this.setColorAndSize(e,'30','#ff6600')}></i></div>
                    <div><i className={`fa fa-circle fa-circle-big yellow ${(this.props.color === '#FFFF00' && this.props.size === '30') ? 'active' : ''}`} onClick={(e) => this.setColorAndSize(e,'30','#FFFF00')}></i></div>
                    <div className="toolList">
                        <span className="size-span">{this.props.size}</span>
                        <ul>
                            <li><input type="range" value={this.props.size} className="size-picker" min="1" max="50" onChange={(e) => this.setCurrentSize(e)}/></li>
                        </ul>
                    </div>
                    <div>
                        <input className="color-picker"  style={{color:this.props.color}} type="color" value={this.props.color}  onChange={(e) => this.setCurrentColor(e)}/>
                    </div>
                    <div className="toolList">
                        <i className={`fa ${this.state.brushClass}`}></i>
                        <ul>
                            <li><i className="fa fa-pen" onClick={(e) => this.setBrushType(e,'pen')}></i><div>Pen</div></li>
                            <li><i className="fa fa-pencil-alt" onClick={(e) => this.setBrushType(e,'pencil')}></i><div>Pencil</div></li>
                            <li><i className="fa fa-paint-brush" onClick={(e) => this.setBrushType(e,'brush')}></i><div>Brush</div></li>
                            <li><i className="fa fa-highlighter" onClick={(e) => this.setBrushType(e,'highlighter')}></i><div>Highlighter</div></li>
                        </ul>
                    </div>
                    <div><i className="fa fa-eraser" onClick={(e) => this.menuClick(e,'eraser')}></i></div>
                    <div><i className="fa fa-object-group" onClick={(e) => this.menuClick(e,'select-area')}></i></div>
                    </div>
            </div>
            
        );
    }
}