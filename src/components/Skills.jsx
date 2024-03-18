import React from 'react'

const technicalSkills = [
    {
        id: 1, name: "HTML", description: "HyperText Markup language for structuring web pages.", image: "./src/assets/html-icon.svg"
    },
    {
        id: 2, name: "CSS", description: "Cascading Style sheet language used for styling web pages.", image: "./src/assets/css-icon.svg"
    },
    {
        id: 3, name: "Bootstrap", description: "Frontend framework for building responsive and mobile-first websites.", image: "./src/assets/bootstrap-icon.svg"
    },
    // {
    //     id: 4, name: "Tailwind CSS", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: "./src/assets/tailwindcss-icon.svg"
    // },
    {
        id: 5, name: "Sass", description: "Preprocessor scripting language that extends CSS and adds features like variables and nesting.", image: "./src/assets/sass-icon.svg"
    },
    {
        id: 6, name: "JavaScript", description: "Programming language used to create interactive effects within web browsers.", image: "./src/assets/javascript-icon.svg"
    },
    {
        id: 7, name: "jQuery", description: "JavaScript library simplifying HTML document traversing, event handling, and animation.", image: "./src/assets/jquery-icon.svg"
    },
    {
        id: 8, name: "React js", description: "JavaScript library for building user interfaces, known for its component-based architecture.", image: "./src/assets/reactjs-icon.svg"
    },
    {
        id: 9, name: "Material UI", description: "React components implementing Google's Material Design for creating consistent and visually appealing UIs.", image: "./src/assets/material-ui-icon.png"
    },
    // {
    //     id: 10, name: "APIs", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", image: ""
    // }
]

const Skills = () => {
    return (
        <div className='lg:mx-12 mx-4 py-32' id='skills'>
            <div className='text-headingColor mb-20'>
                <p className='text-xl font-semibold mb-5'>My</p>
                <h2 className='md:text-5xl text-4xl font-bold'>Technical <span className='text-primary'>Skills</span></h2>
            </div>

            {/* skills card */}
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                {
                    technicalSkills.map(skill => <div key={skill.id} className='bg-body p-8 rounded-lg cursor-pointer hover:-translate-y-4 transition-all duration-300 skillcard'>
                        <img src={skill.image} alt="" className='w-14 h-14 bg-white rounded-lg shadow-md mb-7 p-3' />
                        <p className='text-2xl font-bold mb-4 text-white'>{skill.name}</p>
                        <p className='text-white'>{skill.description}</p>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Skills
