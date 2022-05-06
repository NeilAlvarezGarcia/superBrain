import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import PickLevel from '../pickLevel/index';
import Instructions from '../helpGuide/index';
import { GetContext } from '../../contextState';
import { mathInstructions } from '../../helpData';
import Game from './game';

const index = () => {
	const { levelMath, setMathLevel, setTriviaHelp } = GetContext();

	return (
		<div className='game-container math p-4 pt-5'>
			<Routes>
				<Route index element={<Home />} />
				<Route
					path='instructions'
					element={
						<Instructions
							setHelp={setTriviaHelp}
							route1='/math'
							route2='/math/gaming'
							arrayInstructions={mathInstructions}
						/>
					}
				/>
				<Route
					path='picklevel'
					element={
						<PickLevel
							route='/math'
							level={levelMath}
							changeLevel={setMathLevel}
						/>
					}
				/>
				<Route path='gaming' element={<Game />} />
			</Routes>
		</div>
	);
};

export default index;
