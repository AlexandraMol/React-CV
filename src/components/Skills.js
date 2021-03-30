
import React from 'react';
import GitHubUser from './GithubRepo';
class Skills extends React.Component{ 
    render() {
        return (
                
            <main className="page-content">
            <div className="card">
              <div className="content">
                <h2 className="title">Digital skills</h2>
                <p className="copy">C++: Created a database with OOP concepts</p>
                <p className="copy">SQL: Created a database to track the situation in a cafe</p>
                <p className="copy">HTML and CSS, Javascript</p>                  
                <p className="copy">Python</p>
                <p className="copy">Adobe Illustrator</p> 
                {/* de trimis ca un array cu string si trimit ca prop in componenta */}
               
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">Digital certifications</h2>
                <p className="copy">Database Design and Database Programming with SQL</p>
                <p className="copy">PCAP: Programming Essentials in Python</p>
                <p className="copy">IC3 Digital Literacy certification</p>
                <p className="copy">Certificate of professional competence in informatics</p>               
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h2 className="title">Language skills</h2>
                <p className="copy">English C1 (CAE Certificate)</p>
                <p className="copy">German B1 (Goethe-Zertifikat)</p>               
              </div>
            </div>

            <div className="card">
              <div className="content">
                <h2 className="title">Projects</h2>            
                <GitHubUser/>            
              </div>
            </div>
          </main>

                
        )
    }
}
export default Skills;