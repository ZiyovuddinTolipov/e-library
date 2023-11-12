import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from "../../assets/hero-girl-img.png"
const Hero = () => {
    return (
        <main className='bg-[#E4F5EB]'>
            <div className='max-w-[1400px] w-full mx-auto'>
            <nav className='flex justify-between items-center py-4'> {/*Navbar qismi */}
                <div>
                    <h4 className='font-semibold'>
                        <span className='text-[#45B871]'>TUIT</span>-LIB
                    </h4>
                </div>
                <ul className='flex items-center  gap-4 font-[500]'>
                    <li>HOME</li>
                    <li>All Courses</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <div className='flex items-center  gap-4 font-[500]'>
                    <button>Sign In</button>
                    <button className='bg-[#45B871] px-3 py-2 text-white rounded-md'>Free Trial</button>
                </div>
            </nav>
            <div className='flex py-5 max-h-[650px] h-full'>
                <div className='w-1/2 px-24 flex flex-col justify-between '>
                    <h1 className='text-5xl font-[700]'>
                        Anytime,anywhereDevelop your skillby Online
                    </h1>
                    <p className='text-xl'>
                        Online education is a form of education where students use their home 
                        computers through the internet. For many nontraditional students, among 
                        them all those who want to continue.
                    </p>
                    <div>
                        <button className='bg-[#45B871] py-2 px-3 text-white  rounded-md'>All Courses</button>
                        <button>
                            <i>icon</i>
                            Play Video
                        </button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <img src={heroImg} alt="hero girl image " />
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Hero