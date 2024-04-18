import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Style from '../../../src/Style.css'
import Hero from '../../CasStydies/Omni/Hero'
import Technology from '../../CasStydies/Omni/Technology'
import Project from '../../CasStydies/Omni/Project'
import Feature from '../../CasStydies/Omni/Feature'
import Booking from '../../CasStydies/Omni/Booking'
import Community from '../../CasStydies/Omni/Community'
import Chat from '../../CasStydies/Omni/Chat'
import Challenges from '../../CasStydies/Omni/Challenges'
import Solution from '../../CasStydies/Omni/Solution'
import Footer from '../../CasStydies/Omni/Footer'
const Omni = () => {
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
        <h1 className="">  <Hero /></h1>
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
        <h1 className=""> <Feature /></h1>
      </section>

      {/* Section 05 */}
      <section className="horizontal-section">
        <h1 className="">   <Booking /></h1>
      </section>

      {/* Section 06 */}
      <section className="horizontal-section">
        <h1 className=""><Community /></h1>
      </section>

       {/* Section 07 */}
       <section className="horizontal-section">
        <h1 className="">     <Chat /></h1>
      </section>

   {/* Section 08 */}
   <section className="horizontal-section">
        <h1 className=""> <Challenges /></h1>
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
  )
}

export default Omni