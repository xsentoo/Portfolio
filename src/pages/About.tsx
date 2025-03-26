import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h1 
          className="section-title text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Me
        </motion.h1>

        {/* Introduction Block */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <motion.h2
            className="text-2xl font-semibold text-center mb-4"
            variants={fadeInUp}
          >
            Hi, I'm Thayaparan Senthooran
          </motion.h2>
          <motion.p
            className="text-gray-700 text-center mb-6"
            variants={fadeInUp}
          >
            I'm a passionate software developer focused on building web applications. My goal is to solve real-world problems with creative and efficient solutions. I'm always on the lookout for new technologies to continue growing in the field.
          </motion.p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-lg p-8 mt-12 mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Professional Summary</h3>
          <p className="text-gray-600">
            Software developer with a strong background in web technologies and a passion for building scalable applications. My goal is to continue expanding my skills and contribute to meaningful projects that solve complex challenges.
          </p>
        </motion.div>

        {/* Professional Goals */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">My Professional Goals</h3>
          <p className="text-gray-600">
            My goal is to grow as a full-stack developer, working on innovative and impactful projects, and collaborating with a creative and dynamic team.
          </p>
        </motion.div>

        {/* Technologies I Want to Learn */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Technologies I Want to Learn</h3>
          <ul className="list-disc pl-6">
            <li>GraphQL</li>
            <li>Cloud Technologies (AWS, Azure, etc.)</li>
            <li>Machine Learning & AI</li>
            <li>Mobile App Development (React Native, Flutter)</li>
          </ul>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Fun Fact</h3>
          <p className="text-gray-600">
            I can solve a Rubik’s cube in under 2 minutes. It's a fun activity that helps me with my problem-solving skills!
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">What People Say About Me</h3>
          <blockquote className="text-lg text-gray-600 italic">
            "Thayaparan is an incredibly motivated and skilled developer. He brings not only technical expertise but also a positive attitude to every project." — Ismael Panier
          </blockquote>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 animate-float" />
      </div>
    </motion.div>
  );
};

export default About;
