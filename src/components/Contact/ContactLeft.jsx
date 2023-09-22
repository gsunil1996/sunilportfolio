import { FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { SiGithub } from "react-icons/si";

const ContactLeft = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/gsunil1996', '_blank');
  };
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sunil-kumar-gajula-438048203/', '_blank');
  };
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Gajula Sunil Kumar</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9553030932</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText" style={{ wordBreak: "break-word" }}>gajulasunilkumar123@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={handleGitHubClick}>
            <SiGithub />
          </span>
          <span className="bannerIcon" onClick={handleLinkedInClick} >
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft