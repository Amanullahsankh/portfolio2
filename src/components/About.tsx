"use client";

import { motion } from "framer-motion";

export default function About() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">About Me</h2>
          <div className="h-px w-24 bg-[#1A1A1A]/20 mb-8" />
          
          <div className="space-y-6 text-base md:text-xl text-[#1A1A1A]/80 leading-relaxed font-light">
            <p>
              I am a pre-final year Computer Science and Engineering student specializing in Java, Spring Boot, and Backend Engineering.
            </p>
            <p>
              My passion lies in building scalable backend systems, designing robust RESTful APIs, and architecting microservices with a strong focus on clean code and performance optimization.
            </p>
            <p>
              Beyond traditional backend development, I am deeply enthusiastic about solving real-world problems through AI-driven applications, bridging the gap between intelligent algorithms and reliable infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
