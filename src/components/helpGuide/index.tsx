import React, { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import HelpCard from './HelpCard';
import BackButton from '../backbutton/index';
import { Link } from 'react-router-dom';
import { asset } from '../../helpData';

interface Props {
  route1: string,
  route2: string
  arrayInstructions: asset[]
}

const HelpGuide: FC<Props> = ({arrayInstructions, route1, route2}) => {
  const [card, setCard] = useState<number>(0);

  return (
    <>
      <BackButton route={route1}/>
      <div className='help px-2'>
        <section className='container-help'>
          <h2 className='text-black my-0'>Instructions</h2>
          <HelpCard asset={arrayInstructions[card]}/>
          <Link to={route2} className='btn btn-primary fs-4 text-white'>¡Got it!</Link>
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