import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react';
import { Link } from 'react-router-dom'
import { RouteProp } from '../pickLevel';
import './backButton.scss';

const index: FC<RouteProp> = ({route}) => (
    <Link to={route} className='backButton'>
        <FontAwesomeIcon icon={faArrowLeft} className='fs-1 text-white'/>
    </Link>
)

export default index