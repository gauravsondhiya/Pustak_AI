import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-white rounded-lg p-2 m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-black sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" class="hover:underline">
              पुस्तक AI 
            </a>
            .   All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://github.com/gauravsondhiya" class="hover:underline me-4 md:me-6">
                Github
              </a>
            </li>
            <li>
              <a href="https://x.com/sondhiya__ji" class="hover:underline me-4 md:me-6">
                X
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gaurav-sondhiya/" class="hover:underline me-4 md:me-6">
                Linkedin
              </a>
            </li>
            <li>
              <a href="mailto:gauravsondhiya1503@gmail.com" class="hover:underline">
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
