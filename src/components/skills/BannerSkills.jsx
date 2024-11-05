import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./bannerSkills.css";
gsap.registerPlugin(ScrollTrigger);

const BannerSkills = () => {
  const racesRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;
    console.log(races.offsetWidth);

    const getScrollAmount = () => {
      const racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    // Create a tween for GSAP
    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 5,
      ease: "none",
    });

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false,
    });

    return () => {
      scrollTriggerRef.current.kill();
    };
  }, []);
  const frontendSkills = [
    { name: "Next.JS", level: "Advanced" },
    { name: "React.JS", level: "Advanced" },
  ];

  const backendSkills = [
    { name: "Node.JS", level: "Advanced" },
    { name: "Express.JS", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
  ];

  const repeatedSkills = [...frontendSkills, ...backendSkills];

  return (
    <>
      <div className="space-50vh lightBG"></div>

      <div className="racesWrapper">
        <div className="races" ref={racesRef}>
          {repeatedSkills.map((skill, i) => (
            <h2 key={i}>{skill.name}</h2>
          ))}
        </div>
      </div>

      <div className="space-100vh lightBG"></div>
    </>
  );
};

export default BannerSkills;
