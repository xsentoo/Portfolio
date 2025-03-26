import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title mb-0">Resume</h1>
          <motion.button
            className="btn-primary flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown className="mr-2" size={20} />
            <a href="/CvSep2025.pdf" download>
              Download PDF
            </a>
          </motion.button>


        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-serif mb-6">Experience</h2>
            <motion.div
              className="space-y-6"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {[ 
                  // Existing experiences here...
            
                  {
                    "title": "Film by Janar | FREELANCE DEVELOPER",
                    "period": "2024 – Present",
                    "location": "Remote",
                    "description": [
                      "Developed a platform allowing users to discover the company's creations, book a date for services, and easily contact the team.",
                      "Implemented a booking management system with automated notifications.",
                      "Technologies used: HTML, CSS, JavaScript (React), Node.js (Express), and Firebase for data storage and authentication."
                    ]
                  },
                {
                  title: 'LYCÉE RENÉ DESCARTES | FULL STACK DEVELOPER',
                  period: 'January 2024 – May 2024',
                  location: 'Champs-sur-Marne',
                  description: [
                    'Design and development of a housing reservation website.',
                    'Languages used: HTML, CSS, PHP, MySQL. Framework: CodeIgniter.',
                    'Creation of a user-friendly interface with authentication, admin panel, and booking state management.',
                  ],
                },
                {
                  title: 'ÔPM | FULL STACK DEVELOPER',
                  period: 'January 2024 – March 2024',
                  location: 'Athis-Mons',
                  description: [
                    'Design and development of an e-commerce website.',
                    'Languages used: HTML, CSS, JavaScript, Bootstrap, and PHP.',
                    'Creation of a user-friendly and responsive interface to improve customer experience.',
                    'Development of key features such as adding to cart and downloading shopping lists.',
                  ],
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-medium text-lg">{exp.title}</h3>
                  <p className="text-gray-600">{exp.period} | {exp.location}</p>
                  <ul className="mt-2 text-gray-600">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="list-disc ml-5">{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-serif mb-6">Projects</h2>
            <motion.div
              className="space-y-6"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {[
                {
                  title: 'MUSCLE GAMIFIED MOBILE APP',
                  period: '2024 – 2025',
                  type: 'GROUP PROJECT',
                  description: [
                    'Development of a mobile app aimed at making muscle exercises interactive and motivating.',
                    'Creation of a playful UI with Figma.',
                    'Used React Native and JavaScript for cross-platform development.',
                    'Backend and data storage handled with Microsoft Azure.',
                  ],
                },
                {
                  title: 'VOTE MY MUSIC',
                  period: '2024 – 2025',
                  type: 'PERSONAL PROJECT',
                  description: [
                    'Development of an app allowing users to vote for their favorite music.',
                    'Showcasing the most popular tracks in the app.',
                    'Users can add their own tracks to gather feedback.',
                    'Languages and tools used: C# and Figma.',
                  ],
                },
                {
                  title: 'WEELSON66',
                  period: '2025 – 2026',
                  type: 'ONGOING PERSONAL PROJECT',
                  description: [
                    'Development of a website for Route 66 enthusiasts.',
                    'Budget calculator for estimating travel costs.',
                    'Interactive map displaying stages and points of interest.',
                    'Social network for sharing photos, videos, and albums.',
                    'Technologies used: React, Node.js, PostgreSQL, Google Maps API, and OpenWeatherMap API.',
                  ],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-medium text-lg">{project.title}</h3>
                  <p className="text-gray-600">{project.type} | {project.period}</p>
                  <ul className="mt-2 text-gray-600">
                    {project.description.map((desc, i) => (
                      <li key={i} className="list-disc ml-5">{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-serif mb-6">Education</h2>
            <motion.div className="space-y-6">
              {[
                {
                  title: 'YNOV PARIS',
                  degree: 'BACHELOR 3 SOFTWARE DEVELOPMENT',
                  period: '2024 – 2025',
                  location: 'Paris, France',
                },
                {
                  title: 'LYCÉE RENÉ DESCARTES',
                  degree: 'BTS SIO SLAM',
                  period: '2022 – 2024',
                  location: 'Champs-sur-Marne, France',
                },
                {
                  title: 'LYCÉE SIMONE VEIL',
                  degree: 'BAC PRO DIGITAL SYSTEMS',
                  period: '2019 – 2022',
                  location: 'Noisiel, France',
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-medium text-lg">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.title} | {edu.period} | {edu.location}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-serif mb-6">Technical Skills</h2>
            <motion.div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Web Development',
                  skills: 'HTML5 / CSS3 • JavaScript • PHP • React • Bootstrap',
                },
                {
                  title: 'Programming Languages',
                  skills: 'C# • Python • Java • SQL • JavaScript • PHP • HTML5/CSS3',
                },
                {
                  title: 'Other Skills',
                  skills: 'Mobile Development • Project Management • Networks and Security • DevOps',
                },
                {
                  title: 'Technologies',
                  skills: 'Git/Github • Visual Studio • Eclipse  • Microsoft Azure • VMWare • Docker • VirtualBox',
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-medium mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.skills}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 animate-float" />
      </div>
    </motion.div>
  );
};

export default Resume
