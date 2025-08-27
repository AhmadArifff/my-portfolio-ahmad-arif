import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Belajar Tailwind CSS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cumque?",
    img: "assets/img/Blog/wallpaperflare.com_wallpaper ().jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Wallpapper Shanghai HD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error ea amet!",
    img: "assets/img/Blog/wallpaperflare.com_wallpaper (2).jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Wallpapper Aesthetic HD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, soluta nihil?",
    img: "assets/img/Blog/wallpaperflare.com_wallpaper (3).jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Wallpapper Aesthetic HD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, soluta nihil?",
    img: "assets/img/Blog/wallpaperflare.com_wallpaper (3).jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Wallpapper Aesthetic HD",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, soluta nihil?",
    img: "assets/img/Blog/wallpaperflare.com_wallpaper (3).jpg",
    link: "#",
  },
];

const Project = () => {
  return (
    <section id="portfolio" className="pt-36 pb-32 bg-slate-100 dark:bg-gray-800">
      <div className="container justify-center mx-auto px-4">
        {/* Heading */}
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-teal-600 mb-2">Portfolio</h4>
            <h2 className="font-semibold text-dark dark:text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Project Terbaru
            </h2>
            <p className="font-medium text-md text-gray-500 dark:text-gray-300 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem vel dolorum officia tempora!
            </p>
          </div>
        </div>

        {/* Horizontal Scrollable Project Cards */}
        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollBehavior: "smooth",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="snap-start flex-shrink-0 w-80"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="py-8 px-6">
                    <h3>
                      <a
                        href={project.link}
                        className="block mb-3 font-semibold text-xl text-dark dark:text-white hover:text-primary truncate"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="font-medium text-base text-gray-500 dark:text-gray-500 mb-6">
                      {project.desc}
                    </p>
                    <a
                      href={project.link}
                      className="font-medium text-sm text-white bg-teal-600 py-2 px-4 rounded-lg hover:opacity-80 transition"
                    >
                      Baca Selengkapnya...
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;