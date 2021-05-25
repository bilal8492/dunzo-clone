import React from 'react'
import { SmallCard } from '../SmallCard/SmallCard'
import './SmallCardContainer.css'

const SmallCardContainer = () => {
    return (
        <div className="small-container">
            <SmallCard
                imgUrl="https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_meat_tertiary_grid_1609739765849.png"
                title="Meat and Fish"
                altText="img"
            />

            <SmallCard imgUrl="https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_pets_tertiary_grid_1609739755734.png"
                altText="Imag" title="Pet Supplies" />
            <SmallCard imgUrl="https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/paan_grid_1609739855940.png"
                altText="img" title="Paan Shop" />
            <SmallCard className="small-card"
                imgUrl="https://ik.imagekit.io/dunzo/home/tr:w-80,h-80_home_icon/icons/R4_Icons/Home/default_others_tertiary_grid_1609739745871.png"
                title="Any store in the City" altText="img" />
        </div>
    )
}

export default SmallCardContainer
