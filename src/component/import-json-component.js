import React from "react";

export default class ImportJsonComponent extends React.Component{
    render(){
        return (<div className="upload-file">
                    <input id="importJsonInput" onChange={(e) => this.props.setImportJson(e)} type="file" accept="application/JSON" className="hide"/>
                    <label htmlFor="importJsonInput">Select JSON file</label>
                </div>)
    }
}