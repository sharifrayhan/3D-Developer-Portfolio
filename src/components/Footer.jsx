import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] px-4 py-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm lg:text-lg font-bold">Sharif Rayhan Nafi</p>
          <p className="text-xs lg:text-sm">Web Developer</p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/sharifrayhan"
            target="_blank"
            rel="noopener noreferrer"
          >
                <FaGithub
                style={{ fontSize: "2vw", width: "3vw" }}
                color="white"
                className="hover:text-[#FF8C00] cursor-pointer"
              />
          </a>
          <a
            href="https://www.linkedin.com/in/sharifrayhannafi"
            target="_blank"
            rel="noopener noreferrer"
          >
             <FaLinkedin
                style={{ fontSize: "2vw", width: "3vw" }}
                color="white"
                className="hover:text-[#FF8C00] cursor-pointer"
              />
          </a>
          <a
            href="https://instagram.com/sharifrayhannafi"
            target="_blank"
            rel="noopener noreferrer"
          >
               <FaInstagram
                style={{ fontSize: "2vw", width: "3vw" }}
                color="white"
                className="hover:text-[#FF8C00] cursor-pointer"
              />
          </a>
        </div>
      </div>
      <div className="text-center py-1 text-[8px] lg:text-sm">
          <p>&copy; 2023 Nafi. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
