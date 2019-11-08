import React from 'react';

export default class ImportJsonComponent extends React.Component {
    render () {
        return (<div className="upload-file">
            <input id="importJsonInput" onChange={(e) => this.props.setCurrentState({ importJson: e })} type="file" accept="application/JSON" className="hide"/>
            <label htmlFor="importJsonInput">Select JSON file</label>
        </div>);
    }
}
