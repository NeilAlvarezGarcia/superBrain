import { Link } from 'react-router-dom';
import BackButton from '../backbutton/index';
import think from './think.gif';



const home = () => {
  return (
    <>
        <BackButton route='/'/>
        <div className="container">
        <h1 className='fw-bold'>Mathematic Game</h1>
        <div className="container think-container">
            <img src={think} alt="think" className='think w-100 rounded' />
        </div>
        <div className="trivia-buttons">
            <Link to='gaming' className='w-100'>
            <button className='btn btn-primary fs-4 w-100'>Start Game</button>
            </Link>
            <Link to='instructions' className='w-100'>
                <button className='btn btn-primary fs-4 w-100'>Instructions</button>
            </Link>
            <Link to='picklevel' className='w-100'>
                <button className='btn btn-primary fs-4 w-100'>Pick Level</button>
            </Link>
        </div>
        </div>
    </>
  )
}

export default home