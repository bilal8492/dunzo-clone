import React from 'react'
import ImageCard from '../ImagrCard/ImageCard'
import "./CallOut2.css"

export const CallOut2 = () => {
    return (
        <div className="callOut-container">
            <ImageCard url="#" imgUrl="https://ik.imagekit.io/dunzo/web-assets/images/d4b.jpg?tr=w-488,h-326,cm-pad_resize" altText="image" />
            <ImageCard url="#" imgUrl="https://ik.imagekit.io/dunzo/web-assets/images/grocery.jpg?tr=w-488,h-326,cm-pad_resize" altText="Images" />
            <ImageCard url="#" imgUrl="https://ik.imagekit.io/dunzo/web-assets/images/restaurants.jpg?tr=w-488,h-326,cm-pad_resize" altText="Images" />
            <ImageCard url="#" imgUrl="https://ik.imagekit.io/dunzo/web-assets/images/send-packages.jpg?tr=w-488,h-326,cm-pad_resize" altText="Images" />
        </div>
    )
}
