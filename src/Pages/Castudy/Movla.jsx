import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Style from '../../../src/Style.css'
import Home from "../../CasStydies/movla/Components/Home";
import Technology from "../../CasStydies/movla/Components/Technology";
import Project from "../../CasStydies/movla/Components/Project";
import Features from "../../CasStydies/movla/Components/Features";
import Followers from "../../CasStydies/movla/Components/Followers";
import Short from "../../CasStydies/movla/Components/Short";
import Solution from "../../CasStydies/movla/Components/Solution";
import Footer from "../../CasStydies/movla/Components/Footer";
import Challenge from '../../CasStydies/movla/Components/Challenge';
const Movla = () => {
   // Initialize ScrollTrigger
   useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Selecting all horizontal sections
      const horizontalSections = document.querySelectorAll(".horizontal-section");

      // Applying horizontal scroll animation
      gsap.to(horizontalSections, {
        xPercent: -100 * (horizontalSections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          scrub: 1,
          snap: 1 / (horizontalSections.length - 1),
          end: () => "+=" + document.querySelector("#container").offsetWidth
        }
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div>
        <main id="container">
      {/* Section 01 */}
      <section className="horizontal-section">
        <h1 className=""> <Home /></h1>
      </section>

      {/* Section 02 */}
      <section className="horizontal-section">
        <h1 className="">  <Technology /></h1>
      </section>

      {/* Section 03 */}
      <section className="horizontal-section">
        <h1 className=""> <Project /></h1>
      </section>

      {/* Section 04 */}
      <section className="horizontal-section">
        <h1 className=""> <Features /></h1>
      </section>

      {/* Section 05 */}
      <section className="horizontal-section">
        <h1 className=""> <Followers /> </h1>
      </section>

      {/* Section 06 */}
      <section className="horizontal-section">
        <h1 className=""> <Short /></h1>
      </section>

     {/* Section 09 */}
       <section className="horizontal-section">
        <h1 className=""> <Challenge /></h1>
      </section>


       {/* Section 09 */}
       <section className="horizontal-section">
        <h1 className=""> <Solution /></h1>
      </section>

     

       {/* Section 10*/}
       <section className="horizontal-section">
        <h1 className=""><Footer /></h1>
      </section>

      
    </main>

    
    </div>
  );
};

export default Movla;
