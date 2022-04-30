import React from 'react'

export default function About(props){
    return(
        <div className='about'>
            <h1 className='about-head'>About</h1>
                <p className='about-para'>Vistar Architects is a multi-dimensional firm based out of Jalgaon. 
                    Specializing in architecture and interior design. The firm follows an 
                    inventive approach to construction and renovation to achieve an elegant product. 
                    Established in 2022, the practice portfolio comprising of residential projects, 
                    interior projects, resorts renovations, and bungalows. These projects have been 
                    designed for clients who have a passion for a quality products and understand the 
                    value of an innovative design process. At Vistar we are committed to achieving the 
                    project design aspirants and its budget, and also keeping a focus on on-time delivery.</p>
            <h1 className='about-head'>Our Head</h1>
            <div className='about-section'>
                <img src='./images/mohit.jpeg' alt="mohit-metkar"/>
                <div className='about-sub-section'>
                    <h2><span className="sub-header">Mohit Metkar</span> – Professional Architectural and Interior Photographer</h2>
                    <p>Constantly in the pursuit of an enriching visual experience, Mohit,
                    holding a Bachelors’s degree in Architecture, inspired by some world famous Architectural 
                    photographers Mike Kelly, Scott Hargis and Julia Anna Gospodarou, he has come a long way 
                    as a Professional Architectural Photographer. Driven by a strong sense of space & composition 
                    and backed up by substantial technical know-how, he has captured over 100 buildings & spaces.</p>
                </div>
            </div>
            
        </div>
    )
}