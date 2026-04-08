"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "JavaScript", "SQL", "NoSQL"],
    },
    {
      title: "Backend Development",
      skills: ["Spring Boot", "Node.js", "REST APIs", "Microservices"],
    },
    {
      title: "CS Fundamentals",
      skills: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "DBMS",
        "Computer Networks",
        "OOP",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Linux", "IntelliJ IDEA", "VS Code", "Android Studio"],
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Technical Skills</h2>
          <div className="h-px w-24 bg-[#1A1A1A]/20 mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="p-6 md:p-8 rounded-3xl bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/5 backdrop-blur-xl hover:bg-[#1A1A1A]/[0.05] hover:border-[#1A1A1A]/20 transition-all duration-500 overflow-hidden"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm font-medium text-[#1A1A1A]/90 bg-[#1A1A1A]/5 px-4 py-2 rounded-full border border-[#1A1A1A]/10 hover:bg-[#1A1A1A]/10 hover:text-[#1A1A1A] transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
