import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaDollarSign, FaClipboardCheck } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaCloudUploadAlt size={32} className="text-blue-600" />,
      title: "Upload License",
      desc: "Submit details of the software you want to sell.",
    },
    {
      icon: <FaClipboardCheck size={32} className="text-blue-600" />,
      title: "Get Valuation",
      desc: "Receive a fair market price in minutes.",
    },
    {
      icon: <FaDollarSign size={32} className="text-blue-600" />,
      title: "Get Paid",
      desc: "Instant payment once the deal is done.",
    },
  ];

  return (
    <section id="how" className="py-20 px-4 bg-white dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">How It Works</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="max-w-xs"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Dynamically increasing delay
          >
            <div className="p-6 bg-blue-50 rounded-xl shadow-lg dark:bg-gray-700 dark:shadow-2xl">
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 mt-2 dark:text-gray-300">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
