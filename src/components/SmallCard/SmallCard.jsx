import React from 'react'
import "./SmallCard.css"

export const SmallCard = ({ imgUrl, altText, title }) => {
    return (
        <div className="small-card">
            <img src={imgUrl} alt={altText} />
            <p>{title}</p>
        </div>
    )
}
