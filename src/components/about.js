import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPencilRuler, faCamera, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const SkillCard = ({ icon, title, description }) => (
    <div className="bg-neutral-800 rounded-xl text-white flex flex-col items-center p-8 text-center shadow-lg hover:shadow-red-300/20 transition-shadow duration-300 h-full">
        <FontAwesomeIcon icon={icon} className='size-12 mb-4 text-red-300'/>
        <h3 className="font-medium text-xl mb-2">{title}</h3>
        <p className="text-neutral-400 leading-relaxed">{description}</p>
    </div>
);

const skills = [
    {
        icon: faCode,
        title: "Web Development",
        description: "Membangun situs web yang responsif dan fungsional menggunakan teknologi modern."
    },
    {
        icon: faPencilRuler,
        title: "UI/UX Design",
        description: "Merancang antarmuka yang intuitif dan pengalaman pengguna yang menarik."
    },
    {
        icon: faCamera,
        title: "Photography",
        description: "Mengabadikan momen dengan komposisi dan pencahayaan yang artistik."
    },
    {
        icon: faBullhorn,
        title: "Digital Marketing",
        description: "Meningkatkan visibilitas online dan keterlibatan melalui strategi digital."
    }
];

const About = ()=>{
    return(
        <section className="flex flex-col text-center items-center justify-center bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-4xl font-bold mb-4">About <span className="text-red-300">Me</span></h2>
            <h3 className="text-white text-2xl mb-12">My Skills</h3>
    
            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill) => (
                    <SkillCard 
                        key={skill.title} 
                        icon={skill.icon} 
                        title={skill.title} 
                        description={skill.description} 
                    />
                ))}
            </div>
        </section>
    )
}

export default About;