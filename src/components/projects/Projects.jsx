import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import shopIt from "../../assets/images/shopIT.png";
import flipkart from "../../assets/images/flipkart1.png";
import goibibo from "../../assets/images/goibibo.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          // title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Shop Now E-commerce"
          des="An e-commerce website that allows users to buy items online."
          src={shopIt}
          tech="Tech Stack: React Js | Redux | Express Js | Node Js | MongoDB | Material-UI"
          projectLink="https://github.com/gsunil1996/shop-now-e-commerce"
        />
        <ProjectsCard
          title="Goibibo"
          des="Goibibo is an online travel booking brand providing a range of choices for hotels,flights, trains, bus and cars for travelers."
          src={goibibo}
          tech="Tech Stack: React Js | Redux | Express Js | Node Js | MongoDB | Material-UI"
          projectLink="https://github.com/biswajitdas-007/Goibibo-Clone"
        />

        <ProjectsCard
          title="Flipkart"
          des="An e-commerce website that allows users to buy items online."
          src={flipkart}
          tech="Tech Stack: HTML | Css | Javascript | Express Js | Node Js | MongoDB | Material-UI"
          projectLink="https://github.com/gsunil1996/flipkart_updated"
        />

      </div>
    </section>
  );
}

export default Projects