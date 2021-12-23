/* eslint-disable react/prop-types */

import React from "react";

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <div className={this.props.isActive ? "modal is-active" : "modal"}>
                <div className="modal-background" onClick={this.close}></div>
                <div className="modal-card">
                    <div className="modal-card-head">
                        <p className="modal-card-title has-text-weight-semibold">{this.props.title}</p>
                        <button className="delete" aria-label="close" onClick={this.close}></button>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class ModalBody extends React.Component {
    render() {
        return (
            <div className="modal-card-body">
                {this.props.children}
            </div>
        );
    }
}

class ModelFooter extends React.Component {
    render() {
        return (
            <div className="modal-card-foot">
                {this.props.children}
            </div>
        );
    }
}

export default Modal;
export { ModalBody, ModelFooter };