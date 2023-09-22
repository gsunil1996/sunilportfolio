import React from 'react'
import html from "../../assets/images/html.png";
import css from "../../assets/images//css.png";
import javascript from "../../assets/images/javascript.png";
import reactImage from "../../assets/images/react.png";
import nextjs from "../../assets/images/nextjs.png";
import github from "../../assets/images/github.png";
import tailwind from "../../assets/images/tailwind.png";
import typescript from "../../assets/images/Typescript.svg";
import mui from "../../assets/images/mui.svg";
import bootstrap from "../../assets/images/Bootstrap.svg";
import redux from "../../assets/images/redux.svg";
import nodeJs from "../../assets/images/NodeJs.svg";
import expressJs from "../../assets/images/expressJs.png";
import mongodb from "../../assets/images/mongodb.svg";
import mySql from "../../assets/images/mySql.svg";
import postGreSql from "../../assets/images/postGreSql.svg";
import redis from "../../assets/images/redis.svg";
import graphQl from "../../assets/images/GraphQL.svg";
import socketIo from "../../assets/images/Socket.svg";

const TechSkills = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white",
        },
        {
            id: 6,
            src: typescript,
            title: "Typescript",
            style: "shadow-blue-500",
        },
        {
            id: 7,
            src: redux,
            title: "Redux",
            style: "shadow-violet-500",
        },
        {
            id: 8,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 9,
            src: mui,
            title: "Material-UI",
            style: "shadow-blue-500",
        },
        {
            id: 10,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-400",
        },
        {
            id: 11,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 12,
            src: nodeJs,
            title: "Node.js",
            style: "shadow-green-400",
        },
        {
            id: 13,
            src: expressJs,
            title: "Express.js",
            style: "shadow-gray-400",
        },
        {
            id: 14,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-400",
        },
        {
            id: 15,
            src: mySql,
            title: "MySQL",
            style: "shadow-orange-500",
        },
        {
            id: 16,
            src: postGreSql,
            title: "PostgreSQL",
            style: "shadow-blue-400",
        },
        {
            id: 17,
            src: redis,
            title: "Redis",
            style: "shadow-red-400",
        },
        {
            id: 18,
            src: graphQl,
            title: "GraphQL",
            style: "shadow-pink-400",
        },
        {
            id: 19,
            src: socketIo,
            title: "Socket.Io",
            style: "shadow-gray-400",
        },
    ];
    return (
        <section
            id="testimonial"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">

                <div className="flex flex-col gap-4 font-titleFont">
                    <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
                        These are the technologies I've worked with
                    </h3>
                    <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">Tech Skills</h1>
                </div>

            </div>
            <div
                className="bg-bodyColor w-full"
            >
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
                        {techs.map(({ id, src, title, style }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className={id == 12 ? "w-20 mx-auto h-20" : id == 14 ? "w-28 mx-auto h-20" : id == 15 ? "w-28 mx-auto h-20" : "w-20 mx-auto"} />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechSkills