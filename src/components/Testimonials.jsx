import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">Customer Testimonials</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <motion.div
          className="max-w-md bg-white p-8 rounded-xl shadow-lg dark:bg-gray-700 dark:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-600 italic dark:text-gray-300">
            "SoftSell made selling our unused licenses so easy. Highly recommended!"
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800 dark:text-white">Jane Doe</p>
            <p className="text-gray-500 dark:text-gray-400">Marketing Manager, TechCorp</p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-md bg-white p-8 rounded-xl shadow-lg dark:bg-gray-700 dark:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 italic dark:text-gray-300">
            "The process was seamless, and I received fair pricing. Great experience!"
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800 dark:text-white">John Smith</p>
            <p className="text-gray-500 dark:text-gray-400">CTO, InnovateX</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
