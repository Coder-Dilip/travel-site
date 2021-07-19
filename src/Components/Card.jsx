
import React from 'react';
import LocationOnIcon from "@material-ui/icons/LocationOn"
const Card=({ src, name, description, location })=>{
    return(
    <>

<div className="slider__img">
    <img className="destination__Images" src={src} height="180px" width="180px" alt=""/>
    <div className="name__location">
    <h5 className="himalayas">{name}</h5>
    <p className="description">{description}</p>
    <p className="location"><span className="location__Icon"><LocationOnIcon/></span> {location}</p>
    <button className="book">Book</button>
    </div>
</div>
    </>
    )
}

export default Card;