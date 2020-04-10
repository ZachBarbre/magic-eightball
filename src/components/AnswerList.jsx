import React from 'react';

const AnswerList = ({answerList}) => {
    return(
        <ul>
            {answerList.map((answer, index) => {
                return (
                <li key={`${answer}-${index}`}>
                    <p>{answer.question}</p>
                    <p>{answer.answer}</p>
                </li>
                )
            })}
        </ul>
    )
}

export default AnswerList;