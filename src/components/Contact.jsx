import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiPhone } from 'react-icons/hi'

const Contact = () => {
    return (
        <div className='lg:px-12 px-4' id='contact'>
            <div className='text-headingColor text-center mb-20'>
                <p className='text-xl font-semibold mb-5'>Get In Touch</p>
                <h2 className='md:text-5xl text-4xl font-bold'>Contact Me</h2>
                {/* <p className='mt-5'>Connect effortlessly with this Google Sheet integrated form.</p> */}
            </div>

            <div className='md:w-2/3 mx-auto mb-20'>
                {/* <form>
                    <div className='flex flex-col sm:flex-row gap-8 items-center mb-8'>
                        <div className='sm:w-1/2 w-full'>
                            <label htmlFor="fName" className='text-base text-headingColor w-full'>First Name</label>
                            <input type="text" id='fName' name='fName' required className='block border border-primary rounded-lg py-2 mt-2 w-full' />
                        </div>
                        <div className='sm:w-1/2 w-full'>
                            <label htmlFor="lName" className='text-base text-headingColor w-full'>Last Name</label>
                            <input type="text" id='lName' name='lName' required className='block border border-primary rounded-lg py-2 mt-2 w-full' />
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-8 items-center mb-8'>
                        <div className='sm:w-1/2 w-full'>
                            <label htmlFor="email" className='text-base text-headingColor w-full'>Email Id</label>
                            <input type="text" id='email' name='email' required className='block border border-primary rounded-lg py-2 mt-2 w-full' />
                        </div>
                        <div className='sm:w-1/2 w-full'>
                            <label htmlFor="phone" className='text-base text-headingColor w-full'>Mobile Number</label>
                            <input type="text" id='phone' name='phone' required className='block border border-primary rounded-lg py-2 mt-2 w-full' />
                        </div>
                    </div>

                    <div className='w-full mb-8'>
                        <label htmlFor="message" className='text-base text-headingColor w-full'>Message</label>
                        <textarea name="message" id="message" cols="30" rows="5" placeholder='Type your message...' required className='block border border-primary rounded-lg py-2 mt-2 w-full px-2'></textarea>
                    </div>

                    <div className='w-36 mx-auto mt-8'>
                        <input type="submit" value="Submit" className='btn-primary bg-primary py-3 px-8 cursor-pointer w-full' />
                    </div>

                </form> */}
                <div className='md:flex items-center justify-center gap-4'>
                    <a href="https://www.linkedin.com/in/jagatheeswaran-s-479931230/" target='_blank' className='flex justify-center mb-3'>
                        <FaLinkedin className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-xl hover:text-primary' />
                        LinkedIn
                    </a>
                    <a href="mailto:jagathees320@gmail.com" target='_blank' className='flex justify-center mb-3'>
                        <HiMail className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-xl hover:text-primary' />
                        jagathees320@gmail.com
                    </a>
                    <a href="https://github.com/Jagatheeswaran100" target='_blank' className='flex justify-center mb-3'>
                        <FaGithub className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-xl hover:text-primary' />
                        GitHub
                    </a>
                    <a href="/" target='_blank' className='flex justify-center mb-3'>
                        <HiPhone className='cursor-pointer hover:-translate-y-2 transition-all duration-300 text-xl hover:text-primary' />
                        +91 8098040742
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
