import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg p-2 m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-black sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
              पुस्तक AI 
            </a>
            .   All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://github.com/gauravsondhiya" className="hover:underline me-4 md:me-6">
                Github
              </a>
            </li>
            <li>
              <a href="https://x.com/sondhiya__ji" className="hover:underline me-4 md:me-6">
                X
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gaurav-sondhiya/" className="hover:underline me-4 md:me-6">
                Linkedin
              </a>
            </li>
            <li>
              <a href="mailto:gauravsondhiya1503@gmail.com" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
