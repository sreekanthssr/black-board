import React from 'react'

export default class ImageUploadComponent extends React.Component {
    render () {
        return (<div className="upload-file">
            <input id="canvasBackgroundImage" onChange={(e) => this.props.setCurrentBGImage(e)} type="file" accept="image/*" className="hide"/>
            <label htmlFor="canvasBackgroundImage">Select Image</label>
        </div>)
    }
}
