import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

        {/* Left Section: Branding + Text */}
        <div className="text-center md:text-left max-w-sm">
          <h2 className="text-2xl md:text-3xl font-bold gothic-font">Land of Cult</h2>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left text-sm">
          <div>
            <p className="text-gray-300 hover:text-white cursor-pointer">MY ACCOUNT</p>
            <p className="text-gray-300 hover:text-white cursor-pointer mt-2">NEW WORLD</p>
          </div>
          <div>
            <p className="text-gray-300 hover:text-white cursor-pointer">DOCUMENTATION</p>
            <p className="text-gray-300 hover:text-white cursor-pointer mt-2">COMMUNITY</p>
          </div>
          <div>
            <p className="text-gray-300 hover:text-white cursor-pointer">DISCOVER</p>
            <p className="text-gray-300 hover:text-white cursor-pointer mt-2">ABOUT US</p>
          </div>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition">
            {/* Twitter SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.38c-.83.5-1.74.85-2.71 1.05a4.23 4.23 0 0 0-7.2 3.85A12 12 0 0 1 3 5.38a4.23 4.23 0 0 0 1.3 5.65 4.17 4.17 0 0 1-1.92-.53v.05a4.23 4.23 0 0 0 3.39 4.14 4.3 4.3 0 0 1-1.91.07 4.23 4.23 0 0 0 3.94 2.94A8.5 8.5 0 0 1 2 18.55a12 12 0 0 0 6.29 1.85c7.55 0 11.67-6.26 11.67-11.68l-.01-.53A8.3 8.3 0 0 0 22.46 6z" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition">
            {/* Medium SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15zM8.44 7.5a1 1 0 0 0-.33.75V16a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V8.25a1 1 0 0 0-1-1h-.5a1 1 0 0 0-.67.25zm4.56 2.25v5.75a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V9.75a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1zm4 3.5V16a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1v-2.75a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1z" />
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition">
            {/* Telegram SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M22 2L2 11.07l7.17 2.4L18.37 6 9.88 14.93l-.53 6.86 3.96-4.6 5.93 4.47L22 2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>

  );
};
