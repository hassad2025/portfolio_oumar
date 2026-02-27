'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Download, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/IMG_4787.jpg'; // ton CV ou image
    link.download = 'CV_Oumar_Sogodogo.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Partie gauche - texte et boutons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                 <span className="text-gradient">Admin système</span> & securité cloud
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Passionné par la sécurité des systèmes d'information, le cloud computing et la gestion des risques IT.
              Actuellement en Master Cyber Sécurité Cloud System & Network à l'ESTIAM Paris.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-600" />
                <span className="text-gray-700">oumarsogodogo775@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-600" />
                <span>+33 6 77 36 73 84</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-600" />
                <span>Cergy, Île-de-France | Permis B</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Télécharger mon CV</span>
              </motion.button>
              
              <a href="#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold"
                >
                  Me contacter
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Partie droite - photo + cartes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center"
          >
            {/* Glow derrière la photo */}
            <div className="absolute top-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 z-0"></div>

            {/* Photo */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden z-10 shadow-2xl border-4 border-white mb-8">
              <Image
                src="/IMG_4787.jpg"
                alt="Oumar Sogodogo"
                fill
                className="object-cover object-center"  // <- Centrer correctement la tête
                style={{ objectPosition: '50% 35%' }} // <- Ajuste verticalement pour que la tête soit centrée
                priority
              />
            </div>

            {/* Cartes compétences */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h3 className="font-bold text-lg mb-2">Master Cyber Sécurité</h3>
                <p className="text-gray-600 text-sm">ESTIAM Paris | 2025-2027</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h3 className="font-bold text-lg mb-2">Microsoft 365</h3>
                <p className="text-gray-600 text-sm">Administration & Sécurité</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h3 className="font-bold text-lg mb-2">ISO 27001</h3>
                <p className="text-gray-600 text-sm">Gestion des risques SSI</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h3 className="font-bold text-lg mb-2">Wazuh</h3>
                <p className="text-gray-600 text-sm">Supervision & Détection</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chevron scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a href="#education">
            <ChevronDown size={32} className="text-gray-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;