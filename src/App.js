import React from 'react';

import './App.css';
import Timeline from './components/Timeline';
import Menu from './components/Menu';
import Cover from './components/Cover';
import Card from './components/AboutMe';
import { HeartIcon } from 'evergreen-ui';




function App() {
  return (
    
    <div className="myApp">
    
    <Menu/>
    
    <Cover/>

        
    
      <h1 id="About-me"></h1>
      
      <Card/>

        <div className="submeniu">
            <div className="right">
                 <h1 id="Work">Work experience and Volunteering</h1> 
        

                <Timeline/>

             </div>

            <div className="left" id="Skills">
            <h1>Hard Skills</h1>
            <div className="cartonas1">
              <div className="limbaj">
                   <p>C++</p>    
                   
              </div>
              <div className="limbaj">
                   <p>SQL</p>    
                   
              </div>
              <div className="limbaj">
                   <p>HTML and CSS</p>    
                   
              </div>

              <div className="limbaj">
                   <p>Python</p>    
                   
              </div>
              
              <div className="limbaj">
                   <p>Adobe Illustrator</p>    
                   
              </div>



            </div>

            <h1>Digital certifications</h1>
            <div className="cartonas2">
                <div class="certificat">
                  <p>Database Design</p>
                </div>

                <div class="certificat">
                  <p>Database Programming with SQL</p>
                </div>

                <div class="certificat">
                  <p>PCAP: Programming Essentials in Python</p>
                </div>

                <div class="certificat">
                  <p>IC3</p>
                </div>

                <div class="certificat">
                  <p>Certificate of professional competence in informatics</p>
                </div>

            </div>
                <h1>Language Skills</h1>

                <div class="cartonas3">

                <div class="certificat">

                    <p>English C1 (CAE Certificate)</p>

                </div>

                <div class="certificat">

                <p>German B1 (Goethe-Zertifikat)</p>

                </div>

                </div>

            </div> 


     
        </div>
      
       
        
       
    <div className="under">

      <h1>Soft Skills</h1>

    </div>


    <footer className="footer">
      <p>Made with <HeartIcon></HeartIcon> by Alexandra Molnar</p>
    </footer>

    </div>
  );
}

export default App;
