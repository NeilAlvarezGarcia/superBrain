import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import PickLevel from '../pickLevel/index';
import Instructions from '../helpGuide/index';
import { GetContext } from '../../contextState';
import { triviaInstructions } from '../../helpData';

const index = () => {
  const {levelTrivia, setTriviaLevel} = GetContext();

  return (
    <div className='trivia game-container p-4'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='instructions' element={<Instructions route1='/trivia' route2='/trivia/gaming' arrayInstructions={triviaInstructions}/>}/>
        <Route path='picklevel' element={<PickLevel route='/trivia' level={levelTrivia} changeLevel={setTriviaLevel}/>}/>
      </Routes>
    </div>
  )
}

export default index