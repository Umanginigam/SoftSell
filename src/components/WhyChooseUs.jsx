import { FaShieldAlt, FaClock, FaThumbsUp, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={28} className="text-blue-600" />,
    title: "Secure Transactions",
    desc: "End-to-end encryption ensures your data stays private and protected.",
  },
  {
    icon: <FaClock size={28} className="text-blue-600" />,
    title: "Fast Processing",
    desc: "Get your valuation and payment in just a few clicks.",
  },
  {
    icon: <FaThumbsUp size={28} className="text-blue-600" />,
    title: "Trusted by Professionals",
    desc: "Used by 1,000+ businesses to offload unused licenses.",
  },
  {
    icon: <FaRocket size={28} className="text-blue-600" />,
    title: "No Hidden Fees",
    desc: "What you see is what you get. Transparent pricing guaranteed.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="py-16 bg-gray-50 dark:bg-gray-800 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Why Choose SoftSell?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center dark:shadow-2xl"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
