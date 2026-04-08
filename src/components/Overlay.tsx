"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1 (0% to 20%)
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -100]);

  // Section 2 (30% to 50%)
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.3, 0.55], [100, 0, -100]);

  // Section 3 (60% to 80%)
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.6, 0.9], [100, 0, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1A1A1A] mb-4 drop-shadow-lg">
          Amanullah Sankh
        </h1>
        <p className="text-xl md:text-2xl text-[#1A1A1A]/80 font-light tracking-wide max-w-2xl px-4">
          Backend Developer | Java &amp; Spring Boot | AI Enthusiast
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] max-w-2xl drop-shadow-md leading-tight">
          Building scalable <br />
          <span className="text-[#1A1A1A]/60 italic">backend systems.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] max-w-3xl drop-shadow-md leading-tight">
          Solving real-world problems <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-900">
            through engineering.
          </span>
        </h2>
      </motion.div>
    </div>
  );
}
