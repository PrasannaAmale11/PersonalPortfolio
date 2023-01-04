import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
        <h1 className="footer__title">Prasanna</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#services" className="footer__link">Services</a>
            </li>
            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>
        </ul>
        <div className="footer__social">
        <a href="https://www.instagram.com/_._prasanna__amale_11/" className="footer__social-link">
<i class="bx bxl-instagram "></i>
</a>


<a href="https://twitter.com/AmalePrasanna?t=hzmovkVxTu2vjyOiRWINQ&s=09" className="footer__social-link">
<i class="bx bxl-twitter"></i>
</a>


<a href="https://www.facebook.com/prasanna.amale/" className="footer__social-link"><i class="bx bxl-facebook"></i></a>
        </div>
        <span className='footer__copy'>&#169;PrasannaAmale. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer