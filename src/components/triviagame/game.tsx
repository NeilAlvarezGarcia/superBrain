import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { GetContext } from '../../contextState';
import BackButton from '../backbutton/index';
import TimeBar from '../timerbar/index';

export interface Question {
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
    answers: string[];
    question: string;
}

const Game = () => {
  const {levelTrivia} = GetContext();

  const INITTIMER = useMemo(() => {
    if(levelTrivia === 'easy') return 40;
    if(levelTrivia === 'medium') return 30;
    return 20;
  }, [levelTrivia]);
  
  const [timer, setTimer] = useState(INITTIMER);
  const [count, setCount] = useState(3);
  const [question, setQuestion] = useState<Question>();
  const [userAnswer, setUserAnswer] = useState<boolean>(false);
  const [score, setScore] = useState(0);

  const pickQuestion = useCallback(async () => {
    const URL = `https://opentdb.com/api.php?amount=1&difficulty=${levelTrivia}&type=multiple`;

    const res = await (await fetch(URL)).json();

    if(!res) setCount(3);

    const {results: {0: {category, correct_answer, incorrect_answers, question}}} = res;

    const newQuestion:Question = {
        category,
        correct_answer,
        incorrect_answers,
        answers: [...incorrect_answers, correct_answer],
        question,
    }

    setQuestion(newQuestion);
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, answer: string) => {
    setUserAnswer(true);
    if(answer === question?.correct_answer) {
        setScore(score + 10);
        return e.currentTarget.classList.add('bg-good', 'text-white');
    }
    e.currentTarget.classList.add('bg-bad', 'text-white');
  }

  useEffect(() => {
      
    const countControler = setTimeout(() => {
          
        if(count > 0) {
            setCount(count - 1);
            if(count <= 1) {
                pickQuestion();
            }
        }
       
    }, 1000);
    const timerControler = setTimeout(() => {
          
        if(!userAnswer && question && timer > 0) {
            setTimer(timer - .1)
        }
       
    }, 100);

    return () => {
        clearTimeout(countControler)
        clearTimeout(timerControler)
        
    }
  }, [timer, count, question])

  return (
    <>
        <BackButton route='/trivia'/>
        <div className="container">
            <TimeBar timer={timer} INITTIMER={INITTIMER} question={question}/>
            <div className="text-center">
                <p className='text-white fw-bold my-0 fs-3'>Score: <span className='fw-light'>{score}</span></p>
            </div>
            <div className="container-question">
                <div className="first"></div>
                <div className="second"></div>
                <div className="third d-flex justify-content-center align-items-center text-center px-2">
                    {question && <p className='text-black fs-5 px-2' dangerouslySetInnerHTML={{__html: question.question}}/>}
                    {count > 0 && <p className='count'>{count}</p>}
                    <p>{}</p>
                </div>
            </div>
            <div className="container-answer w-100">
                {question?.answers.map((answer: string, index: number) => (
                    <button key={index} disabled={userAnswer} className='text-black rounded w-100 fs-4' onClick={e => handleClick(e, answer)} dangerouslySetInnerHTML={{__html: answer}}/>
                ))}
            </div>

            {userAnswer && (
                <button onClick={() => setCount(3)} className='btn btn-primary w-100 fs-4'>Next question</button>
            )}
        </div>
    </>
  )
}

export default Game