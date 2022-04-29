import React from 'react';
import carouselData from '../../data/carouselData';

export default function HomeCarousel(){
    const [currentImg, setCurrentImg] = React.useState(0)
    
    // console.log(carouselImgs)

    React.useEffect(()=>{
           const intervalID = setInterval(()=>{
                setCurrentImg(prevState=>{
                    if(prevState === carouselData.length-1){
                        return 0
                    }else{
                       return prevState +1
                    }
                })
            
            }, 5000)
            console.log("workings")
            return ()=> clearInterval(intervalID)
        
        
    },[])

    console.log(currentImg)
    return(
        <div className='carousel'>
            {carouselData.map(data=>{
        return (
            <div key={data.id} className={data.id===currentImg ? 'slide active' : 'slide'}>
                {data.id === currentImg && <img key={data.id} id={`carousel-img-${data.id}`} className="carousel-img" src={data.image} alt={data.image} />}
            </div>
        ) 
    })}
        </div>

    )
}