import React from 'react'

export default function ImageViewer(props){
  return(
      <div className={props.isSelected ? 'viewer show':'viewer'}>
        <img src={props.tempImg} alt={props.tempImg} />
        <p onClick={()=>props.unSelectImg(false)} className='close-icon'>
          <i className="fa-solid fa-xmark"></i>
        </p>
        
      </div>
    
  )
}