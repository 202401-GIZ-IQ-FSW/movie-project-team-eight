import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const contributors = [
    {
      name: 'Maram Qais',
      linkedin: 'https://www.linkedin.com/in/maramqais',
      github: 'https://github.com/Maram-Qais',
    },
    {
      name: 'Abdulrahman Khalil',
      linkedin: 'https://www.linkedin.com/in/devabdulrahmankh',
      github: 'https://github.com/AbdulrahKh', 
    },
    {
      name: 'Jwan Kareem Jebur',
      linkedin: 'https://www.linkedin.com/in/jwan-kareem-67b32b2b7', 
      github: 'https://github.com/jwann2002', 
    },
  ];

  return (
    <footer className="bg-black text-white">
      <hr className="border-gray-800 mx-auto w-3/4 opacity-50" />
      <hr className="border-black mx-auto w-3/4 opacity-50" />

      <div className="container mx-auto p-4 sm:p-6">
        <div className="mb-2 sm:mb-4 flex justify-center">
          <h2 className="text-base sm:text-lg font-bold text-red-600">MADE BY</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 place-items-center">
          {contributors.map((contributor, index) => (
            <div key={index} className="w-36 sm:w-48 lg:w-64 bg-gradient-to-br from-gray-900 to-black p-2 sm:p-3 rounded-lg shadow-md flex flex-col items-center hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 transition-colors duration-300">
              <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-4">{contributor.name}</p>
              <div className="flex">
                <a
                  href={contributor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 mx-1 sm:mx-2"
                >
                  <FaLinkedin className="text-2xl sm:text-3xl" />
                </a>
                <a
                  href={contributor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 mx-1 sm:mx-2"
                >
                  <FaGithub className="text-2xl sm:text-3xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center p-1 sm:p-2 bg-black">
        © {new Date().getFullYear()} CatFlix. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
