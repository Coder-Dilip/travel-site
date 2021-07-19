import React from 'react'
import "../Style-Components/Whychooseus.css"
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
import HelpSharpIcon from '@material-ui/icons/HelpSharp';
import MoneyOffSharpIcon from '@material-ui/icons/MoneyOffSharp';


function WhyChooseUs() {
    return (
        <div className="WhyChooseUs">
            <h2 style={{ textAlign: "center" }}>Why choose us?</h2>
            <p className="subTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, earum bolom cutom!</p>

            <div className="icon__Container">
                <div className="icon__Intro">
                    <LanguageSharpIcon  style={{color: "rgb(0, 156, 156)", fontSize:"3.2rem",margin:"15px", marginBottom:'-3px'}} />
                    <p className="why__SubTitle">World Wide Connect</p>

                    <p className="why__Description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci magni rerum.
                    </p>
                </div>

                <div className="icon__Intro">
                    <HelpSharpIcon style={{color: "rgb(0, 156, 156)", fontSize:"3.2rem",margin:"15px", marginBottom:'-3px'}} />
                    <p className="why__SubTitle">Expert Tour Guide</p>

                    <p className="why__Description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci magni rerum.
                    </p>
                </div>

                <div className="icon__Intro">
                    <MoneyOffSharpIcon style={{color: "rgb(0, 156, 156)", fontSize:"3.2rem",margin:"15px", marginBottom:'-3px'}} />
                    <p className="why__SubTitle">A Lot of Discount</p>

                    <p className="why__Description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci magni rerum.</p> 
                </div>

            </div>

         
        </div>

    )
}

export default WhyChooseUs
