import frontendIcon from '../assets/front-end.png';
import backendIcon from '../assets/back-end.png';
import toolsIcon from '../assets/tools.png';
import softskillsIcon from '../assets/softskills.png';


export const SKILLS = [
    {
        title: "Frontend",
        icon: frontendIcon,
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS", percentage: "80%" },
            { skill: "JavaScript", percentage: "50%" },
            { skill: "React.js", percentage: "30%" },
        ],
    },
    {
        title: "Backend",
        icon: backendIcon,
        skills: [
            { skill: "Node.js", percentage: "50%" },
            { skill: "Express.js", percentage: "50%" },
        ],
    },
    {
        title: "Tools",
        icon: toolsIcon,
        skills: [
            { skill: "Git & GitHub", percentage: "60%" },
            { skill: "Visual Studio Code", percentage: "70%" },
            { skill: "Responsive Design", percentage: "50%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: softskillsIcon,
        skills: [
            { skill: "Problem-solving", percentage: "50%" },
            { skill: "Collaboration", percentage: "80%" },
            { skill: "Attention to Detail", percentage: "80%" },
        ],
    },
];

export const WORK_EXPERIENCE = [ 
    {
        title: " Virtual Internship at Eduskills",
        date: "September 2023 - November 2023",
        responsibilities: [
            "Applied theoretical knowledge to real-world projects.",
            "Gained practical experience in solving complex problems.",
            "Acquired skills in data preprocessing, model development and deployment of machine learning solutions in a virtual environment.",
        ],
    },
    {
        title: "Virtual Internship at 360DigiTMG",
        date: "November 2023 - December 2023",
        responsibilities: [
            "Implemented EDA with SQL and Python during my tenure at 360DigitMG, focusing on data preprocessing and analytics for the 'Optimization of Machine Downtime' project."
        ],
    },

];