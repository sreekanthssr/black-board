import React from "react";

export default class ImageUploadComponent extends React.Component{
    constructor(props){
        super(props);
        this.imageSelected = this.imageSelected.bind(this);
    }
    imageSelected(e){
        this.props.setCurrentBGImage(URL.createObjectURL(e.target.files[0]));
    }
    render(){
        return (<div className="model-box">
                    <div className="model-box-body">
                        <div className="upload-file">
                            <input id="canvasBackgroundImage" onChange={(e) => this.imageSelected(e)} type="file" accept="image/*" className="hide"/>
                            <label htmlFor="canvasBackgroundImage">Select Image</label>
                        </div>
                    </div>
                </div>)
    }
}