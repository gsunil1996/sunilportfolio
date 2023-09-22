import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of technology in Computer Science Engineering"
            subTitle="Shri Venkateshwara University, Gajraula | Weekend mode"
            result="currently pursuing"
          // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Full Stack Web Development"
            subTitle="Masai School (April 2021 - December 2021)"
            result="Completed"
          // des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Diploma in Electronics and Communication Engineering"
            subTitle="Pidathala Ranga Reddy Polytechnic college (2011 - 2015)"
            result="69.74%"
          // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SENIOR APPLICATION DEVELOPER (WEB DEVELOPMENT)"
            subTitle="Costa Cloud (August 2023 - Present)"
            result="Delhi"
          // des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Taskmo - (July 2022 - Present)"
            result="Bengaluru"
          // des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Invest With Tribe - (January 2022 - June 2022)"
            result="Bengaluru"
          // des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Technician"
            subTitle="ROBERT BOSCH AUTOMOTIVE ELECTRONICS INDIA PRIVATE LIMITED - (August 2020 - March 2021)"
            result="Bengaluru"
          // des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
