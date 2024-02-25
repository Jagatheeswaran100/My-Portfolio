import React from 'react';
import codingboy from '../assets/coding-bro.png';
import resume from '../assets/jagatheeswaran-resume.pdf';

// import { HiDownload } from "react-icons/hi";

const Home = () => {
    return (
        <div className='bg-bgShade' id='home' data-aos="fade-down">
            <div className='lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-10 gap-5'>
                <div className='md:w-1/2 w-full'>
                    <img src={codingboy} alt="" className='w-full' />
                </div>

                <div className='md:w-1/2 w-full mt-5'>
                    <h3 className='text-xl text-headingColor font-semibold mb-5'>Hey, I am Jagatheeswaran</h3>
                    <h1 className='md:text-6xl text-4xl font-bold text-headingColor leading-snug md:leading[76px] mb-5'>I Create <span className='text-primary'>Websites</span> that ignite client's business</h1>
                    <p className='text-body text-2xl leading-9 mb-8'>Check out my portfolio website to learn more about me and my work!</p>
                    <a href={resume} download={resume}>
                        <button className='btn-primary'><img src="https://cdn-icons-png.flaticon.com/128/7268/7268609.png" alt="" className='w-5 inline-block filter brightness-0 invert grayscale' /> RESUME</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Home
