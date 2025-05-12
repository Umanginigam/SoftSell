// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Animation variants for staggered animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };
  
//   const floatingAnimation = {
//     y: [-10, 10, -10],
//     transition: {
//       y: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//         repeatType: "reverse"
//       }
//     }
//   };

//   return (
//     <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-32 px-4">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div 
//           className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-100 opacity-60"
//           animate={{ 
//             x: [0, 20, 0], 
//             scale: [1, 1.1, 1] 
//           }}
//           transition={{ 
//             duration: 8, 
//             repeat: Infinity,
//             repeatType: "reverse" 
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-green-100 opacity-70"
//           animate={{ 
//             y: [0, -30, 0], 
//             scale: [1, 1.2, 1] 
//           }}
//           transition={{ 
//             duration: 10, 
//             repeat: Infinity,
//             repeatType: "reverse" 
//           }}
//         />
//         <motion.div 
//           className="absolute top-32 right-1/4 w-16 h-16 rounded-full bg-yellow-100 opacity-80"
//           animate={{ 
//             x: [0, -15, 0], 
//             y: [0, 15, 0]
//           }}
//           transition={{ 
//             duration: 6, 
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//         />
//       </div>

//       <div className="max-w-6xl mx-auto">
//         <motion.div 
//           className="grid md:grid-cols-5 gap-8 items-center text-center md:text-left"
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={containerVariants}
//         >
//           {/* Main content - 3 columns on medium+ screens */}
//           <div className="md:col-span-3 z-10">
//             <motion.div variants={containerVariants}>
//               <motion.h1
//                 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-800 leading-tight"
//                 variants={itemVariants}
//               >
//                 <span className="inline-block">Sell Unused</span> <span className="inline-block text-gradient bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Software Licenses.</span> <span className="inline-block">Instantly.</span>
//               </motion.h1>

//               <motion.p
//                 className="mt-6 text-xl md:text-2xl text-gray-600 max-w-xl mx-auto md:mx-0"
//                 variants={itemVariants}
//               >
//                 SoftSell helps businesses unlock hidden value from idle software. It's fast, secure, and effortless.
//               </motion.p>

//               <motion.div 
//                 className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//                 variants={itemVariants}
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-full shadow-xl transition-all flex items-center justify-center"
//                 >
//                   <span>Sell My Licenses</span>
//                   <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                   </svg>
//                 </motion.button>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="px-8 py-4 bg-white text-blue-700 border-2 border-blue-200 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
//                 >
//                 <a href="#howitworks"> How It Works</a>
                 
//                 </motion.button>
//               </motion.div>
              
//               <motion.div
//                 variants={itemVariants}
//                 className="mt-10 flex flex-wrap justify-center md:justify-start gap-6"
//               >
//                 <div className="flex items-center">
//                   <div className="bg-green-100 rounded-full p-2">
//                     <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                   </div>
//                   <span className="ml-2 text-gray-700">30-day money back</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-blue-100 rounded-full p-2">
//                     <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
//                     </svg>
//                   </div>
//                   <span className="ml-2 text-gray-700">Secure transfers</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-purple-100 rounded-full p-2">
//                     <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
//                     </svg>
//                   </div>
//                   <span className="ml-2 text-gray-700">Lightning fast</span>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
          
//           {/* Illustration - 2 columns on medium+ screens */}
//           <motion.div 
//             className="md:col-span-2 relative"
//             variants={itemVariants}
//           >
//             <motion.div
//               className="relative h-64 md:h-96"
//               animate={floatingAnimation}
//             >
//               <div className="absolute inset-0 flex justify-center items-center">
//                 <div className="relative w-48 h-48 md:w-64 md:h-64">
//                   {/* App window illustration */}
//                   <motion.div 
//                     className="absolute -top-2 -left-2 w-full h-full bg-white rounded-xl shadow-2xl p-4 transform rotate-3"
//                     initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
//                     animate={{ opacity: 1, scale: 1, rotate: 3 }}
//                     transition={{ delay: 0.8, duration: 0.5 }}
//                   >
//                     <div className="h-3 w-3 rounded-full bg-red-400 inline-block mr-1"></div>
//                     <div className="h-3 w-3 rounded-full bg-yellow-400 inline-block mr-1"></div>
//                     <div className="h-3 w-3 rounded-full bg-green-400 inline-block"></div>
//                     <div className="mt-4 bg-blue-50 rounded-md h-24 w-full"></div>
//                     <div className="mt-2 bg-gray-100 rounded-md h-4 w-3/4"></div>
//                     <div className="mt-2 bg-gray-100 rounded-md h-4 w-1/2"></div>
//                   </motion.div>
                  
//                   {/* Coins illustration */}
//                   <motion.div 
//                     className="absolute -bottom-4 -right-4 flex"
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: 1, duration: 0.5 }}
//                   >
//                     <div className="w-12 h-12 rounded-full bg-yellow-400 shadow-lg transform -rotate-6 border-2 border-yellow-500 flex items-center justify-center text-yellow-800 font-bold">$</div>
//                     <div className="w-12 h-12 rounded-full bg-yellow-300 shadow-lg transform translate-x-2 translate-y-2 border-2 border-yellow-400 flex items-center justify-center text-yellow-800 font-bold">$</div>
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "reverse"
      }
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-800 dark:to-gray-900 py-32 px-4">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-100 opacity-60 dark:bg-blue-800 dark:opacity-40"
          animate={{ 
            x: [0, 20, 0], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-green-100 opacity-70 dark:bg-green-700 dark:opacity-40"
          animate={{ 
            y: [0, -30, 0], 
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute top-32 right-1/4 w-16 h-16 rounded-full bg-yellow-100 opacity-80 dark:bg-yellow-600 dark:opacity-50"
          animate={{ 
            x: [0, -15, 0], 
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-5 gap-8 items-center text-center md:text-left"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Main content - 3 columns on medium+ screens */}
          <div className="md:col-span-3 z-10">
            <motion.div variants={containerVariants}>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-800 dark:text-white leading-tight"
                variants={itemVariants}
              >
                <span className="inline-block">Sell Unused</span> <span className="inline-block text-gradient bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Software Licenses.</span> <span className="inline-block">Instantly.</span>
              </motion.h1>

              <motion.p
                className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
                variants={itemVariants}
              >
                SoftSell helps businesses unlock hidden value from idle software. It's fast, secure, and effortless.
              </motion.p>

              <motion.div 
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                variants={itemVariants}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-full shadow-xl transition-all flex items-center justify-center"
                >
                  <span>Sell My Licenses</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-700 border-2 border-blue-200 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all dark:bg-gray-800 dark:text-white dark:border-gray-600"
                >
                <a href="#howitworks"> How It Works</a>
                 
                </motion.button>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-wrap justify-center md:justify-start gap-6"
              >
                <div className="flex items-center">
                  <div className="bg-green-100 rounded-full p-2 dark:bg-green-600">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">30-day money back</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-2 dark:bg-blue-600">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Secure transfers</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-2 dark:bg-purple-600">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Lightning fast</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Illustration - 2 columns on medium+ screens */}
          <motion.div 
            className="md:col-span-2 relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative h-64 md:h-96"
              animate={floatingAnimation}
            >
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  {/* App window illustration */}
                  <motion.div 
                    className="absolute -top-2 -left-2 w-full h-full bg-white rounded-xl shadow-2xl p-4 transform rotate-3 dark:bg-gray-800"
                    initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 3 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className="h-3 w-3 rounded-full bg-red-400 inline-block mr-1"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400 inline-block mr-1"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400 inline-block"></div>
                    <div className="mt-4 bg-blue-50 rounded-md h-24 w-full dark:bg-gray-700"></div>
                    <div className="mt-2 bg-gray-100 rounded-md h-16 w-full dark:bg-gray-600"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
