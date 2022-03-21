import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './home';
import PickLevel from '../pickLevel/index';
import Instructions from '../helpGuide/index';
import { GetContext } from '../../contextState';
import { triviaInstructions } from '../../helpData';
import Game from './game';

const index = () => {
  const {levelTrivia, setTriviaLevel, triviaHelp, setTriviaHelp} = GetContext();

  return (
    <div className='trivia game-container pt-5 px-4'>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='instructions' element={<Instructions setHelp={setTriviaHelp} route1='/trivia' route2='/trivia/gaming' arrayInstructions={triviaInstructions}/>}/>
        <Route path='picklevel' element={<PickLevel route='/trivia' level={levelTrivia} changeLevel={setTriviaLevel}/>}/>
        <Route path='gaming' element={<RenderComponent triviaHelp={triviaHelp}/>}/>
      </Routes>
    </div>
  )
}

const RenderComponent = ({triviaHelp}:{triviaHelp:boolean}) => triviaHelp ? <Navigate to='/trivia/instructions'/> : <Game/>;

export default index