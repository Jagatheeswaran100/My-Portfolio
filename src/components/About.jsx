import React from 'react';
// import profilepic from '../assets/profile-pic.png';
import profilepic from '../assets/jagatheeswaran.jpg';
import resume from '../assets/jagatheeswaran_resume.pdf';

const About = () => {
    return (
        <div className='lg:mx-12 mx-4 my-5 toAnimate' id='about'>
            <div className='flex flex-col sm:flex-row md:gap-20 gap-10 items-center justify-between py-10 about-bg'>
                <div className='sm:w-5/12'>
                    <img src={profilepic} alt="" className='w-full sm:w-11/12 shadow-xl profile-pic' />
                </div>

                <div className='sm:w-1/2'>
                    <h2 className='md:text-6xl text-4xl font-bold outline-heading'>  About <span className='text-primary'>Me</span>🔰</h2>
                    <p className='mt-8 md:pr-8 mb-8'>
                        I am Jagatheeswaran, a recent graduate with an M.Sc. in computer science. I have four months of internship experience in Software Development, focusing on Frontend technologies, that was gained by contributing to Quantzi Infotech Private Limited. <br /><br /> Now, I am actively seeking a full-time Web developer position where I can leverage my skillsets and problem-solving abilities to deliver top-notch solutions. I am continuously driven by my passion for learning, and I am committed to staying updated on the latest advancements in web development to remain a valuable member of the company.
                    </p>
                    {/* <a href={resume} target='_blank'>
                        <button className='outlineBtn'><b>📄RESUME<img src="./src/assets/arrow.png" alt="" className='w-3 inline-block ml-3' /> </b></button>
                    </a> */}
                    <a href={resume} target='_blank'>
                        <button
                            className="about-btn text-xl cursor-pointer flex justify-between bg-primary px-3 py-2 text-white tracking-wider shadow-xl hover:bg-body hover:scale-110 duration-500 hover:ring-1 font-mono w-[125px]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="3"
                                stroke="currentColor"
                                class="w-5 h-6 animate-bounce"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                ></path>
                            </svg>
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
