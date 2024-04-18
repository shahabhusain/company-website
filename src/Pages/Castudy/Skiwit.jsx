import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Style from '../../../src/Style.css'
import Hero from '../../CasStydies/Skiwit/Hero'
import Technology from '../../CasStydies/Skiwit/Technology'
import Project from '../../CasStydies/Skiwit/Project'
import Feature from '../../CasStydies/Skiwit/Feature'
import Booking from '../../CasStydies/Skiwit/Booking'
import Customized from '../../CasStydies/Skiwit/Customized'
import Challenge from '../../CasStydies/Skiwit/Challenge'
import Solution from '../../CasStydies/Skiwit/Solution'
import Footer from '../../CasStydies/Skiwit/Footer'

const Skiwit = () => {
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

export default Skiwit