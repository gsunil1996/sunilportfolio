import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiExpress, SiRedux, SiGithub } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import resumePath from "../../assets/resume.pdf";

const Media = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/gsunil1996', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sunil-kumar-gajula-438048203/', '_blank');
  };

  function handleViewResumeClick() {
    // Open the PDF file in a new tab
    window.open(resumePath, '_blank');
  }

  function handleDownloadResumeClick() {

    // Create an anchor element
    const anchor = document.createElement('a');

    // Set the href attribute to the resume file path
    anchor.href = resumePath;

    // Set the download attribute to specify the desired filename
    anchor.download = 'resume.pdf';

    // Programmatically trigger the click event on the anchor element
    anchor.click();
  }



  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={handleGitHubClick}>
            <SiGithub />
          </span>
          <span className="bannerIcon" onClick={handleLinkedInClick} >
            <FaLinkedinIn />
          </span>
        </div>
        <div style={{ marginTop: "20px" }} >

          <button onClick={handleViewResumeClick} className='bg-black bg-opacity-25 p-4 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300' >
            View Resume
          </button>

          <button onClick={handleDownloadResumeClick} className='bg-black bg-opacity-25 p-4 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300 mt-2' >
            Download Resume
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILLs ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTypescript />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
        </div>
        <div className="flex gap-4 mt-2">
          <span className="bannerIcon">
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            <DiNodejs style={{ fontSize: '2em' }} />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <SiRedux />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media