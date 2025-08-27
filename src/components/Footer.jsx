import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Grid Section */}
        <div className="flex flex-wrap text-slate-300">
          {/* Brand & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full px-4 mb-12 md:w-1/3"
          >
            <h2 className="font-bold text-4xl text-white mb-5">Ahmad Arif</h2>
            <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
            <p>aa2851214@gil.com</p>
            <p>Gg. Haji Khodir RT 06 RW 18</p>
            <p>Kota Cimahi</p>
          </motion.div>

          {/* Kategori Tulisan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full px-4 mb-12 md:w-1/3"
          >
            <h3 className="font-semibold text-xl text-white mb-5">
              Kategori Tulisan
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="inline-block text-base hover:text-pink-500 mb-3 transition-colors"
                >
                  Programming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-base hover:text-pink-500 mb-3 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block text-base hover:text-pink-500 mb-3 transition-colors"
                >
                  Teknologi
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full px-4 mb-12 md:w-1/3"
          >
            <h3 className="font-semibold text-xl text-white mb-5">
              Navigasi
            </h3>
            <ul>
              {[
                { name: "Beranda", href: "#home" },
                { name: "Tentang Saya", href: "#about" },
                { name: "Portofolio", href: "#portfolio" },
                { name: "Clients", href: "#clients" },
                { name: "Blog", href: "#blog" },
                { name: "Contact", href: "#contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="inline-block text-base hover:text-pink-500 mb-3 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social & Copyright */}
        <div className="w-full pt-10 border-t border-slate-700">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-5"
          >
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100078033226537&mibextid=ZbWKwL"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/saurarif?igshid=ZDdkNTZiNTM="
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/AhmadArifff"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ahmad-arif-62681721b/"
              target="_blank"
              className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </motion.div>

          <p className="font-medium text-xs text-slate-500 text-center">
            Dibuat Dengan <span className="text-pink-500">❤</span> oleh{" "}
            <a
              href="https://instagram.com/saurarif?igshid=ZDdkNTZiNTM="
              target="_blank"
              className="font-bold text-teal-600 hover:underline"
            >
              Ahmad Arif
            </a>{" "}
            menggunakan{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              className="font-bold text-sky-500 hover:underline"
            >
              Tailwind CSS
            </a>{" "}
            👩‍💻.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
