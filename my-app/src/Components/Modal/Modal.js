import React, {Component} from "react";
import {createPortal} from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.toggleModal()
        }
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.toggleModal()
        }
    }


    render() {

        const {largeImageURL, alt} = this.props;

        return createPortal(
            <div className="Overlay"
                onClick={this.handleBackdropClick}>
                <div className="Modal">
                    <img src={largeImageURL} alt={alt}/>
                </div>
            </div>,
            modalRoot,
        )
    }
}

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Modal;