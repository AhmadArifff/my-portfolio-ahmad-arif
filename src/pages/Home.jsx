// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Loader from "@/components/Loader"
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Project from "@/components/Project";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Simulasi fetch data (ganti sesuai kebutuhan)
        setTimeout(() => {
        setProject({ name: "Contoh Project" });
        }, 1500);
    }, []);

    if (!project) {
        return <Loader />;
    }
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection />
        <AboutSection />
        <Project />
        <Clients />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  )
}
