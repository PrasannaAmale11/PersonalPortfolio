import React from "react";
import "./ScrollSection.css";


const Projects = () => {
    
  return (
   <>
   
   <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Featured Work</span>

            <section className="section gradient-green"></section>
      <section className="section pin-section">
        <div className="content">
          <ul className="list">
            <li>Lorem, ipsum.</li>
            <li>Dolore, sunt!</li>
            <li>Delectus, accusamus.</li>
            <li>Hic, quos.</li>
          </ul>
          <div className="fill"></div>
          <div className="right">
            <div className="slide center gradient-green">
              <h1>SLIDE ONE</h1>
            </div>
            <div className="slide center gradient-blue">
              <h1>SLIDE TWO</h1>
            </div>
            <div className="slide center gradient-purple">
              <h1>SLIDE THREE</h1>
            </div>
            <div className="slide center gradient-orange">
              <h1>SLIDE FOUR</h1>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Projects