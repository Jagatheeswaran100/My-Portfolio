// import React, { useEffect, useState } from 'react';

// const ProjectTools = ({ tools }) => {
//     return (
//         <>
//             {tools.split('&').map((tool, index) => (
//                 <button key={index} className='bg-body text-white rounded-lg px-3 my-2 mr-2'>{tool.trim()}</button>
//             ))}
//         </>
//     );
// };

// const MyWorks = () => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         fetch('projects.json').then(res => res.json()).then(data => setProjects(data))
//     }, []);

//     return (
//         <div className='lg:mx-12 mx-4 my-28 toAnimate' id='works'>
//             <div className='text-headingColor mb-20'>
//                 <p className='text-xl font-semibold mb-5'> —— My</p>
//                 <h2 className='md:text-6xl text-4xl font-bold outline-heading'>Recent <span className='text-primary'>Works👨🏻‍💻</span></h2>
//             </div>

//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 toAnimate'>
//                 {
//                     projects.map(project => (
//                         <div key={project.id} className='shadow-xl rounded-lg cursor-pointer'>
//                             <img src={project.image} className='hover:scale-90 transition-all duration-300 border' />
//                             <div className='p-8'>
//                                 <h3 className='text-2xl font-semibold mb-2 text-headingColor'>{project.name}</h3>
//                                 <ProjectTools tools={project.tools} />
//                                 <p className='text-body mb-4'>{project.description}</p>
//                                 <a href={project.link} target='_blank' rel='noopener noreferrer' className='underline underline-offset-8 hover:text-primary'>View In Live <img src="./src/assets/arrow.png" alt="" className='w-3 inline-block ml-3' /></a>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>

//         </div>
//     );
// };

// export default MyWorks;

import React, { useEffect, useState } from 'react';

const ProjectTools = ({ tools }) => {
    return (
        <>
            {tools.split('&').map((tool, index) => (
                <button key={index} className='bg-body text-white rounded-lg px-3 my-2 mr-2'>{tool.trim()}</button>
            ))}
        </>
    );
};

const MyWorks = () => {
    const [projects, setProjects] = useState([]);

    // Sample projects data from projects.json
    const projectsData = [
        {
            "id": 1,
            "name": "Admin Dashboard",
            "tools": "Html & Css & Bootstrap & Chart.js",
            "description": "Built a User Interface of Admin Dashboard",
            "image": "./src/assets/dashboard.png",
            "link": "https://jagatheeswaran100.github.io/Dashboard-UI/"
        },
        {
            "id": 2,
            "name": "Social Media",
            "tools": "React & Material UI",
            "description": "Developed a Static Social Media User Interface",
            "image": "./src/assets/social-media.png",
            "link": "https://jagatheeswaran100.github.io/social-media/"
        },
        {
            "id": 3,
            "name": "Grocery Store",
            "tools": "Html & Css & Swiper.js",
            "description": "Built a E-Commerce user interface for Grocery store",
            "image": "./src/assets/grocery.png",
            "link": "https://jagatheeswaran100.github.io/grocery-store/"
        },
        {
            "id": 4,
            "name": "Tourism Landing Page",
            "tools": "Html & Css",
            "description": "Created a Landing page for Tourism website",
            "image": "./src/assets/travelholic.png",
            "link": "https://jagatheeswaran100.github.io/Travelholic/"
        },
        {
            "id": 5,
            "name": "Weather Data Viewer",
            "tools": "React & API",
            "description": "Created Weather Data Viewer by fetching data from OpenWeatherMap",
            "image": "./src/assets/weather.png",
            "link": "https://jagatheeswaran100.github.io/weather-data-viewer/"
        }
    ];

    useEffect(() => {
        // Set projects data directly
        setProjects(projectsData);
    }, []);

    return (
        <div className='lg:mx-12 mx-4 my-28 toAnimate' id='works'>
            <div className='text-headingColor mb-20'>
                <p className='text-xl font-semibold mb-5'> —— My</p>
                <h2 className='md:text-6xl text-4xl font-bold outline-heading'>Recent <span className='text-primary'>Works👨🏻‍💻</span></h2>
            </div>

            {/* projects card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 toAnimate'>
                {
                    projects.map(project => (
                        <div key={project.id} className='shadow-xl rounded-lg cursor-pointer'>
                            <img src={project.image} className='hover:scale-90 transition-all duration-300 border' />
                            <div className='p-8'>
                                <h3 className='text-2xl font-semibold mb-2 text-headingColor'>{project.name}</h3>
                                <ProjectTools tools={project.tools} />
                                <p className='text-body mb-4'>{project.description}</p>
                                <a href={project.link} target='_blank' rel='noopener noreferrer' className='underline underline-offset-8 hover:text-primary'>View In Live <img src="./src/assets/arrow.png" alt="" className='w-3 inline-block ml-3' /></a>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default MyWorks;
