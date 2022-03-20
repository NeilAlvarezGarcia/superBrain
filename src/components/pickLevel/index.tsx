import React, { FC } from 'react'
import BackButton from '../backbutton/index';

export interface RouteProp {
  route: string
}

interface Props extends RouteProp {
  level: string,
  changeLevel: (level: string) => void
}

const index: FC<Props> = ({route, level, changeLevel}) => {
  return (
    <>
    <BackButton route={route}/>

      <div className="container">
        <h1 className='fw-bold'>Pick a level</h1>
        <form className='levelform'>
          <label htmlFor='easy' className={`fs-3 text-white py-2  px-4 w-100 ${level === 'easy' && 'bg-primary rounded fw-bold' }`}>
            <input type="radio" id="easy" name='level' className='me-4' checked={level === 'easy' ? true : false} onChange={() => changeLevel('easy')}/>
            Easy
          </label>
          <label htmlFor='medium' className={`fs-3 text-white py-2  px-4 w-100 ${level === 'medium' && 'bg-primary rounded fw-bold' }`}>
            <input type="radio" id="medium" name='level' className='me-4' checked={level === 'medium' ? true : false} onChange={() => changeLevel('medium')}/>
            Medium
          </label>
          <label htmlFor='hard' className={`fs-3 text-white py-2  px-4 w-100 ${level === 'hard' && 'bg-primary rounded fw-bold' }`}>
            <input type="radio" id="hard" name='level' className='me-4' checked={level === 'hard' ? true : false} onChange={() => changeLevel('hard')}/>
            Hard
          </label>
        </form>
      </div>
    </>
  )
}

export default index