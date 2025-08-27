import { motion } from "framer-motion";

const clients = [
  {
    id: 1,
    name: "Google",
    img: "assets/img/Clients/Google.png",
    link: "#",
  },
  {
    id: 2,
    name: "Gojek",
    img: "assets/img/Clients/Gojek.png",
    link: "#",
  },
  {
    id: 3,
    name: "Tokopedia",
    img: "assets/img/Clients/Tokopedia.png",
    link: "#",
  },
  {
    id: 4,
    name: "Shopee",
    img: "assets/img/Clients/Shopee.png",
    link: "#",
  },
];

const Clients = () => {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-700 dark:bg-gray-900">
      <div className="container">
        {/* Heading */}
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-teal-600 mb-2">Clients</h4>
            <h2 className="font-semibold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Yang Pernah Bekerjasama
            </h2>
            <p className="font-medium text-md text-secondary dark:text-gray-400 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dicta adipisci ad.
            </p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            {clients.map((client, index) => (
              <motion.a
                key={client.id}
                href={client.link}
                className="max-w-[120px] mx-4 py-4 transition duration-500 lg:mx-6 xl:mx-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={client.img} alt={client.name} className="w-full" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;