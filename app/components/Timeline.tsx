'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const Timeline = () => {
  const education = [
    {
      date: "2025-2027",
      title: "Master Cyber Sécurité Cloud System & Network",
      institution: "ESTIAM Paris",
      description: "Spécialisation en sécurité cloud et réseaux"
    },
    {
      date: "2022-2025",
      title: "Bachelor 3 Cyber Sécurité Cloud System & Network",
      institution: "ESTIAM Paris",
      description: "Formation approfondie en cybersécurité"
    },
    {
      date: "2019-2022",
      title: "Licence Mathématiques et Informatique",
      institution: "Université IBN TOFAIL, Maroc",
      description: "Fondamentaux en mathématiques et informatique"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Diplômes et Formations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Parcours académique spécialisé en cybersécurité et informatique
          </p>
        </motion.div>

        <div className="relative">
          {/* Ligne de timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 z-10 hidden md:block"></div>

              {/* Carte */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-6 card-hover"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{item.institution}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;