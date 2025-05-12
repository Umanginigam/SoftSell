import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Apply or remove 'dark' class on <html> element
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Required";
    if (!formData.email.trim() || !formData.email.includes("@")) errs.email = "Valid email required";
    if (!formData.message.trim()) errs.message = "Message required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setFormStatus('submitting');

      setTimeout(() => {
        setFormStatus('success');
        setFormData({ name: "", email: "", company: "", licenseType: "", message: "" });

        setTimeout(() => {
          setFormStatus(null);
        }, 3000);
      }, 1000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 min-h-screen transition-colors duration-300">
      <div className="flex justify-end mb-4">
     {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-green-100 opacity-60"
          animate={{ 
            x: [0, -20, 0], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-blue-100 opacity-70"
          animate={{ 
            y: [0, 30, 0], 
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute top-32 left-1/4 w-16 h-16 rounded-full bg-purple-100 opacity-80"
          animate={{ 
            x: [0, 15, 0], 
            y: [0, -15, 0]
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
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-10"
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
              Get in <span className="text-gradient bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto ">
              Have questions about selling your unused software licenses? We'd love to help!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact info sidebar */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-3 mr-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">support@softsell.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#" 
                      className="bg-blue-500 text-white p-3 rounded-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#" 
                      className="bg-blue-400 text-white p-3 rounded-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#" 
                      className="bg-blue-600 text-white p-3 rounded-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              variants={itemVariants}
              className="md:col-span-2"
            >
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl shadow-xl p-12 border border-green-200 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFormStatus(null)}
                    className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-medium"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-blue-100"
                  variants={itemVariants}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                      <input
                        type="text"
                        className={`w-full border ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) {
                            setErrors({...errors, name: null});
                          }
                        }}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-500 text-sm mt-1 flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                          </svg>
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                      <input
                        type="email"
                        className={`w-full border ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) {
                            setErrors({...errors, email: null});
                          }
                        }}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-500 text-sm mt-1 flex items-center"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                          </svg>
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">License Type</label>
                      <select
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                        value={formData.licenseType}
                        onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                      >
                        <option value="">Select a license type</option>
                        <option value="Office 365">Office 365</option>
                        <option value="Adobe Creative Cloud">Adobe Creative Cloud</option>
                        <option value="Microsoft Windows">Microsoft Windows</option>
                        <option value="Antivirus Software">Antivirus Software</option>
                        <option value="Development Tools">Development Tools</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <textarea
                      rows={4}
                      className={`w-full border ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) {
                          setErrors({...errors, message: null});
                        }
                      }}
                      placeholder="How can we help you today?"
                    ></textarea>
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Message
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
  
    </div>
    </div>
  );
};

export default ContactForm;