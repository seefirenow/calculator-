import React from 'react'
import './calculator.css'

const Standard = () => {
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previousOperand"></div>
                <div className="currentOperand"></div>
            </div>
        </div>
    )
}

export default Standard
