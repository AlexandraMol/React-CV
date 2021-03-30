import React from 'react';

class Menu extends React.Component {  
    render() {
      return (
        <div className="navbar">
          <div className="dropdown">
            
          <button className="dropbtn">
          <div className="linie-buton"></div>
                <div className="linie-buton"></div>
                <div className="linie-buton"></div>


          <Submenu />

            </button>
             
           
            
          </div>
        </div>
      )
    }
  }
  
  class Submenu extends React.Component {
    render() {
      return (
        <div className="dropdown-content">
          
            <a href="#About-me">About me</a>
         
          
            <a href="#Work">Work and Volunteering</a>
         
          
            <a href="#Skills">Skills</a>
                     
        </div>
      )
    }
  }
  
export default Menu;