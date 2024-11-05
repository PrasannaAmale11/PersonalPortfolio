import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const Preloader = ({ onLoadComplete }) => {
  useEffect(() => {
    const loadingText = new SplitType(".loading-text .initial", {
      types: "chars",
    });
    const completeText = new SplitType(".loading-text.complete", {
      types: "chars",
    });

    gsap.set(".loading-text.complete", { y: "100%" });
    gsap.set(loadingText.chars, { opacity: 0, y: 100 });
    gsap.set(completeText.chars, { opacity: 0, y: 100 });

    const tl = gsap.timeline();
    tl.to(".progress-bar", {
      width: "100%",
      duration: 5,
      ease: "power1.inOut",
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        document.querySelector(".percentage").textContent = progress;
      },
    })
      .to(".loading-text.initial", {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".loading-text.complete",
        {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        completeText.chars,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.03,
          ease: "power2.out",
        },
        "<0.2"
      )
      .to(".preloader", {
        y: "-100vh",
        duration: 1,
        ease: "power2.inOut",
        delay: 0.8,
      })
      .set(
        ".content",
        {
          visibility: "visible",
        },
        "-=1"
      )
      .to(
        ".content h1, .content p",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.02,
          ease: "power4.out",
        },
        "-=0.5"
      )
      .set(".preloader", {
        display: "none",
      })
      .eventCallback("onComplete", () => {
        onLoadComplete(); // Call the function passed from App.js
      });
  }, [onLoadComplete]);

  return (
    <div className="preloader">
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
      <div className="text-container">
        <div className="loading-text initial"> Setting Things Up for You...</div>
        <div className="loading-text complete">
         Complete !!
        </div>
      </div>
      <div className="percentage">0</div>
    </div>
  );
};

export default Preloader;
