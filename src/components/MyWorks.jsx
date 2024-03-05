import React, { useEffect, useState } from 'react'

const MyWorks = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => setProjects(data))
    }, []);

    return (
        <div className='lg:mx-12 mx-4 my-32' id='works'>
            <div className='text-headingColor mb-20'>
                <p className='text-xl font-semibold mb-5'>My</p>
                <h2 className='md:text-5xl text-4xl font-bold'>Recent <span className='text-primary'>Works</span></h2>
            </div>

            {/* projects card */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    projects.map(project => <div key={project.id} className='shadow-xl rounded-lg cursor-pointer'>
                        <img src={project.image} alt="" className='hover:scale-90 transition-all duration-300 border' />
                        <div className='p-8'>
                            <h3 className='text-2xl font-semibold mb-2 text-headingColor'>{project.name}</h3>
                            <p className='text-body mb-4'>{project.description}</p>
                            <a href={project.link} target='_blank' className='underline underline-offset-8 hover:text-primary'>View In Live <img src="./src/assets/arrow.png" alt="" className='w-3 inline-block ml-3' /></a>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default MyWorks
