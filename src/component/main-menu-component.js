import React from 'react';
import html2canvas from 'html2canvas';

export default class MainMenuComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = { brushClass: 'fa-pen' };
        this.menuClick = this.menuClick.bind(this);
        this.setColorAndSize = this.setColorAndSize.bind(this);
        this.setBrushType = this.setBrushType.bind(this);
        this.setColor = this.setColor.bind(this);
        this.setSize = this.setSize.bind(this);
        this.setCanvasBackground = this.setCanvasBackground.bind(this);
    }

    menuClick (e, type) {
        this.props.setCurrentState({ action: type });
    }

    setColorAndSize (e, size, color) {
        this.props.setCurrentState({ size, color });
    }

    setSize (e) {
        this.props.setCurrentState({ size: e.target.value });
    }

    setColor (e) {
        this.props.setCurrentState({ color: e.target.value });
    }

    setBrushType (e, brush) {
        let brushClass = 'fa-pen';
        switch (brush) {
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
        this.setState({ brushClass });
        this.props.setCurrentState({ brushType: brush });
    }

    setCanvasBackground (e, canvasBackground) {
        this.props.setCurrentState({ canvasBackground });
    }

    download () {
        html2canvas(this.props.drawingCanvasRef,
            {
                allowTaint: true,
                foreignObjectRendering: true,
                useCORS: true,
                backgroundColor: null
            })
            .then((canvas) => {
                const link = document.createElement('a');
                link.download = 'Notebook.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
    }

    render () {
        return (
            <div className="main-menu-container">
                <div className="main-menu">
                    <div className="toolList">
                        <i className="fa fa-bars"></i>
                        <ul>
                            <li onClick={(e) => this.setCanvasBackground(e, 'white')}>
                                <i className={`paper-white-icon ${(this.props.canvasBackground === 'white') ? 'paper-active' : ''}`} ></i>
                                <div>White paper</div>
                            </li>
                            <li onClick={(e) => this.setCanvasBackground(e, 'ruled')}>
                                <i className={`paper-ruled-icon ${(this.props.canvasBackground === 'ruled') ? 'paper-active' : ''}`}></i>
                                <div>Ruled paper</div>
                            </li>
                            <li onClick={(e) => this.setCanvasBackground(e, 'landscape')}>
                                <i className={`paper-landscape-icon ${(this.props.canvasBackground === 'landscape') ? 'paper-active' : ''}`}></i>
                                <div>Landscape paper</div>
                            </li>
                            <li onClick={(e) => this.setCanvasBackground(e, 'grid')}>
                                <i className={`paper-gird-icon ${(this.props.canvasBackground === 'gird') ? 'paper-active' : ''}`}></i>
                                <div>Grid paper</div>
                            </li>
                            <li onClick={(e) => this.setCanvasBackground(e, 'image')}>
                                <i className={`fa fa-image ${(this.props.canvasBackground === 'image') ? 'paper-active' : ''}`}></i>
                                <div>Custom Image</div>
                            </li>
                        </ul>
                    </div>
                    <div onClick={(e) => this.menuClick(e, 'new-confirm')}>
                        <i className="fa fa-file"></i>
                    </div>
                    <div onClick={(e) => this.menuClick(e, 'save')}>
                        <i className="fa fa-save"></i>
                    </div>
                    <div onClick={(e) => this.menuClick(e, 'open')}>
                        <i className="fa fa-file-import"></i>
                    </div>
                    {/* <div onClick={(e) => this.download(e, 'download')}>
                        <i className="fa fa-download"></i>
                    </div> */}
                    <div onClick={(e) => this.menuClick(e, 'undo')}>
                        <i className="fa fa-undo"></i>
                    </div>
                    <div onClick={(e) => this.menuClick(e, 'redo')}>
                        <i className="fa fa-redo"></i>
                    </div>

                    <div className="pageName"><span>Notebook</span></div>

                    <div>
                        <i onClick={(e) => this.setColorAndSize(e, '5', '#000000')} className={`fa fa-circle fa-circle-small black ${(this.props.color === '#000000' && this.props.size === '5') ? 'active' : ''}`}></i>
                    </div>
                    <div>
                        <i onClick={(e) => this.setColorAndSize(e, '5', '#F00')} className={`fa fa-circle fa-circle-small red ${(this.props.color === '#F00' && this.props.size === '5') ? 'active' : ''}`}></i>
                    </div>
                    <div>
                        <i onClick={(e) => this.setColorAndSize(e, '5', '#0F0')} className={`fa fa-circle fa-circle-small green ${(this.props.color === '#0F0' && this.props.size === '5') ? 'active' : ''}`}></i>
                    </div>
                    <div>
                        <i onClick={(e) => this.setColorAndSize(e, '5', '#00F')} className={`fa fa-circle fa-circle-small blue ${(this.props.color === '#00F' && this.props.size === '5') ? 'active' : ''}`}></i>
                    </div>
                    <div>
                        <i onClick={(e) => this.setColorAndSize(e, '30', '#009999')} className={`fa fa-circle fa-circle-big cyan ${(this.props.color === '#009999' && this.props.size === '30') ? 'active' : ''}`}></i>
                    </div>
                    <div>
                        <i onClick={(e) => this.setColorAndSize(e, '30', '#ff6600')} className={`fa fa-circle fa-circle-big orang ${(this.props.color === '#ff6600' && this.props.size === '30') ? 'active' : ''}`}></i>
                    </div>
                    <div>
                        <i onClick={(e) => this.setColorAndSize(e, '30', '#FFFF00')} className={`fa fa-circle fa-circle-big yellow ${(this.props.color === '#FFFF00' && this.props.size === '30') ? 'active' : ''}`}></i>
                    </div>
                    <div className="toolList">
                        <span className="size-span">{this.props.size}</span>
                        <ul>
                            <li><input type="range" value={this.props.size} className="size-picker" min="1" max="50" onChange={(e) => this.setSize(e)}/></li>
                        </ul>
                    </div>
                    <div>
                        <input className="color-picker" style={{ color: this.props.color }} type="color" value={this.props.color} onChange={(e) => this.setColor(e)}/>
                    </div>
                    <div className="toolList">
                        <i className={`fa ${this.state.brushClass}`}></i>
                        <ul>
                            <li>
                                <i className="fa fa-pen" onClick={(e) => this.setBrushType(e, 'pen')}></i>
                                <div>Pen</div>
                            </li>
                            <li onClick={(e) => this.setBrushType(e, 'pencil')}>
                                <i className="fa fa-pencil-alt"></i>
                                <div>Pencil</div>
                            </li>
                            <li onClick={(e) => this.setBrushType(e, 'brush')}>
                                <i className="fa fa-paint-brush"></i>
                                <div>Brush</div>
                            </li>
                            <li onClick={(e) => this.setBrushType(e, 'highlighter')}>
                                <i className="fa fa-highlighter"></i>
                                <div>Highlighter</div>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <i className="fa fa-eraser" onClick={(e) => this.menuClick(e, 'eraser')}></i>
                    </div>
                   <div>
                        <i className="fa fa-object-group" onClick={(e) => this.menuClick(e, 'select-area')}></i>
                    </div> */}
                </div>
            </div>

        );
    }
}
