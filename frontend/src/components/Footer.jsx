import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div>
          <h3 className="text-lg font-bold mb-2 ">About Us</h3>
          <p className="text-sm">
            We provide top travel destinations to explore. Your adventure awaits
            with us!
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Destinations
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/hey_luxky"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/soumya2611"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/soumya2611"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-700"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-700">
          &copy; {new Date().getFullYear()} soumya2611. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
