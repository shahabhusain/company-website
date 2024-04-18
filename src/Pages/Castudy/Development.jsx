import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Style from '../../../src/Style.css'
import Hero from '../../CasStydies/DevelopmentCenter/Hero'
import Technology from '../../CasStydies/DevelopmentCenter/Technology'
import Project from '../../CasStydies/DevelopmentCenter/Project'
import Feature from '../../CasStydies/DevelopmentCenter/Feature'
import Booking from '../../CasStydies/DevelopmentCenter/Booking'
import Customized from '../../CasStydies/DevelopmentCenter/Customized'
import Challenge from '../../CasStydies/DevelopmentCenter/Challenge'
import Solution from '../../CasStydies/DevelopmentCenter/Solution'
import Footer from '../../CasStydies/DevelopmentCenter/Footer'
const Development = () => {
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
        <h1 className="">   <Customized /></h1>
      </section>

       {/* Section 07 */}
       <section className="horizontal-section">
        <h1 className="">  <Challenge /></h1>
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

export default Development