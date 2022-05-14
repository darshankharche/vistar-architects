import React from 'react';
import {Route, Routes,Link} from 'react-router-dom';
import residentialData from '../../data/residentialData';
import commertialData from '../../data/commertialData';
import resortData from '../../data/resortData';
import renovationData from '../../data/renovationData';
import ImageViewer from './ImageViewer';


export default function Projects(props){
    const [model,setModel] = React.useState(false)
    const [tempImgSrc,setTempIngSrc]  = React.useState('')

    const showImg=(imgSrc)=>{
        setModel(true)
        setTempIngSrc(imgSrc)
    }


    return(<div>
            <div className='proj-types'>
                <Link className='link' to="/projects/residentials" >Residentials</Link>
                <Link className='link' to="/projects/commertials" >Commertials</Link>
                <Link className='link' to="/projects/resorts" >Resorts</Link>    
                <Link className='link' to="/projects/renovations" >Renovations</Link>    
            </div>
            <ImageViewer isSelected={model} tempImg={tempImgSrc} unSelectImg={setModel}/>
            <div className='proj-photos'>
            <Routes>
                    <Route path="/residentials" element={residentialData.map(data1=>{
                        return (
                            <div key={data1.id} onClick={()=>showImg(data1.image)} className="proj-photo">
                                <img key={data1.id} src={data1.image} alt={data1.image} />
                            </div>
                        ) 
                    })}/>
                    <Route path="/commertials" element={commertialData.map(data=>{
                        return (
                            <div key={data.id} onClick={()=>showImg(data.image)} className="proj-photo">
                                <img key={data.id} src={data.image} alt={data.image} />
                            </div>
                        ) 
                    })} />
                    <Route path="/resorts" element={resortData.map(data=>{
                        return (
                            <div key={data.id} onClick={()=>showImg(data.image)} className="proj-photo">
                                <img key={data.id} src={data.image} alt={data.image} />
                            </div>
                        ) 
                    })} />
                    <Route path="/renovations" element={renovationData.map(data=>{
                        return (
                            <div key={data.id} onClick={()=>showImg(data.image)} className="proj-photo">
                                <img key={data.id} src={data.image} alt={data.image} />
                            </div>
                        ) 
                    })} />
                </Routes> 
            </div>
    </div>)
}