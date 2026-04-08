"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "P A College of Engineering",
      location: "Mangalore, Karnataka",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      score: "CGPA: 8.01",
      duration: "Oct 2023 – May 2027",
    },
    {
      institution: "Secab PU College",
      location: "Bijapur, Karnataka",
      degree: "2nd PUC – Science",
      score: "Percentage: 90%",
      duration: "Mar 2021 – Mar 2023",
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Education</h2>
          <div className="h-px w-24 bg-[#1A1A1A]/20 mb-12" />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                key={index}
                className="relative"
              >
                <div className="flex flex-col md:flex-row justify-between items-start bg-[#1A1A1A]/[0.02] border border-[#1A1A1A]/5 backdrop-blur-md p-6 md:p-8 rounded-2xl hover:bg-[#1A1A1A]/[0.04] transition-colors duration-300">
                  <div className="hidden md:block absolute -left-4 top-8 p-2 bg-[#FFFFFF] rounded-full border border-[#1A1A1A]/20 text-[#1A1A1A]/60">
                    <GraduationCap size={20} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-2">{edu.degree}</h3>
                    <p className="text-base md:text-lg text-[#1A1A1A]/80 mb-1">{edu.institution}, {edu.location}</p>
                    <p className="text-[#1A1A1A]/60 font-medium mb-4">{edu.score}</p>
                  </div>
                  
                  <div className="text-sm font-medium tracking-widest text-[#1A1A1A]/50 uppercase bg-[#1A1A1A]/5 px-4 py-2 rounded-full inline-block mt-4 md:mt-0">
                    {edu.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
