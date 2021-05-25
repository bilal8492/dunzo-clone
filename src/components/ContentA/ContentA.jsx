import React from 'react'
import "./ContentA.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


const ContentA = () => {
    return (
        <div className="a-container">
            <div className="home-mumbai">
                <span className="home">Home</span>
                <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" width="8px" height="8px" viewBox="0 0 8 8" fill="#C9CDD8"><path d="M3.64633 7.64633C3.84166 7.84166 4.15834 7.84166 4.35367 7.64633L8 4L4.35367 0.353671C4.15834 0.158344 3.84166 0.158344 3.64633 0.353672C3.4513 0.548703 3.45096 0.864808 3.64557 1.06026L6.08383 3.50898H0.491018C0.219836 3.50898 0 3.72882 0 4C0 4.27118 0.219836 4.49102 0.491018 4.49102H6.08383L3.64557 6.93974C3.45096 7.13519 3.4513 7.4513 3.64633 7.64633Z"></path></svg>
                <span className="mumbai">Mumbai</span></div>
            <div className="container-text">
                <h1>Mumbai</h1>
                <p>Why step out when you can get everything delivered home with the tap of a button? Mumbai’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!</p>

            </div>
        </div>


    )
}

export default ContentA
