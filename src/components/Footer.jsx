const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-200 text-sm mt-16">
        <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  