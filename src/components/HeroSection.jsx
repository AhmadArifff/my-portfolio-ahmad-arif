import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ParticlesBackground from "./ParticlesBackground";

export default function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Data Analyst 📊",
        "Data Engineer ⚙️",
        "Backend Developer 🔧",
        "Fullstack Developer 🌐",
        "Database Designer 🗄️",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="relative pt-36 overflow-visible">
      {/* Background Particles */}
      <ParticlesBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap">
          {/* Left Content */}
          <motion.div
            className="w-full self-center px-4 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Halo Semua 👏, saya{" "}
              <span className="block font-bold text-dark dark:text-white text-6xl mt-1 lg:text-5xl">
                Ahmad Arif
              </span>
            </h1>

            <h2 className="font-medium text-gray-500 dark:text-gray-500 text-4xl mt-1 lg:text-5xl">
              Saya{" "}
              <span
                ref={typedRef}
                className="typing-text text-cyan-500 font-bold"
              ></span>
            </h2>

            <p className="font-medium text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
              Saya membuat portofolio menggunakan{" "}
              <span className="text-cyan-600 font-bold">Tailwind CSS</span>... 👩‍💻
            </p>

            <motion.a
              href="#contact"
              className="text-base font-semibold text-white bg-teal-600 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              whileHover={{ scale: 1.1 }}
            >
              Hubungi Saya 😁
            </motion.a>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="w-full self-end px-4 lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Blob Shape */}
            <motion.span
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 md:scale-125 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <svg
                width="450"
                height="400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#14b8a6"
                  d="M57,-57.1C68.6,-45.4,69,-22.7,67.1,-1.9C65.2,18.9,60.9,37.8,49.3,51.3C37.8,64.9,18.9,73.1,1.1,72C-16.6,70.8,-33.3,60.4,-49.4,46.8C-65.6,33.3,-81.2,16.6,-81.5,-0.3C-81.8,-17.2,-66.7,-34.4,-50.6,-46.1C-34.4,-57.7,-17.2,-63.7,2.7,-66.4C22.7,-69.2,45.4,-68.7,57,-57.1Z"
                  transform="translate(100 100) scale(1.3)"
                />
              </svg>
            </motion.span>

            {/* Image */}
            <motion.img
              src="assets/img/Me/IMG_20220828_082041_342-modified-removebg-preview.png"
              alt="Ahmad Arif"
              className="max-w-full mx-auto relative z-10 drop-shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}