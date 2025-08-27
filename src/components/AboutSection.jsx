import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="pt-36 pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Kiri - Info */}
          <motion.div
            className="w-full lg:w-1/2 mb-10 px-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold uppercase text-teal-600 text-lg mb-3">
              Tentang Saya
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-3 xl">
              Yuk, Belajar WEB Programing menggunakan Tailwind CSS 👨‍💻👨‍💻👨‍💻
            </h2>
            <p className="font-medium text-base text-gray-500 dark:text-gray-500 max-w-xl lg:text-lg leading-relaxed">
              Saya adalah seorang <span className="font-bold text-primary">Data Analyst </span> 
              sekaligus <span className="font-bold text-teal-600">Backend & Fullstack Developer</span>. 
              Suka ngulik teknologi terbaru, ngoding dengan secangkir kopi ☕, 
              dan tentu saja membangun project open-source 🚀.
            </p>
          </motion.div>

          {/* Kanan - Sosial Media */}
          <motion.div
            className="w-full lg:w-1/2 px-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">
              Mari berteman
            </h3>
            <p className="font-medium text-base text-gray-500 dark:text-gray-500 mb-6 lg:text-lg">
              Jangan sungkan untuk connect dengan saya melalui platform berikut. 
              Saya suka sharing ilmu, ngobrol soal teknologi, atau sekadar diskusi santai 😁.
            </p>

            {/* Sosial Media Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100078033226537&mibextid=ZbWKwL"
                target="_blank"
                className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-teal-500 hover:border-primary hover:bg-primary hover:text-white transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/saurarif?igshid=ZDdkNTZiNTM="
                target="_blank"
                className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-pink-500 hover:border-primary hover:bg-primary hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* Github */}
              <a
                href="https://github.com/AhmadArifff"
                target="_blank"
                className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-gray-800 hover:border-primary hover:bg-primary hover:text-white transition"
              >
                <i className="fab fa-github"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahmad-arif-62681721b/"
                target="_blank"
                className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 text-blue-600 hover:border-primary hover:bg-primary hover:text-white transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}