import React from 'react';

import './App.css';
import Timeline from './components/Timeline';
import Menu from './components/Menu';
import Cover from './components/Cover';
import CardFront from './components/AboutMe';
import { DotIcon, HeartIcon } from 'evergreen-ui';
import Skills from './components/Skills';



function App() {
  return (
    
    <div className="myApp">
    
    <Menu/>
    <div class="sp"></div>
    <Cover/>

        
    
      <h1 id="About-me"></h1>
      
      <CardFront/>

 
       <h1 id="Work">Work experience and Volunteering</h1> 
        

      <Timeline/>

            
      <div id="Skills"></div>
       <Skills />
        

    


    <footer className="footer">
      <p>Made with <HeartIcon></HeartIcon> by Alexandra Molnar</p>
    </footer>

    </div>
  );
}

export default App;
