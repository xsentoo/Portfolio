import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative"
    >
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 animate-float" />
      </div>

      <div className="container mx-auto px-6">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact
        </motion.h1>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="initial"
          animate="animate"
        >
          {/* Removed the contact form */}
          
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-serif mb-6">Connect With Me</h2>
            <motion.div 
              className="space-y-6"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[ 
                {
                  icon: <Mail className="mr-3" size={20} />,
                  text: 'senthooran.thayaparan.pro@gmail.com',
                  href: 'mailto:senthooran.thayaparan.pro@gmail.com'
                },
                {
                  icon: <Github className="mr-3" size={20} />,
                  text: 'GitHub Profile',
                  href: 'https://github.com/xsentoo'
                },
                {
                  icon: <Linkedin className="mr-3" size={20} />,
                  text: 'LinkedIn Profile',
                  href: 'https://www.linkedin.com/in/senthooran-thayaparan/'
                }
              ].map((link) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-black transition-colors"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  {link.icon}
                  {link.text}
                </motion.a>
              ))}

              <motion.div 
                className="flex items-start text-gray-700"
                variants={fadeInUp}
              >
                <MapPin className="mr-3 mt-1" size={20} />
                <p>Noisy le grand, France</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
