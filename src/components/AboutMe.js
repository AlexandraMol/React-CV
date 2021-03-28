import React from 'react';
import imagine from './me.jpg';
import {FaGithub, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"


// React component for the front side of the card
class CardFront extends React.Component {
  render() {
    return(
      <div className='about-container'>
      
         
            <img src={imagine} class="imag"></img>
           

            <div className='text'>
              <h2>About me</h2>

            <p>I'm a driven and ambitious computer scientist undergraduate looking to improve my knowledge through hard work and dedication by putting my acquired knowledge and passion to practice in the software development industry.</p>  
            <FaGithub className="icon"></FaGithub>
         <FaPhone className="icon">
         </FaPhone>
         <FaMailBulk className="icon"></FaMailBulk>
         <FaLinkedin className="icon"></FaLinkedin>
            
            </div>
    </div>

    )
  }
}



export default CardFront;