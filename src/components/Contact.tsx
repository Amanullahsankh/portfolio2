"use client";

import { motion } from "framer-motion";
import { Mail, Github, Phone, MapPin } from "lucide-react";

export default function Contact() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Get In Touch</h2>
          <div className="h-px w-24 bg-[#1A1A1A]/20 mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-base md:text-xl text-[#1A1A1A]/80 leading-relaxed font-light mb-8 lg:pr-12">
              Currently seeking backend development, Java, and AI-related internship opportunities. Let&apos;s build something intelligent and scalable together.
            </p>

            <div className="space-y-6">
              <a href="mailto:amansank843@gmail.com" className="group flex items-center space-x-4 w-fit">
                <div className="p-3 bg-[#1A1A1A]/5 rounded-full border border-[#1A1A1A]/10 group-hover:bg-[#1A1A1A] group-hover:text-[#FFFFFF] transition-colors duration-300">
                  <Mail size={20} className="text-[#1A1A1A] group-hover:text-[#FFFFFF] transition-colors" />
                </div>
                <span className="text-[#1A1A1A]/90 group-hover:text-[#1A1A1A] text-base md:text-lg tracking-wide transition-colors break-all">amansank843@gmail.com</span>
              </a>

              <a href="tel:+916360588189" className="group flex items-center space-x-4 w-fit">
                <div className="p-3 bg-[#1A1A1A]/5 rounded-full border border-[#1A1A1A]/10 group-hover:bg-[#1A1A1A] group-hover:text-[#FFFFFF] transition-colors duration-300">
                  <Phone size={20} className="text-[#1A1A1A] group-hover:text-[#FFFFFF] transition-colors" />
                </div>
                <span className="text-[#1A1A1A]/90 group-hover:text-[#1A1A1A] text-base md:text-lg tracking-wide transition-colors break-all">+91-6360588189</span>
              </a>

              <a href="https://github.com/AmanullahSankh843" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 w-fit">
                <div className="p-3 bg-[#1A1A1A]/5 rounded-full border border-[#1A1A1A]/10 group-hover:bg-[#1A1A1A] group-hover:text-[#FFFFFF] transition-colors duration-300">
                  <Github size={20} className="text-[#1A1A1A] group-hover:text-[#FFFFFF] transition-colors" />
                </div>
                <span className="text-[#1A1A1A]/90 group-hover:text-[#1A1A1A] text-base md:text-lg tracking-wide transition-colors break-all">github.com/AmanullahSankh843</span>
              </a>

              <div className="flex items-center space-x-4 w-fit pointer-events-none">
                <div className="p-3 bg-[#1A1A1A]/5 rounded-full border border-[#1A1A1A]/10">
                  <MapPin size={20} className="text-[#1A1A1A]" />
                </div>
                <span className="text-[#1A1A1A]/90 text-base md:text-lg tracking-wide break-all">Bijapur, Karnataka, India</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="p-6 md:p-10 rounded-3xl bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/5 backdrop-blur-xl"
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="689f740f-c421-4bf5-ad5c-807dfc6f2f58" />
              <input type="hidden" name="subject" value="New Portfolio Submission from Amanullah" />
              <div>
                <label className="block text-sm font-bold tracking-wide text-[#1A1A1A] uppercase mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 px-0 py-3 text-[#1A1A1A] placeholder-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold tracking-wide text-[#1A1A1A] uppercase mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 px-0 py-3 text-[#1A1A1A] placeholder-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold tracking-wide text-[#1A1A1A] uppercase mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/20 px-0 py-3 text-[#1A1A1A] placeholder-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 mt-4 bg-[#1A1A1A] text-white font-bold rounded-lg hover:bg-[#1A1A1A]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
