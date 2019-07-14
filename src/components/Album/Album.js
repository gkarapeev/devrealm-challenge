// 1. React
import React from 'react'
import './Album.css'

// 2. Data

const Album = (props) => {
  return (
    <div className='Album'>
      <div className='album-pic-cont'>
        <div className='album-title'>
          {props.title}
        </div>
        <div className='album-thumb'>
          <img src={props.thumb} alt='album thumbnail' />
        </div>
      </div>
    </div>
  )
};

export default Album