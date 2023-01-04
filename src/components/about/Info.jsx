import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid" id='about'>
        <div className="about__box">
        <i classname='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtilte">1 Year</span>
        </div>

        <div className="about__box" >
        <a href="https://github.com/PrasannaAmale11" className='about__project' id='about__box'> <i classname='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtilte">5 Projects</span></a>
        </div>

        <div className="about__box">
        <i classname='bx bx-support about__icon' ></i>

            <h3 className="about__title">Support</h3>
            <span className="about__subtilte">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info