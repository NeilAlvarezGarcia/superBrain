import React, { FC } from 'react'
import { Question } from '../triviagame/game'
interface Props {
    timer: number,
    INITTIMER: number,
    question: Question | undefined
}
const index: FC<Props> = ({timer, INITTIMER, question}) => {

  return (
    <div className='w-100' style={{height: '1.5rem'}}>
        {question && (
            <div className="rounded w-100 bg-white" style={{height: '100%'}}>
                <div className={`rounded ${timer > (INITTIMER - INITTIMER/4) && 'bg-good'} ${timer <= (INITTIMER - INITTIMER/4) && timer > (INITTIMER/2 - INITTIMER/4) && 'bg-middle'} ${timer <= (INITTIMER/4) && 'bg-bad'}`} role="progressbar" style={{
                    width: (timer/INITTIMER * 100) + '%',
                    height: '100%',
                    transition: 'all ease .3s'
                }}></div>
            </div>
        )}
    </div>
  )
}

export default index