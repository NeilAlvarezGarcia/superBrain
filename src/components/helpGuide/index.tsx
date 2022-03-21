import React, { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import HelpCard from './HelpCard';
import BackButton from '../backbutton/index';
import { asset } from '../../helpData';
import { useNavigate } from 'react-router-dom';

interface Props {
  route1: string,
  route2: string,
  setHelp: (help:boolean) => void
  arrayInstructions: asset[]
}

const HelpGuide: FC<Props> = ({arrayInstructions, route1, route2, setHelp}) => {
  const [card, setCard] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <>
      <BackButton route={route1}/>
      <div className='help px-2'>
        <section className='container-help'>
          <h2 className='text-black my-0'>Instructions</h2>
          <HelpCard asset={arrayInstructions[card]}/>
          <button onClick={() => {
            setHelp(false)
            navigate(route2);
          }} className='btn btn-primary fs-4'>¡Got it!</button>
          {card > 0 && (
            <button onClick={() => setCard(card - 1)} className='rounded buttons left'>
              <FontAwesomeIcon icon={faAngleLeft} className='fs-4 text-white'/>
            </button>
          )}
          {card < (arrayInstructions.length - 1)  && (
            <button onClick={() => setCard(card + 1)} className='rounded buttons right'>
              <FontAwesomeIcon icon={faAngleRight} className='fs-4 text-white'/>
            </button>  
          )}
        </section>
      </div>
    </>
  )
}

export default HelpGuide