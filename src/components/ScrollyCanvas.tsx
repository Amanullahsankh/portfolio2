"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120; // 0 to 119

const getFrameSrc = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Scroll tracking on the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0 to 1) to frame index (0 to 119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

  // Frame rendering logic
  const renderFrame = (index: number) => {
    if (!loaded || !canvasRef.current || !images[index]) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Responsive Canvas dimensions matching inner window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Object-fit: cover logic
    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dark background behind images if needed
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Render first frame on load and resizing
  useEffect(() => {
    if (loaded) {
      renderFrame(0);
      
      const handleResize = () => {
        renderFrame(Math.round(frameIndex.get()));
      };
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  // Scrub frame based on scroll change
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (loaded) {
      renderFrame(Math.round(latest));
    }
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-[#FFFFFF]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#FFFFFF] z-50 text-[#1A1A1A] font-medium">
            Loading sequence...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Overlay progress={scrollYProgress} />
      </div>
    </section>
  );
}
