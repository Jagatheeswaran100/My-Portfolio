import React from 'react';
import logo from '../assets/logo-img.svg';
import jwLogo from '../assets/jw-logo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from "react-icons/hi";

const Footer = () => {
    return (
        <div className='bg-bgShade py-28 md:px-12 px-4 footer-bg'>

            {/* <svg className='footer-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,144C640,128,800,64,960,37.3C1120,11,1280,21,1360,26.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}

            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-20'>
                <a href="" className='flex-shrink-0'><img src={jwLogo} alt="" className='h-10' /></a>

                <div className='flex flex-col sm:flex-row md:items-center justify-between gap-4 flex-wrap'>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4 text-white'>Home</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4 text-white'>About</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4 text-white'>Skills</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4 text-white'>Works</a>
                    <a href="/" className='block hover:text-gray-400 py-2 px-4 text-white'>Contact</a>
                </div>

                <div className='flex items-center gap-4 text-white'>
                    <a href="https://www.linkedin.com/in/jagatheeswaran-s-479931230/" target='_blank'>
                        <FaLinkedin className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-xl hover:text-primary' />
                    </a>
                    <a href="mailto:jagathees320@gmail.com" target='_blank'>
                        <HiMail className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-xl hover:text-primary' />
                    </a>
                    {/* <a href="https://github.com/Jagatheeswaran100" target='_blank'>
                        <FaGithub className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-xl hover:text-primary' />
                    </a> */}
                </div>

            </div>

            <hr />

            <div className='mt-10 flex flex-col md:flex-row justify-center gap-8 text-white'>
                <p>Made with ❤️ by Jagatheeswaran</p>
                {/* <div className='space-x-6'>
                    <a href="/" className='hover:text-gray-400'>Privacy Policy</a>
                    <a href="/" className='hover:text-gray-400'>Terms of Service</a>
                    <a href="/" className='hover:text-gray-400'>Cookies Settings</a>
                </div> */}
            </div>

            {/* <div class="custom-shape-divider-top-1712678168">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div> */}

        </div>
    )
}

export default Footer
