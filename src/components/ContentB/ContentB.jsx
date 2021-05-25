import React from 'react'
import { CallOut2 } from '../CallOut2/CallOut2'
import "./ContentB.css"

export const ContentB = () => {
    return (
        <div className="b-container">
            <div className="b-content">
                <p className="a">Top picks for you</p>
                <div className="green-lines">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="7px" display="block" fill="#25D366" viewBox="0 0 57 4" class="sc-64ptou-0 fRuWqJ"><rect width="39" height="4" rx="2"></rect><rect x="43" width="14" height="4" rx="2"></rect></svg>
                </div>

            </div>
            <CallOut2 />
        </div>
    )
}
