import React, { useState } from 'react';
import EightBall from './EightBall.jsx';
import AnswerList from './AnswerList.jsx'


const AskEightBall = () => {
    const [askInput, setAskInput] = useState('');
    const [eightBallAnswer, setEightBallAnswer] = useState({magic:{}});
    const [answerList, setAnswerList] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        getEightBallAnswer(askInput);
        setAskInput('');
    }



    const getEightBallAnswer = async (question) => {
        const params = encodeURIComponent(question);
        const uri = 'https://8ball.delegator.com/magic/JSON/' + params;
        const eightBallResponse = await fetch(uri);
        const eightBallData = await eightBallResponse.json();
        setEightBallAnswer(eightBallData.magic);
        setAnswerList([...answerList, eightBallAnswer]);
    }



    return (
        <>
            <EightBall magic={eightBallAnswer}/>
            <form onSubmit={e => handleSubmit(e)}>
                <input 
                type="text" 
                placeholder='Ask the Eight Ball' 
                value={askInput}
                onChange={e => {setAskInput(e.target.value)}}
                />
                <button type='submit'>ASK ME!</button>
            </form>
            <AnswerList answerList={answerList.slice(1)}/>
        </>
    )
}

export default AskEightBall;