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
    {
        id: 4, name: "Tailwind CSS", description: "Tailwind is a CSS framework that streamlines web development by providing a set of pre-designed utility classes.", image: "./src/assets/tailwindcss-icon.svg"
    },
    {
        id: 5, name: "Sass", description: "Preprocessor scripting language that extends CSS and adds features like variables and nesting.", image: "./src/assets/sass-icon.svg"
    },
    {
        id: 6, name: "JavaScript", description: "Client Side Scripting language used to create interactive actions within web browsers.", image: "./src/assets/javascript-icon.svg"
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
    {
        id: 10, name: "Node Js", description: "Node.js is a cross-platform, open-source JavaScript runtime environment that can executes JavaScript code outside a web browser.", image: "./src/assets/nodejs-icon.svg"
    },
    {
        id: 11, name: "Express Js", description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.", image: "./src/assets/expressjs-icon.svg"
    },
    {
        id: 12, name: "Python", description: "Python is a high-level, general-purpose programming language.", image: "./src/assets/python-icon.svg"
    },
    {
        id: 13, name: "MySQL", description: "MySQL is an open-source relational database management system (RDBMS).", image: "./src/assets/mysql-icon.svg"
    },
    {
        id: 14, name: "Mongo DB", description: "MongoDB is a source-available, cross-platform, document-oriented database program.", image: "./src/assets/mongodb-icon.svg"
    },
    {
        id: 15, name: "GitHub", description: "GitHub is a developer platform that allows developers to create, store, manage and share their code.", image: "./src/assets/github-icon.png"
    },
    // {
    //     id: 16, name: "Visual Studio Code", description: "Visual Studio is an integrated development environment (IDE) developed by Microsoft.", image: "./src/assets/vscode-icon.svg"
    // }
]

const Skills = () => {
    return (
        <div className='lg:mx-12 mx-5 py-35 toAnimate' id='skills'>
            <div className='text-headingColor mb-20'>
                <p className='text-xl font-semibold mb-5'>—— My</p>
                <h2 className='md:text-6xl text-4xl font-bold outline-heading'>Technical <span className='text-primary'>Skills</span>💻</h2>
            </div>

            {/* skills card */}
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12'>
                {
                    technicalSkills.map(skill => <div key={skill.id} className='bg-white p-8 hover:-translate-y-4 transition-all duration-300 skillcard'
                    // style={{ backgroundImage: `url(${skill.image})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                    >
                        <img src={skill.image} alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-primary'>{skill.name}</p>
                        <p className='text-black dscrptn'>{skill.description}</p>
                    </div>)
                }
            </div>

        </div>

    )
}

export default Skills
