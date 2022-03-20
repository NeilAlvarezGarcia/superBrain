import React, { FC } from 'react'
import { asset } from '../../helpData'

type Props = {
    asset: asset
}

const HelpCard:FC<Props> = ({asset: {title,  parragraph, link}}) => {

    return (
    <div className="instructions-container">
        <h3 className='text-black'>{title}</h3>
        <p>{parragraph}</p>
        {link && <a href={link} target='_blank' rel="noreferrer noopener">Check the video</a>}
    </div>
  )
}

export default HelpCard