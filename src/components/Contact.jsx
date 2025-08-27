import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="pt-36 pb-32 bg-white dark:bg-gray-900">
      <div className="container">
        {/* Heading */}
        <div className="w-full px-4">
          <motion.div
            className="max-w-xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-semibold text-lg text-teal-600 mb-2">Contact</h4>
            <h2 className="font-semibold text-dark dark:text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Hubungi Kami
            </h2>
            <p className="font-medium text-md text-gray-500 dark:text-gray-400 md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, a!
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          action="#"
          className="w-full lg:w-2/3 lg:mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full px-4 mb-8">
            <label htmlFor="name" className="text-base font-bold text-teal-600">
              Nama
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-slate-200 dark:bg-slate-800 text-dark dark:text-white p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div className="w-full px-4 mb-8">
            <label htmlFor="email" className="text-base font-bold text-teal-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-slate-200 dark:bg-slate-800 text-dark dark:text-white p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              placeholder="Masukkan email aktif"
            />
          </div>

          <div className="w-full px-4 mb-8">
            <label htmlFor="message" className="text-base font-bold text-teal-600">
              Pesan
            </label>
            <textarea
              id="message"
              className="w-full bg-slate-200 dark:bg-slate-800 text-dark dark:text-white p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>

          <div className="w-full px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-base font-semibold text-white bg-teal-600 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
            >
              Kirim
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
