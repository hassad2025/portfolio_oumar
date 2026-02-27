'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Contactez-moi
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Disponible pour alternance, stage ou opportunité en cybersécurité & cloud.
          </p>
        </motion.div>

        {/* Carte unique centrée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10"
        >
          <div className="space-y-8">

            {/* Email */}
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold text-lg">
                  oumarsogodogo775@gmail.com
                </p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Téléphone</p>
                <p className="text-white font-semibold text-lg">
                  +33 6 77 36 73 84
                </p>
              </div>
            </div>

            {/* Localisation */}
            <div className="flex items-center space-x-5">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Localisation</p>
                <p className="text-white font-semibold text-lg">
                  Cergy, Île-de-France
                </p>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400 mb-4">Réseaux professionnels</p>
              <div className="flex space-x-6">

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com"
                  target="_blank"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;