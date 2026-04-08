"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "HireSense – Resume QA System using RAG",
      category: "AI & Data Science",
      description: "Built a retrieval-augmented QA system that answers questions over resume datasets using embeddings and vector search.",
      tech: ["Python", "OpenAI API", "Pinecone", "Streamlit"],
      features: [
        "Implemented category classification and metadata filtering to retrieve the most relevant resumes from a Pinecone vector database.",
        "Integrated OpenAI models to generate concise answers from the top retrieved resumes with an interactive Streamlit interface."
      ],
      link: "https://github.com/Amanullahsankh",
    },
    {
      title: "AI Powered B2B Smart Marketing Assistant",
      category: "AI & Automation",
      description: "Developed an automated system that researches companies by name and generates hyper-personalized B2B marketing emails. Streamlines lead generation by eliminating manual research and uses AI to generate contextual outreach emails.",
      tech: ["Python", "OpenAI API", "SMTP", "CRM APIs"],
      features: [
        "Automated company research",
        "AI generated marketing emails",
        "CRM integration",
        "Lead generation automation"
      ],
      link: "https://github.com/Amanullahsankh",
    },
    {
      title: "Explainable Multi-Model Retinal Disease Diagnosis",
      category: "Healthcare AI",
      description: "Built an AI-based diagnostic system capable of detecting 5 retinal diseases using fundus and OCT images. Implemented explainable AI techniques to highlight affected regions and provide interpretable predictions.",
      tech: ["Python", "PyTorch", "ResNet18", "OpenCV"],
      features: [
        "Multi-model disease detection",
        "Medical image processing",
        "Explainable AI visualization",
        "Web interface for image upload and prediction"
      ],
      link: "https://github.com/Amanullahsankh",
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Featured Projects</h2>
          <div className="h-px w-full bg-[#1A1A1A]/10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="group relative flex flex-col justify-between p-6 md:p-10 rounded-3xl bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/5 backdrop-blur-xl hover:bg-[#1A1A1A]/[0.05] hover:border-[#1A1A1A]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex justify-between items-start mb-8">
                <span className="text-xs md:text-sm font-medium text-[#1A1A1A]/60 uppercase tracking-widest bg-[#1A1A1A]/5 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A]/50 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:translate-x-1"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-xl md:text-3xl font-bold text-[#1A1A1A] mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1A1A1A] group-hover:to-zinc-500 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-[#1A1A1A]/80 text-sm md:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-[#1A1A1A]/90 font-medium mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-[#1A1A1A]/80 text-sm flex items-start">
                        <span className="text-[#1A1A1A]/40 mr-2 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-[#1A1A1A]/10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="text-xs text-[#1A1A1A]/80 bg-[#1A1A1A]/10 px-3 py-1.5 rounded-md">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
