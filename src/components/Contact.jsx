import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import resume from '../assets/jagatheeswaran_resume.pdf';

const Contact = () => {
    return (
        <div className='lg:px-12 px-4 flex flex-col items-center justify-center toAnimate' id='contact'>
            <div className='text-headingColor text-center mb-20'>
                <p className='text-xl font-semibold mb-5'>— Get In Touch —</p>
                <h2 className='md:text-6xl text-4xl font-bold outline-heading'> Contact <span className='text-primary'>Me</span></h2>
            </div>

            <div className='md:w-2/3 mx-auto mb-20'>
                <div className='md:flex items-center justify-center gap-4'>
                    <div className='flex flex-col items-center'>
                        <FaLinkedinIn className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-3xl hover:text-primary w-12 h-12 bg-gray-200 rounded-lg shadow-md mb-3 p-2' />
                        {/* <span className="text-center">LinkedIn</span> */}
                    </div>
                    {/* <div className='flex flex-col items-center'>
                        <HiPhone className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-3xl hover:text-primary w-12 h-12 bg-gray-200 rounded-lg shadow-md mb-3 p-2' />
                        <span className="text-center">+91 8098040742</span>
                    </div> */}
                    <div className='flex flex-col items-center'>
                        <HiMail className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-3xl hover:text-primary w-12 h-12 bg-gray-200 rounded-lg shadow-md mb-3 p-2' />
                        {/* <span className="text-center">jagathees320@gmail.com</span> */}
                    </div>
                </div>
                <div className='text-center mt-10'>
                    {/* <a href={resume} download={resume}>
                        <button className='btn-primary'><img src="https://cdn-icons-png.flaticon.com/128/7268/7268609.png" alt="" className='w-5 inline-block filter brightness-0 invert grayscale' />
                            &nbsp; RESUME
                        </button>
                    </a> */}

                    <a href={resume} download={resume}>
                        <button
                            className="about-btn text-xl cursor-pointer flex justify-between bg-primary px-3 py-2 text-white tracking-wider shadow-xl hover:bg-body hover:scale-110 duration-500 hover:ring-1 font-mono w-[125px] mx-auto"
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

export default Contact
