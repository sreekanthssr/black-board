import React from 'react';

export default class MainMenuComponent extends React.Component
{
    constructor(props){
        super(props);
        this.menuClick = this.menuClick.bind(this);
        this.setColorAndSize = this.setColorAndSize.bind(this);
        this.setBrush = this.setBrush.bind(this);
        this.setBrushColorAndSize = this.setBrushColorAndSize.bind(this);
    }

    menuClick(e,type){
        switch(type){

        }
    }    

    setColorAndSize(e,size,color){
        this.props.setCurrentColorAndSize(color,size);
    }

    setBrush(e,brush){
        this.props.setCurrentBrushType(brush);
    }

    setBrushColorAndSize(e,brush,size,color){
        this.props.setCurrentColorAndSize(color,size);
        this.props.setCurrentBrushType(brush);
    }
    render(){
        return(
            <div className="main-menu">
                <div><i value="menu" className="fa fa-bars" onClick={(e) => this.menuClick(e,'menu')}></i></div>
                <div><i value="menu" className="fa fa-save" onClick={(e) => this.menuClick(e,'save')}></i></div>
                <div><i value="menu" className="fa fa-undo" onClick={(e) => this.menuClick(e,'undo')}></i></div>
                <div><i value="menu" className="fa fa-redo" onClick={(e) => this.menuClick(e,'redo')}></i></div>
                <div><i value="menu" className="fa fa-paste" onClick={(e) => this.menuClick(e,'paste')}></i></div>
                <div><i value="menu" className="fa fa-file" onClick={(e) => this.menuClick(e,'new')}></i></div>
                <div><i value="menu" className="fa fa-sliders-h" onClick={(e) => this.menuClick(e,'setting')}></i></div>
                <div className="pageName"><span>Name</span></div>
                <div><i value="menu" className="fa fa-circle fa-circle-small balck" onClick={(e) => this.setColorAndSize(e,'5','#000')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-small red" onClick={(e) => this.setColorAndSize(e,'5','#F00')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-small green" onClick={(e) => this.setColorAndSize(e,'5','#0F0')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-small blue" onClick={(e) => this.setColorAndSize(e,'5','#00F')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-big cyan" onClick={(e) => this.setColorAndSize(e,'30','#009999')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-big orang" onClick={(e) => this.setColorAndSize(e,'30','#ff6600')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-big yellow" onClick={(e) => this.setColorAndSize(e,'30','#FFFF00')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-medium black" onClick={(e) => this.setColorAndSize(e,'15','#000')}></i></div>
                <div><i value="menu" className="fa fa-circle black" onClick={(e) => this.menuClick(e,'big-black')}></i></div>
                <div><i value="menu" className="fa fa-pen" onClick={(e) => this.menuClick(e,'pen')}></i></div>
                <div><i value="menu" className="fa fa-eraser" onClick={(e) => this.menuClick(e,'eraser')}></i></div>
                <div><i value="menu" className="fa fa-object-group" onClick={(e) => this.menuClick(e,'select-area')}></i></div>
            </div>
        );
    }
}