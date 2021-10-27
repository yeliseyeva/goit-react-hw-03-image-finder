import React, {Component} from "react";
import Modal from "../Modal/Modal";
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {

    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({showModal}) => ({
          showModal: !showModal
        }));
    };
    

    onClickItem = () => {
        this.toggleModal();
    }

    render() {

        const {webformatURL, tags, largeImageURL} = this.props.image;
        const {showModal} = this.state;

        return (
            <>
            <li className="ImageGalleryItem" 
                onClick={this.onClickItem}>
                <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
            </li>

            {showModal && (<Modal toggleModal={this.toggleModal} largeImageURL={largeImageURL} alt={this.props.image.tags}/>)}
            </>
        )

    }
}

ImageGalleryItem.propTypes = {
    image: PropTypes.object.isRequired
}


export default ImageGalleryItem;