import React from 'react';

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
    }

    menuClick(e,type){
        switch(type){

        }
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
            default:
                brushClass = 'fa-pen';
        }
        this.setState({brushClass});
        this.props.setCurrentBrushType(brush);
    }

    render(){
        return(
            <div className="main-menu-container">
                <div className="main-menu">
                    <div><i className="fa fa-bars" onClick={(e) => this.menuClick(e,'menu')}></i></div>
                    <div><i className="fa fa-save" onClick={(e) => this.menuClick(e,'save')}></i></div>
                    <div><i className="fa fa-undo" onClick={(e) => this.menuClick(e,'undo')}></i></div>
                    <div><i className="fa fa-redo" onClick={(e) => this.menuClick(e,'redo')}></i></div>
                    <div><i className="fa fa-paste" onClick={(e) => this.menuClick(e,'paste')}></i></div>
                    <div><i className="fa fa-file" onClick={(e) => this.menuClick(e,'new')}></i></div>
                    <div><i className="fa fa-sliders-h" onClick={(e) => this.menuClick(e,'setting')}></i></div>
                    <div className="pageName"><span>Name</span></div>
                    <div><i className="fa fa-circle fa-circle-small balck" onClick={(e) => this.setColorAndSize(e,'5','#000')}></i></div>
                    <div><i className="fa fa-circle fa-circle-small red" onClick={(e) => this.setColorAndSize(e,'5','#F00')}></i></div>
                    <div><i className="fa fa-circle fa-circle-small green" onClick={(e) => this.setColorAndSize(e,'5','#0F0')}></i></div>
                    <div><i className="fa fa-circle fa-circle-small blue" onClick={(e) => this.setColorAndSize(e,'5','#00F')}></i></div>
                    <div><i className="fa fa-circle fa-circle-big cyan" onClick={(e) => this.setColorAndSize(e,'30','#009999')}></i></div>
                    <div><i className="fa fa-circle fa-circle-big orang" onClick={(e) => this.setColorAndSize(e,'30','#ff6600')}></i></div>
                    <div><i className="fa fa-circle fa-circle-big yellow" onClick={(e) => this.setColorAndSize(e,'30','#FFFF00')}></i></div>
                    <div className="toolList">
                        <span className="size-span">{this.props.size}</span>
                        <ul>
                            <li><input type="range" min="5" max="50" onChange={(e) => this.setCurrentSize(e)}/></li>
                        </ul>
                    </div>
                    <div>
                        {/* <i className="fa fa-fill-drip"></i> */}
                        <input className="color-picker"  style={{color:this.props.color}} type="color" value={this.props.color}  onChange={(e) => this.setCurrentColor(e)}/>
                    </div>
                    <div className="toolList">
                        <i className={`fa ${this.state.brushClass}`}></i>
                        <ul>
                            <li><i className="fa fa-pen" onClick={(e) => this.setBrushType(e,'pen')}></i>Pen</li>
                            <li><i className="fa fa-pencil-alt" onClick={(e) => this.setBrushType(e,'pencil')}></i>Pencil</li>
                            <li><i className="fa fa-paint-brush" onClick={(e) => this.setBrushType(e,'brush')}></i>Brush</li>
                        </ul>
                    </div>
                    <div><i className="fa fa-eraser" onClick={(e) => this.menuClick(e,'eraser')}></i></div>
                    <div><i className="fa fa-object-group" onClick={(e) => this.menuClick(e,'select-area')}></i></div>
                    </div>
            </div>

        );
    }
}