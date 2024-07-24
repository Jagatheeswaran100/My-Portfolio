import React, { useEffect, useState } from 'react';
// import logo from '../assets/Logo.png';
import jwLogo from '../assets/jw-logo.png';
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-scroll';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // toggle menu btn
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // function for making navbar sticky when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className='w-full fixed top-0 left-0 right-0 stickyNavBar'>
            <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""}`}>
                <div className='flex items-center justify-between'>

                    {/* logo */}
                    <div className='cursor-pointer'>
                        <img src={jwLogo} alt="" className='h-10' />
                    </div>

                    {/* menu items for large devices*/}
                    <div className='lg:flex items-center gap-3 hidden text-body text-lg'>
                        <Link to='home' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-primary cursor-pointer hover:text-gray-400'>
                            Home
                        </Link>
                        <Link to='about' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-primary cursor-pointer hover:text-gray-400'>
                            About
                        </Link>
                        <Link to='journey' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-primary cursor-pointer hover:text-gray-400'>
                            Journey
                        </Link>
                        <Link to='skills' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-primary cursor-pointer hover:text-gray-400'>
                            Skills
                        </Link>
                        <Link to='works' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-primary cursor-pointer hover:text-gray-400'>
                            Works
                        </Link>
                        <Link to='contact' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-2 px-4 cursor-primary cursor-pointer hover:text-gray-400'>
                            Contact
                        </Link>
                    </div>

                    {/* <div className='lg:block hidden'>
                        <button className='outlineBtn'>Contact Me</button>
                    </div> */}

                    {/* menu btn for small devices */}
                    <button onClick={toggleMenu} className='lg:hidden text-body text-3xl'>
                        <HiMenuAlt3 />
                    </button>
                </div>

                {/* menu items for small devices */}
                {
                    isMenuOpen && <div className='mt-4 p-4 bg-body rounded-lg text-white'>
                        <a href="/home" className='block py-2 px-4 cursor-primary hover:text-gray-400'>Home</a>
                        <a href="/about" className='block py-2 px-4 cursor-primary hover:text-gray-400'>About</a>
                        <a href="/journey" className='block py-2 px-4 cursor-primary hover:text-gray-400'>Journey</a>
                        <a href="/skills" className='block py-2 px-4 cursor-primary hover:text-gray-400'>Skills</a>
                        <a href="/works" className='block py-2 px-4 cursor-primary hover:text-gray-400'>Works</a>
                        <a href="/contact" className='block py-2 px-4 cursor-primary hover:text-gray-400'>Contact</a>
                    </div>
                }
            </nav>
        </header>
    )
}

export default NavBar
