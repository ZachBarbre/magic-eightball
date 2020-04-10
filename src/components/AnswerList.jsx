import React from 'react';
import './answerList.css'

const AnswerList = ({answerList}) => {
    answerList = answerList.reverse()
    return(
        <ul>
            {answerList.map((answer, index) => {
                return (
                <li className='answer' key={`${answer}-${index}`}>
                    <p>{answer.question}</p>
                    <p>{answer.answer}</p>
                </li>
                )
            })}
        </ul>
    )
}

export default AnswerList;