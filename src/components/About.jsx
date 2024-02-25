import React from 'react';
import profilepic from '../assets/profile-pic.png';

const About = () => {
    return (
        <div className='lg:mx-12 mx-4' id='about'>
            <div className='flex flex-col sm:flex-row md:gap-20 gap-10 items-center justify-between py-10'>
                <div className='sm:w-5/12'>
                    <img src={profilepic} alt="" className='w-full sm:w-10/12' />
                </div>

                <div className='sm:w-1/2'>
                    <h2 className='md:text-5xl text-4xl font-bold'>About <span className='text-primary'>Me</span></h2>
                    <p className='mt-8 md:pr-8 mb-8'>
                        I am Jagatheeswaran, a recent graduate with an M.Sc. in computer science. I have 4 months of internship experience in software development, focusing on frontend technologies, that was gained by contributing to Quantzi Infotech Private Limited. <br /><br /> Now, I am actively seeking a full-time frontend developer position where I can leverage my skillsets and problem-solving abilities to deliver top-notch solutions. I am continuously driven by my passion for learning, and I am committed to staying updated on the latest advancements in web development to remain a valuable member of the company.
                    </p>
                    <button className="btn-primary">Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default About
