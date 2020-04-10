import React from 'react';
import './eightBall.css';

const EightBall = ({ magic }) => { 
    const { answer, question, type } = magic

    return(
    <div className='eightball'>
        <p>{question}</p>
        <p>{answer}</p>
    </div>
    )
}

export default EightBall;