import React from 'react';

const SkillCarousel = () => {
    return (
        <div className='lg:mx-12 mx-5 py-35' id='skills'>
            <div className='text-headingColor mb-20'>
                <p className='text-xl font-semibold mb-5'>—— My</p>
                <h2 className='md:text-6xl text-4xl font-bold outline-heading'>Technical <span className='text-primary'>Skills</span>💻</h2>
            </div>

            <div className="container mx-auto w-full overflow-hidden relative">
                <div className="w-full h-full absolute">
                    <div className="w-1/4 h-full absolute z-50 left-0" style={{ background: 'linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                    <div className="w-1/4 h-full absolute z-50 right-0" style={{ background: 'linear-gradient(to left, #fff 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                </div>

                <div className="carousel-items flex items-center justify-center" style={{ width: 'fit-content', animation: 'carouselAnimRight 10s infinite alternate linear' }}>

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        {/* <svg className="fill-current text-gray-500 hover:text-gray-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z" /></svg>
                        <span className="text-gray-500 font-bold text-xl mb-3">Sup3r-Us3r</span>
                        <img className="h-16 w-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img" />
                        <p className="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
                        <button className="mt-4 mb-2 bg-primary rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-violet-300 focus:outline-none">Button</button> */}
                        <img src="src\assets\html-icon.svg" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>HTML</p>
                    </div>

                    {/* Repeat the above div structure for each carousel item */}

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        <img src="src\assets\css-icon.svg" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>CSS</p>
                    </div>

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        <img src="src\assets\bootstrap-icon.svg" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>Bootstrap</p>
                    </div>

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        <img src="src\assets\tailwindcss-icon.svg" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>Tailwind CSS</p>
                    </div>

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        <img src="src\assets\sass-icon.svg" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>Sass</p>
                    </div>

                </div>
            </div>

            {/* ********************************* */}

            <div className="container mx-auto w-full overflow-hidden relative">
                <div className="w-full h-full absolute">
                    <div className="w-1/4 h-full absolute z-50 left-0" style={{ background: 'linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                    <div className="w-1/4 h-full absolute z-50 right-0" style={{ background: 'linear-gradient(to left, #fff 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                </div>

                <div className="carousel-items flex items-center justify-center" style={{ width: 'fit-content', animation: 'carouselAnimLeft 10s infinite alternate linear' }}>

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        {/* <svg className="fill-current text-gray-500 hover:text-gray-500 cursor-pointer h-12 w-12 absolute top-0 right-0 mt-2 -mr-5" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z" /></svg>
                        <span className="text-gray-500 font-bold text-xl mb-3">Sup3r-Us3r</span>
                        <img className="h-16 w-16 rounded-full shadow-2xl" src="https://pbs.twimg.com/profile_images/830533062807191552/TbkWKnnv_400x400.jpg" alt="Img" />
                        <p className="mt-3 text-gray-600 text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam!"</p>
                        <button className="mt-4 mb-2 bg-primary rounded-full px-12 py-1 text-gray-100 font-semibold hover:bg-violet-300 focus:outline-none">Button</button> */}
                        <img src="src\assets\javascript-icon.svg" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>JavaScript</p>
                    </div>

                    {/* Repeat the above div structure for each carousel item */}

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        <img src="src\assets\jquery-icon.svg" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>jQuery</p>
                    </div>

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        <img src="src\assets\reactjs-icon.svg" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>React Js</p>
                    </div>

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        <img src="src\assets\material-ui-icon.png" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>Material UI</p>
                    </div>

                    <div className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg skillcard" style={{ width: '270px' }}>
                        <img src="src\assets\nodejs-icon.svg" alt="" className='w-16 h-16 bg-white rounded-lg shadow-md mb-3 p-3' />
                        <p className='text-2xl font-bold mb-4 text-gray-500'>Node Js</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SkillCarousel;
