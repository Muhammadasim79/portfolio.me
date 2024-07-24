import React from 'react'
import './aboutme.css';
export default function Aboutme() {
  return (
    
    <section id='skill'>
      <span className="skillTittle">What I do</span>
      <span className="skillDese"> I'm Asim, a passionate front-end web developer dedicated to creating visually 
      appealing and user-friendly websites. I specialize in building functional and responsive web applications
       using HTML, CSS, JavaScript, and React.js. My journey in web development has been driven by a deep love
        for crafting beautiful and efficient digital experiences.</span>
        <div className="skillBars">
                 <div className="skillBar">

        <div className="skillBarText">
        <h2>UI/UX Desing</h2>
        <p>Creative UI/UX Developer skilled in designing intuitive and visually appealing interfaces. Expert in HTML, CSS, JavaScript, and design tools to enhance user experience.</p>
            </div>
        </div>

        <div className="skillBar">
        
        <div className="skillBarText">
        <h2>React Developer</h2>
        <p>As a React developer, I specialize in building dynamic and responsive web applications that deliver exceptional user experiences.</p>
            </div>

            
        </div>
        <div className="skillBar">
        
        <div className="skillBarText">
        <h2>Web Development</h2>
        <p>Versatile Full Stack Developer proficient in both front-end and back-end technologies. Skilled in HTML, CSS, JavaScript, React.js, Node.js, and databases to build comprehensive web applications.</p>
            </div>

            
        </div>

       
 </div>
      </section> 
  )
}
