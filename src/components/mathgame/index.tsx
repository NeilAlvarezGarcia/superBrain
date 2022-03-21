import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import PickLevel from '../pickLevel/index';
import Instructions from '../helpGuide/index';
import { GetContext } from '../../contextState';
import { mathInstructions } from '../../helpData';

const index = () => {
  const {levelMath, setMathLevel, setTriviaHelp} = GetContext();

  return (
    <div className='game-container math p-4'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='instructions' element={<Instructions setHelp={setTriviaHelp} route1='/math' route2='/math/gaming' arrayInstructions={mathInstructions}/>}/>
        <Route path='picklevel' element={<PickLevel route='/math' level={levelMath} changeLevel={setMathLevel}/>}/>
      </Routes>
    </div>
  )
}

export default index