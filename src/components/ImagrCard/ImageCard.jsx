import React from 'react'
import './ImageCard.css'

const ImageCard = ({ url, imgUrl, altText }) => {
    return (
        <div className="imageCard">
            <a href={url}>
                <img src={imgUrl} alt={altText} />
            </a>
        </div>
    )
}

export default ImageCard
