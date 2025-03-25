import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../components/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current.querySelectorAll('span'), {
          duration: 1.2,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: 'power4.out',
        });
      }

      gsap.utils.toArray('.parallax-text').forEach((element) => {
        gsap.to(element as HTMLElement, {
          scrollTrigger: {
            trigger: element as HTMLElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          y: -50,
        });
      });
    });

    return () => ctx.revert(); // Nettoyage GSAP pour éviter les erreurs
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={containerRef}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-6 text-center">
          <h1
            ref={titleRef}
            className="section-title mb-8 overflow-hidden"
            style={{ lineHeight: 1.2 }}
          >
            <span className="block">Hello, I'm</span>
            <span className="block font-semibold">Senthooran</span>
            <span className="block">a passionate software developer</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto parallax-text"
          >
            Crafting digital experiences with code and creativity
          </motion.p>
        </div>

        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 animate-float" />
        </div>
      </section>

      {/* Additional sections (if needed) */}
    </>
  );
};

export default Home;
