import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Vote My Music',
    period: '2024–2025',
    description: 'A music voting platform where users can vote on their favorite songs and artists. The platform provides real-time results and allows users to create and participate in music polls.',
    tech: 'C# and Figma',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/xsentoo/VoteMyMusic'
  },
  {
    title: 'Weelson66',
    period: '2025–Present',
    description: 'A travel website dedicated to Route 66 enthusiasts. It features an interactive budget calculator for planning trips, an interactive map to explore key landmarks, and social sharing options for users to connect and share their experiences.',
    tech: 'React, Node.js, PostgreSQL, Google Maps API, OpenWeatherMap',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/xsentoo/WheelsOn66'
  },
  {
    title: 'Film by Janar',
    period: '2025–Present',
    description: 'A booking and portfolio website for a film production company. It allows users to explore film projects, view portfolios, and easily book appointments with the production team.',
    tech: 'React, Node.js, Firebase',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/xsentoo/arta'
  },
  {
    title: 'FitnessAnim',
    period: '2024–Present',
    description: 'A gamified fitness mobile app that motivates users to track their workout progress through interactive challenges and personalized fitness goals. It is designed to make fitness fun and engaging.',
    tech: 'React Native, Node.js (Express), Android Studio',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/xsentoo/FitApp'
  },
  {
    title: 'ÖPM E-commerce Website',
    period: '2024',
    description: 'An e-commerce platform designed to sell products online. Features include shopping cart functionality, product listings, and a user-friendly interface for customers.',
    tech: 'HTML, CSS, JavaScript, Bootstrap, PHP',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/xsentoo/monoshop'
  },
  {
    title: 'Watermelone Merge Game',
    period: '2024',
    description: 'A fun and interactive game where players merge watermelons to create larger ones. The game uses basic HTML and JavaScript to build the gameplay logic and user interface.',
    tech: 'HTML, JavaScript',
    image: 'https://images.crazygames.com/fruit-merge-juicy-drop-game-nyf_16x9/20250108085620/fruit-merge-juicy-drop-game-nyf_16x9-cover?auto=format,compress&q=75&cs=strip',
    github: 'https://github.com/xsentoo/WatermeloneGame'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const Projects = () => {
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
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Projects
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black"
                  initial={{ opacity: 0.4 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-serif mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.period}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm font-medium">Tech Stack: {project.tech}</p>
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    <span className="mr-2">💻 GitHub</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 animate-float" />
      </div>
    </motion.div>
  );
};

export default Projects;
