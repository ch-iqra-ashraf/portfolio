import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#F7F3EC] text-gray-500 py-6 px-8 md:px-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Name branding */}
        <div className="text-[#E2542A] font-bold text-xl tracking-wide self-start md:self-auto">
          Iqra Ashraf
        </div>

        {/* Center: Profile navigation links */}
        <nav className="flex items-center space-x-6 text-sm">
          <a 
            href="http://www.linkedin.com/in/iqra-ashraf-441735431" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#1a1a1a] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/ch-iqra-ashraf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#1a1a1a] transition-colors duration-200"
          >
            GitHub
          </a>
          <a 
            href="mailto:iqraaashraf97@gmail.com" 
            className="hover:text-[#1a1a1a] transition-colors duration-200"
          >
            Email
          </a>
        </nav>

       
      </div>
    </footer>
  );
};

export default Footer;