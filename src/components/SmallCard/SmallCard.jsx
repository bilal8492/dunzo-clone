import React from 'react'
import "./SmallCard.css"

export const SmallCard = ({ imgUrl, altText, title }) => {
    return (
        <div className="small-card">
            <img src={imgUrl} alt={altText} width="40px" height="40px" />
            <p>{title}</p>
        </div>
    )
}
