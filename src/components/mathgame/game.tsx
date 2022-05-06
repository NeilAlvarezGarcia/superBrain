import React, {
	ChangeEvent,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
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
	const { levelMath } = GetContext();

	const INITTIMER = useMemo(() => {
		if (levelMath === 'easy') return 40;
		if (levelMath === 'medium') return 30;
		return 20;
	}, [levelMath]);

	const [numberAnswer, setNumberAnswer] = useState('');
	const [timer, setTimer] = useState(INITTIMER);
	const [count, setCount] = useState(3);
	const [showCounter, setShowCounter] = useState(true);
	const [question, setShowQuestion] = useState('');
	const [userAnswer, setUserAnswer] = useState('');
	const [score, setScore] = useState(0);

	useEffect(() => {
		const countControler = setTimeout(() => {
			if (count > 0) {
				setCount(count - 1);
			}
			if (count <= 1) {
				setShowCounter(false);
			}
		}, 1000);
		const timerControler = setTimeout(() => {
			if (timer > 0 && !showCounter) {
				setTimer(timer - 0.1);
			}
		}, 100);

		return () => {
			clearTimeout(countControler);
			clearTimeout(timerControler);
		};
	}, [timer, count, showCounter]);

	useEffect(() => {
		const scoreStorage = localStorage.getItem('triviaScore');
		if (scoreStorage) {
			if (Number(scoreStorage) < score)
				localStorage.setItem('triviaScore', score.toString());
		} else {
			localStorage.setItem('triviaScore', score.toString());
		}
	}, [score]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (/\d$/.test(e.target.value) || e.target.value === '')
			setNumberAnswer(e.target.value);
	};

	return (
		<>
			<BackButton route='/math' />
			<div className='container mt-4'>
				{!showCounter && (
					<TimeBar timer={timer} INITTIMER={INITTIMER} />
				)}
				<div className='text-center'>
					<p className='text-white fw-bold my-0 fs-3'>
						Score: <span className='fw-light'>{score}</span>
					</p>
				</div>
				<div className='container-question'>
					<div className='first'></div>
					<div className='second'></div>
					<div className='third d-flex justify-content-center align-items-center text-center px-2'>
						{showCounter && <p className='count'>{count}</p>}
						{userAnswer !== '' && (
							<p
								className={`typeAnswer fs-1 fw-bold ${
									userAnswer !== '' &&
									userAnswer === 'Correct' &&
									'green'
								} ${
									userAnswer !== '' &&
									userAnswer === 'Incorrect' &&
									'red'
								}`}
							>
								{userAnswer}
							</p>
						)}
						<p>{}</p>
					</div>
				</div>
				<div className='container-answer w-100 py-5 mt-4'>
					{!showCounter && question && (
						<>
							<input
								type='text'
								className='w-100 bg-transparent text-center fs-1 text-white border py-3'
								id='answer'
								maxLength={5}
								value={numberAnswer}
								onChange={handleChange}
								autoComplete='off'
							/>
							<button className='btn btn-light sm-btn fs-5'>
								Give Answer
							</button>
						</>
					)}
				</div>

				{userAnswer || timer <= 0 ? (
					<button
						onClick={() => {
							setCount(3);
							setTimer(INITTIMER);
							setUserAnswer('');
						}}
						className='btn btn-primary w-100 fs-4 mt-3'
					>
						{userAnswer === 'Incorrect' || timer <= 0
							? 'Try Again'
							: 'Next Question'}
					</button>
				) : null}
			</div>
		</>
	);
};

export default Game;
