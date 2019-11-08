import React from 'react';

export default class customModalComponent extends React.Component {
    constructor (props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close (e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (e.target.classList.contains('model-box')) {
            this.props.closeCallBack(null);
        }
    }

    render () {
        if (this.props.show) {
            return (<div className='model-box' onClick={(e) => this.close(e)}>
                <div className="model-box-body">
                    {this.props.children}
                </div>
            </div>);
        } else {
            return '';
        }
    }
}
