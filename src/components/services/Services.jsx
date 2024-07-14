import React, { useState } from 'react';
import './services.css';

const servicesData = [
  {
    id: 1,
    icon: 'uil uil-pen',
    title: 'UI/UX Designer',
    description: 'With over 3 years of experience, I specialize in crafting user-centric designs that enhance user experience and drive engagement.',
    details: [
      'Develop intuitive and engaging user interfaces.',
      'Create wireframes, prototypes, and high-fidelity mockups.',
      'Conduct user research and usability testing.',
      'Collaborate with developers to ensure seamless implementation.',
    ],
  },
  {
    id: 2,
    icon: 'uil uil-monitor',
    title: 'Frontend Development',
    description: 'Expert in frontend development, creating visually appealing and functional interfaces that meet user needs.',
    details: [
      'Lead frontend development from concept to completion.',
      'Design responsive and accessible user interfaces.',
      'Optimize web applications for speed and scalability.',
      'Work closely with designers to implement UI/UX designs.',
    ],
  },
  {
    id: 3,
    icon: 'uil uil-server',
    title: 'Backend Development',
    description: 'Experienced in backend development, building robust and scalable server-side applications.',
    details: [
      'Develop APIs and integrate with frontend systems.',
      'Optimize database queries for performance.',
      'Implement security and authentication measures.',
      'Deploy and maintain server-side applications on cloud platforms.',
    ],
  },
];



const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {servicesData.map((service) => (
          <div className="services__content" key={service.id}>
            <div>
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">{service.title}</h3>
            </div>

            <span
              onClick={() => toggleService(service.id)}
              className="services__button"
            >
              View more <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                activeService === service.id
                  ? 'services__modal active-modal'
                  : 'services__modal'
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleService(null)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">{service.title}</h3>
                <p className="services__modal-description">
                  {service.description}
                </p>

                <ul className="services__modal-services grid">
                  {service.details.map((detail, index) => (
                    <li className="services__modal-service" key={index}>
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
