import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback }) => (
    <div className={`card ${feedback}`} >
        <span className="symbol">
            {feedback === 'hiden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)
export default Card