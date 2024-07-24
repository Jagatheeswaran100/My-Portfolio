import React from 'react'

const TimeLine = () => {
    return (
        <div className='lg:mx-12 mx-5 py-10 toAnimate' id='journey'>
            <div className='text-headingColor md:mb-20'>
                <p className='text-xl font-semibold mb-5'>—— My</p>
                <h2 className='md:text-6xl text-4xl font-bold outline-heading'>Academic <span className='text-primary'>Journey</span>🎓</h2>
            </div>

            <div className="min-h-screen bg-white py-8 flex flex-col justify-center sm:py-8 toAnimate">
                <div className="sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

                    <div className="relative text-gray-700 antialiased text-sm font-semibold">

                        {/* Vertical bar running through middle */}
                        <div className="hidden sm:block w-1 bg-body absolute h-full left-1/2 transform -translate-x-1/2"></div>

                        {/* Left section, set by justify-start and sm:pr-8 */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 bg-body rounded shadow">
                                            <p className='text-primary'>Software Developer - Intern</p>
                                            <p className='text-white font-extralight'>Quantzi Infotech Private Limited, Chennai.</p>
                                            <p className='text-white font-extralight'>Oct 2023 - Feb 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right section, set by justify-end and sm:pl-8 */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div className="p-4 bg-body rounded shadow">
                                            <p className='text-primary'>M.Sc. Computer Science</p>
                                            <p className='text-white font-extralight'>Vels University, Chennai.</p>
                                            <p className='text-white font-extralight'>2021 - 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Left section, set by justify-start and sm:pr-8 */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 bg-body rounded shadow">
                                            <p className='text-primary'>B.Sc. Computer Technology</p>
                                            <p className='text-white font-extralight'>Kongu Arts and Science College, Erode.</p>
                                            <p className='text-white font-extralight'>2018 - 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right section, set by justify-end and sm:pl-8 */}
                        {/* <div className="mt-6 sm:mt-0">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div className="p-4 bg-body rounded shadow">
                                            HSC in 2018 at The Merit Hr. Sec. School, Thiruvarur.
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                        </div> */}

                        {/* Right section, set by justify-end and sm:pl-8 */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div className="p-4 bg-body rounded shadow">
                                            <p className='text-primary'>HSC</p>
                                            <p className='text-white font-extralight'>The Merit Hr. Sec. School, Thiruvarur.</p>
                                            <p className='text-white font-extralight'>2018</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Left section, set by justify-start and sm:pr-8 */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 bg-body rounded shadow">
                                            <p className='text-primary'>SSLC</p>
                                            <p className='text-white font-extralight'>Vidyaa Vikas Matric Hr. Sec. School, Thanjavur.</p>
                                            <p className='text-white font-extralight'>2016</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-primary border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TimeLine
