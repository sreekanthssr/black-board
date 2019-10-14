import React from 'react';

export default class MainMenuComponent extends React.Component
{
    constructor(props){
        super(props);
        this.menuClick = this.menuClick.bind(this);
    }

    menuClick(e,type){
        alert(type);
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
                <div><i value="menu" className="fa fa-circle fa-circle-small balck" onClick={(e) => this.menuClick(e,'small-black')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-small red" onClick={(e) => this.menuClick(e,'small-red')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-small green" onClick={(e) => this.menuClick(e,'small-green')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-small blue" onClick={(e) => this.menuClick(e,'small-blue')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-big cyan" onClick={(e) => this.menuClick(e,'big-red')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-big orang" onClick={(e) => this.menuClick(e,'big-green')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-big yellow" onClick={(e) => this.menuClick(e,'big-blue')}></i></div>
                <div><i value="menu" className="fa fa-circle fa-circle-medium black" onClick={(e) => this.menuClick(e,'medium-back')}></i></div>
                <div><i value="menu" className="fa fa-circle black" onClick={(e) => this.menuClick(e,'big-black')}></i></div>
                <div><i value="menu" className="fa fa-pen" onClick={(e) => this.menuClick(e,'pen')}></i></div>
                <div><i value="menu" className="fa fa-eraser" onClick={(e) => this.menuClick(e,'eraser')}></i></div>
                <div><i value="menu" className="fa fa-object-group" onClick={(e) => this.menuClick(e,'select-area')}></i></div>
            </div>
        );
    }
}