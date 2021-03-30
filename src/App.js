import React from 'react';

import './App.css';
import Timeline from './components/Timeline';
import Menu from './components/Menu';
import Cover from './components/Cover';
import CardFront from './components/AboutMe';
import { HeartIcon } from 'evergreen-ui';
import Skills from './components/Skills';
import GitHubUser from './components/GithubRepo';


function App() {
  return (
    
    <div className="myApp">
    
    <Menu/>
    
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
