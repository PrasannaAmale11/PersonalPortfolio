import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/_._prasanna__amale_11/"
        className="home__social-icon hover:scale-105 ease duration-200"
      >
        <i class="uil uil-instagram hover:text-[#c837ab] duration-200 ease-in "></i>
      </a>

      <a
        href="https://twitter.com/PrasannaAmale11"
        className="home__social-icon hover:scale-105 ease duration-200"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-twitter-alt hover:text-[#1d9bf0] duration-200 ease-in"></i>
      </a>

      <a
        href="https://github.com/PrasannaAmale11"
        className="home__social-icon hover:scale-105 ease duration-200"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/prasanna-amale-041035212/"
        className="home__social-icon hover:scale-105 ease duration-200"
      >
        <i class="uil uil-linkedin-alt hover:text-[#1d9bf0] duration-200 ease-in"></i>
      </a>
    </div>
  );
};

export default Social;
