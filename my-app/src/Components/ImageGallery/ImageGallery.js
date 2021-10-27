import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

function ImageGallery ({images}) {
    
    return (
        <ul className="ImageGallery">
            {images.map(image => 
                <ImageGalleryItem image={image} key={image.id}/>
            )}
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageGallery;