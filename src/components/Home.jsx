import React from 'react';
import codingboy from '../assets/coding-boy.png';
// import { TypeAnimation } from 'react-type-animation';
// import resume from '../assets/jagatheeswaran_resume.pdf';
// import { HiDownload } from "react-icons/hi";

const Home = () => {

    return (
        <div className='bg-bgShade home-bg bgoverlay toAnimate' id='home' data-aos="fade-down">

            <div className="trybg">

                <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,288L120,277.3C240,267,480,245,720,245.3C960,245,1200,267,1320,277.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

                {/* <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,320L60,298.7C120,277,240,235,360,229.3C480,224,600,256,720,277.3C840,299,960,309,1080,293.3C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}

                <div className='lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-10 gap-5'>
                    <div className='md:w-2/3 w-full'>
                        <img src={codingboy} alt="" className='w-full' />
                    </div>

                    <div className='md:w-1/2 w-full mt-5'>
                        <h2 className='text-2xl  text-white font-semibold mb-5 italic'>Hello, I am Jagatheeswaran</h2>
                        {/* <h1 className='md:text-6xl text-4xl font-bold text-white leading-snug md:leading[76px] mb-5 outline-heading'>I Create <span className='text-primary'>Web Apps</span> that ignite client's business</h1> */}

                        {/* <div className='typewriting'>
                            <span>A Front-End Developer</span>
                        </div> */}

                        {/*  */}
                        {/* <div className='text-white'> */}
                        {/* <TypeAnimation
                            sequence={[
                                'I am a Front-End Developer',
                                1000,
                                'I am a Back-End developer',
                                1000,
                                'I am a Web Developer',
                                1000,
                                'I am a Full-Stack Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '3em', display: 'inline-block', color: '#5E3BEE', fontWeight: 'bolder', textTransform: 'uppercase', fontFamily: 'monospace' }}
                            repeat={Infinity}
                        /> */}
                        {/* </div> */}

                        <h1 className='md:text-6xl text-4xl font-bold text-white leading-snug md:leading[76px] mb-5 outline-heading'>I Create <span className='text-primary'>Web Apps</span> that ignite client's business</h1>
                        {/*  */}

                        <p className='text-white md:text-xl sm:text-l leading-9 mb-8 mt-3 italic'>Check out my portfolio website to learn more about me and my work!</p>
                        {/* <a href={resume} download={resume}>
                        <button className='btn-primary'><img src="https://cdn-icons-png.flaticon.com/128/7268/7268609.png" alt="" className='w-5 inline-block filter brightness-0 invert grayscale' /> RESUME</button>
                    </a> */}
                    </div>
                </div>

                {/* <div class="custom-shape-divider-bottom-1712678921">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
                </svg>
            </div> */}


            </div>

        </div>
    )
}

export default Home
