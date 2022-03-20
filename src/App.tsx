import React from 'react';
import Principal from './components/principal/index';
import Trivia from './components/triviagame/index';
import Math from './components/mathgame/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Principal/>}/>
          <Route path='trivia/*' element={<Trivia/>}/>
          <Route path='math/*' element={<Math/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;