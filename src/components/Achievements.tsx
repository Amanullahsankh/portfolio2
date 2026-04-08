"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";

export default function Achievements() {
  const activities = [
    {
      role: "IEEE Computer Society Member",
      duration: "Dec 2025 – Dec 2026",
      details: [
        "Participated in a 24-hour National Level Hackathon",
        "Participated in a 30-day coding challenge",
        "Completed multiple technical competitions"
      ],
      icon: <Award size={24} className="text-[#1A1A1A]/90" />
    }
  ];

  const certificates = [
    {
      title: "Java Spring Framework, Spring Boot, Spring AI",
      issuer: "Udemy, 2026",
      link: "certificates/java_spring_ai.pdf"
    },
    {
      title: "Pointers in C Programming",
      issuer: "Infosys Springboard, 2024",
      link: "certificates/c_pointers.pdf"
    },
    {
      title: "Python 3.4.3 Training",
      issuer: "IIT Bombay, 2024",
      link: "certificates/python_iit.pdf"
    },
    {
      title: "Java Programming Fundamentals",
      issuer: "Infosys Springboard, 2024",
      link: "certificates/java_fundamentals.pdf"
    }
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Achievements &amp; Activities</h2>
          <div className="h-px w-24 bg-[#1A1A1A]/20 mb-12" />
          
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                key={index}
                className="relative"
              >
                <div className="flex flex-col md:flex-row justify-between items-start bg-[#1A1A1A]/[0.02] border border-[#1A1A1A]/5 backdrop-blur-md p-6 md:p-8 rounded-2xl hover:bg-[#1A1A1A]/[0.04] transition-colors duration-300">
                  <div className="hidden md:flex absolute -left-5 top-8 p-3 bg-[#1A1A1A]/5 rounded-full border border-[#1A1A1A]/10 items-center justify-center">
                    {activity.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-2">{activity.role}</h3>
                    <ul className="mt-4 space-y-3">
                      {activity.details.map((detail, i) => (
                        <li key={i} className="text-[#1A1A1A]/80 text-lg flex items-start">
                          <span className="text-[#1A1A1A]/30 mr-3 mt-1.5">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-sm font-medium tracking-widest text-[#1A1A1A]/50 uppercase bg-[#1A1A1A]/5 px-4 py-2 rounded-full inline-block mt-6 md:mt-0 whitespace-nowrap">
                    {activity.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Certificates</h2>
          <div className="h-px w-24 bg-[#1A1A1A]/20 mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="group relative flex flex-col justify-between p-5 md:p-8 rounded-2xl bg-[#1A1A1A]/[0.02] border border-[#1A1A1A]/5 backdrop-blur-md hover:bg-[#1A1A1A]/[0.05] hover:border-[#1A1A1A]/20 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#1A1A1A]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex-grow pr-4">
                    <h3 className="text-lg md:text-2xl font-bold text-[#1A1A1A] mb-2 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-[#1A1A1A]/60 text-xs md:text-base font-medium tracking-wide">
                      {cert.issuer}
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A]/50 group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
