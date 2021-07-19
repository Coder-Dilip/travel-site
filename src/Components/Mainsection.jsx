import React from 'react'
import "../Style-Components/mainsection.css"

function Mainsection() {
    return (
        <div className="main__Section">
            <div className="styled__Pic">
                <div className="first__Colpic">
                    <img className="longer__Img" src="https://pbs.twimg.com/profile_images/1222100108835094528/ytoaqNca_400x400.jpg" alt="mountain nepal"/>

                    <img  className="shorter__Img" src="https://romantonepali.com/wp-content/uploads/2020/08/nepal.jpg" alt="travel mountain"/>
                </div>
                <div className="second__Colpic">
                <img  className="shorter__Img" src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/b615c6bce9c4c0552874dd1d554596063a888a84/big-e30f5e74e8336ebd459756136a0b0fb7.jpg"/>
                    <img className="longer__Img" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Bauddha%2C_Kathmandu.jpg" alt="Tilicho lake"/>
                </div>
            </div>
            <div className="page__Introduction">
                <h2 className="stylepic__Title" style={{fontWeight:'bold', fontSize:"1.8rem"}}>See the Beauty of Nepal and make Memories </h2>
                <p  style={{ marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam. Lorem, ipsum dolor.</p>
                <button
                className="travel__Nowbtn" style={{width:"110px", marginTop:"10px", border:"none", padding:'5px 10px', backgroundColor:"rgb(0, 156, 156)", color:"white", borderRadius:"3px",transition:".2s"}} onMouseOver={(e)=>{
                   e.target.style.color='rgb(0, 156, 156)';
                   e.target.style.backgroundColor='white';
                   e.target.style.boxShadow='-1px 0px 19px -5px rgba(0,0,0,0.23)';
                   
                }
                
                }   onMouseOut={(e)=>{
                    e.target.style.color='white';
                    e.target.style.backgroundColor='rgb(0, 156, 156)';
                    
                }} >Travel Now</button>
            </div>
        </div>
    )
}

export default Mainsection
