import React ,{useState} from 'react'
import "./qualification.css"
const Qualification = () => {
    const[toggleState,setToogleState]= useState(1);

    const toggleTab =(index)=>{
        setToogleState(index);
    };

  return (
<section className=" qualification__section" id='portfolio'>
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My personal journey</span>


    <div className="qualification__container container">
    <div className="qualification__tabs">
        <div className = {toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
         onClick={()=>toggleTab(1)}>
            <i className="uil uil-graduation-cap 
            qualification__icon"></i>Education
        </div>

        <div onClick={()=> toggleTab(2)} className={toggleState ===  2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"} 
        >
            <i className="uil uil-briefcase-alt 
            qualification__icon"></i>{" "} Experience
        </div>
    </div>

    <div className="qualification__Sections">
        <div className= {toggleState === 1? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">
                    B.Tech
                    </h3> 
                    <span className="qualificaton__subtitle">MIT, Aurangabad</span>
                    <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                        2019 - 2022
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder">

                    </span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            <div className="qualification__data">
                <div></div>

                <div>
                    <span className="qualification__rounder">

                    </span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">
                    Diploma
                    </h3> 
                    <span className="qualificaton__subtitle">CSMSS college of polytechnic, Aurangabad</span>
                    <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                        2016 - 2019
                    </div>
                </div>

                
            </div>
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">
                    SSC
                    </h3> 
                    <span className="qualificaton__subtitle">S.B highschool, Aurangabad</span>
                    <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                        2010 - 2016
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder">

                    </span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            
            
            
            
        </div>

        <div className= {toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"} >


            
            <div className="qualification__data">
                <div></div>

                <div>
                    <span className="qualification__rounder">

                    </span>
                    <span className="qualification__line"></span>
                </div>
                <div>
                    <h3 className="qualification__title">
                    Web Devlopement (Freelance)
                    </h3> 
                    <span className="qualificaton__subtitle">WFH</span>
                    <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                        2022 - Present
                    </div>
                </div>

                
            </div>
            
            
            
        </div>
    </div>
</div>
</section>
    

)
}

export default Qualification