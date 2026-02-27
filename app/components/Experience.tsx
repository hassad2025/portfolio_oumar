'use client';

import { motion } from 'framer-motion';
import { Building, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "Janvier 2026",
      title: "Projet de Pentesting",
      company: "ESTIAM Paris",
      responsibilities: [
        "Conception et mise en place d’une architecture sécurisée dédiée aux tests de vulnérabilités.",
        "Installation et configuration de VMs Windows, Linux et Ubuntu pour les tests d'intrusion.",
        "Développement et mise en œuvre de scripts PowerShell dans un cadre défensif afin d’évaluer les mécanismes de protection.",
        "Réalisation de tests de vulnérabilités à l’aide des scripts développés.",
        "Installation et configuration de Wazuh pour la détection d’intrusions, la surveillance des logs et la conformité sécurité.",
        "Analyse des résultats, identification des failles et mise en œuvre des actions correctives."
      ]
    },
    {
      period: "Octobre 2025 - Décembre 2025",
      title: "Consultant Technicien Support (CDD)",
      company: "SONEPAR – Boulogne-Billancourt",
      responsibilities: [
        "Prise en charge et résolution des tickets d’incidents de niveaux 1, 2 et 3 via ServiceNow.",
        "Réception, préparation et mise à disposition des postes de travail pour les nouveaux collaborateurs.",
        "Utilisation de SCCM (Microsoft Endpoint Configuration Manager) pour la prise en main à distance.",
        "Gestion des envois de matériel aux collaborateurs des autres sites via la plateforme TNT.",
        "Centralisation et suivi du parc matériel informatique via GLPI.",
        "Administration des licences et des comptes utilisateurs via ADManager."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expériences Professionnelles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expériences en cybersécurité, pentesting et support informatique
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="md:flex">
                  <div className="md:w-1/4 bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>

                  <div className="md:w-3/4 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {exp.title}
                    </h3>
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;