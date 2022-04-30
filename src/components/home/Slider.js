import React from 'react';
import carouselData from '../../data/carouselData';

export default function Slider(){
    
    // console.log(carouselImgs)


    return(
        <div className='home-images'>

            {carouselData.map(data=>{
                return (
                    <div key={data.id} className="home-image">
                        <img key={data.id} id={`carousel-img-${data.id}`} className="carousel-img" src={data.image} alt={data.image} />
                    </div>
                ) 
            })}
        </div>

    )
}