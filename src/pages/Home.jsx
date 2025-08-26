// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Loader from "@/components/Loader"
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <motion.div 
        className="text-center space-y-6 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Foto / Avatar */}
        <motion.img 
          src="/avatar.png" 
          alt="Ahmad Arif" 
          className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-blue-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Nama & Role */}
        <motion.h1 
          className="text-4xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Ahmad Arif
        </motion.h1>

        <p className="text-lg text-gray-300">
          Data Analyst • Data Engineer • Dosen • Fullstack Developer
        </p>

        {/* Tombol navigasi juga bisa animasi */}
        <motion.div 
          className="flex justify-center gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button asChild variant="default">
            <a href="/projects">Lihat Projects</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/skills">Keahlian Saya</a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
