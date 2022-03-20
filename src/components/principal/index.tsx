import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBrain, faGear} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <div className='principal p-4'>
        <h1>
          <span className='red'>S</span>  
          <span className='blue'>u</span>  
          <span className='yellow'>p</span>  
          <span className='green'>e</span>  
          <span className='blue'>r </span>  
          <span className='yellow'>B</span>  
          <span className='red'>r</span>  
          <span className='green'>a</span>  
          <span className='blue'>i</span>  
          <span className='yellow'>n</span>  
        </h1>
        <div className="principal-logo">
            <FontAwesomeIcon icon={faBrain} className='brain'/>
            <FontAwesomeIcon icon={faGear} className='gear'/>
        </div>
        <p className='principal-text fs-4'>Challange your brain and improve your abilities by playing a simple game.</p>
        <div className="prinicpal-buttons">
          <Link to='trivia'>
            <button className='btn btn-primary fs-3'>Trivia Game</button>
          </Link>
          <Link to='math'>
            <button className='btn btn-primary fs-3'>Math Game</button>
          </Link>
        </div>
    </div>
  )
}

export default index