import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Card from "./Card"
import "../Style-Components/populardestination.css"
import LocationOnIcon from "@material-ui/icons/LocationOn"


function PopularDestination() {

    const breakPoints=[
        {width:400, itemsToShow:1 },
        {width:520, itemsToShow:2 },
        {width:780, itemsToShow:3 },
        {width:1100, itemsToShow:4 },
        {width:1600, itemsToShow:5 },
    ];
    return (
       <>
<h3 style={{textAlign:"center", marginBottom:".5rem", fontWeight:"500", lineHeight:"2.2"}}>Popular Destination</h3>
<p style={{textAlign:'center', width:"80%", margin:"auto", color:"rgb(90, 90, 90)", marginBottom:"40px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex illo itaque?</p>

       <div className="desktop_PicView">
       <Carousel className="carousel-pics" breakPoints={breakPoints}>
       <Card
       key="1"
       src="https://images.unsplash.com/photo-1609481905769-aa5d6f952528?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
       name="Peace Pagoda"
       description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam.'
       location="Lumbini"
       />
       <Card
       key="2"
       src="https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
       name="Everest"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam."
       location="Solukhumbu"
       />
       <Card
       key="3"
       src="https://flysussex.com/wp-content/uploads/2017/11/wagga.png"
       name="Paragliding"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Pokhara"
       />
       <Card
       key="4"
       src="https://static.wixstatic.com/media/f63927_43ba6870176e4b6e9761ff51d77df27f~mv2.png/v1/fill/w_560,h_490,al_c,q_85,usm_0.66_1.00_0.01/f63927_43ba6870176e4b6e9761ff51d77df27f~mv2.webp"
       name="Rafting"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Trishuli"
       />
       <Card
       key="5"
       src="https://visitsnepal.com/wp-content/uploads/2020/09/Bungee-Jump-in-Bhotekoshi-960x1149.jpg"
       name="Bungee"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Bhote Koshi"
       />
       <Card
       key="6"
       src="https://lh3.googleusercontent.com/proxy/VLxlcFAXWnpkaSU3ikM5fVawl9SxQUTKyLlJ0qQPiBQRk33bNdu5ORTlyqaN7fbJU57P3U5pwYAoAYYisaivUytY57irKM0SZkggd4rfYqzq_ZJaJu0X6W9tyuRWYxamwBP1ZSR0QgvNfQ"
       name="Gosaikunda"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Rasuwa"
       />
       <Card
       key="7"
       src="https://lh3.googleusercontent.com/proxy/jGuFJG-k1POumOEP8-NExVxd80KBZd6vsoxvGaqHuOY5i2_JQdUIk_XzekUjCHAnTVlZ2CU6BnondzviK0VUb32v4yaiXP-yX3nDQn8zcKXex2cuB1dyb9QxIz7BO_4ivvKXjlde9nBocRnaVg"
       name="Chitwan National Park"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor "
       location="Chitwan"
       />
       <Card
       key="8"
       src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2015/07/Pg-2-RARA.jpg"
       name="Rara Lake"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Rara"
       />
</Carousel>
</div>


<div className="mobile__PicView">
<Card
       key="1"
       src="https://images.unsplash.com/photo-1609481905769-aa5d6f952528?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
       name="Peace Pagoda"
       description= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam.'
       location="Lumbini"
       />
       <Card
       key="2"
       src="https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
       name="Everest"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam."
       location="Solukhumbu"
       />
       <Card
       key="3"
       src="https://flysussex.com/wp-content/uploads/2017/11/wagga.png"
       name="Paragliding"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Pokhara"
       />
       <Card
       key="4"
       src="https://static.wixstatic.com/media/f63927_43ba6870176e4b6e9761ff51d77df27f~mv2.png/v1/fill/w_560,h_490,al_c,q_85,usm_0.66_1.00_0.01/f63927_43ba6870176e4b6e9761ff51d77df27f~mv2.webp"
       name="Rafting"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Trishuli"
       />
       <Card
       key="5"
       src="https://visitsnepal.com/wp-content/uploads/2020/09/Bungee-Jump-in-Bhotekoshi-960x1149.jpg"
       name="Bungee"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Bhote Koshi"
       />
       <Card
       key="6"
       src="https://lh3.googleusercontent.com/proxy/VLxlcFAXWnpkaSU3ikM5fVawl9SxQUTKyLlJ0qQPiBQRk33bNdu5ORTlyqaN7fbJU57P3U5pwYAoAYYisaivUytY57irKM0SZkggd4rfYqzq_ZJaJu0X6W9tyuRWYxamwBP1ZSR0QgvNfQ"
       name="Gosaikunda"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Rasuwa"
       />
       <Card
       key="7"
       src="https://lh3.googleusercontent.com/proxy/jGuFJG-k1POumOEP8-NExVxd80KBZd6vsoxvGaqHuOY5i2_JQdUIk_XzekUjCHAnTVlZ2CU6BnondzviK0VUb32v4yaiXP-yX3nDQn8zcKXex2cuB1dyb9QxIz7BO_4ivvKXjlde9nBocRnaVg"
       name="Chitwan National Park"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor "
       location="Chitwan"
       />
       <Card
       key="8"
       src="https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2015/07/Pg-2-RARA.jpg"
       name="Rara Lake"
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero aspernatur nam"
       location="Rara"
       />

</div>
       </>
    )
}

export default PopularDestination
