'use client';

import { motion } from 'framer-motion';
import { Cloud, Shield, Server } from 'lucide-react'; // seuls les icônes utilisés

const Skills = () => {
  const skills = [
    {
      category: "Administration Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Microsoft Azure", level: 85 },
        { name: "Microsoft 365", level: 90 },
        { name: "Entra ID", level: 88 },
        { name: "Exchange Online", level: 85 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Sécurité",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "ISO 27001", level: 82 },
        { name: "Wazuh", level: 80 },
        { name: "MFA & Conditional Access", level: 85 },
        { name: "Gestion des risques", level: 83 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Gestion & Supervision",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "SCCM", level: 78 },
        { name: "Intune", level: 75 },
        { name: "GLPI/ServiceNow", level: 80 },
        { name: "Terraform", level: 70 }
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expertise dans les domaines de la cybersécurité, du cloud et de la gestion des systèmes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full card-hover">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Technologies Maîtrisées</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Microsoft Azure", "Microsoft 365", "Entra ID", "ISO 27001",
              "Wazuh", "SCCM", "Intune", "Terraform", "GLPI", "ServiceNow",
              "Exchange Online", "SharePoint", "Teams", "OneDrive",
              "Cloud Monitoring", "Logging", "PowerShell"
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;