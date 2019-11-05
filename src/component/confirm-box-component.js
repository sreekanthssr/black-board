import React from 'react';

export default class ConfirmBoxComponent extends React.Component {
    constructor(props){
        super(props);
        this.dummy = this.dummy.bind(this);
    }
    dummy(){

    }
    render(){
        return (<div className="">
                    <div>{(this.props.messgae) ? this.props.messgae : 'Message here'}</div>
                    <div>
                        <button onClick={this.props.button1CallBack ? this.props.button1CallBack : ()=>{}}>
                        {this.props.button1 ? this.props.button1 : 'OK'}
                        </button>
                        {
                            (this.props.button2) && <button onClick={this.props.button2Callback ? this.props.button2Callback : ()=>{} }>
                                    {this.props.button2 }
                            </button>
                        }
                    </div>
                </div>)
    }
}