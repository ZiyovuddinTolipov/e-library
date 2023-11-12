import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from "../../assets/hero-girl-img.png"
const Hero = () => {
    return (
        <main className='bg-[#E4F5EB]'>
            <div className='max-w-[1400px] w-full mx-auto'>
            <nav className='flex justify-between items-center py-4'> {/*Navbar qismi */}
                <div>
                    <h3 className='font-semibold'>
                        <span className='text-[#45B871]'>TUIT</span>-LIB
                    </h3>
                </div>
                <ul className='flex items-center  gap-4'>
                    <li>HOME</li>
                    <li>All Courses</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <div>
                    <button>Sign In</button>
                    <button>Free Trial</button>
                </div>
            </nav>
            <div>
                <div>
                    <h1>
                        Anytime,anywhereDevelop your skillby Online
                    </h1>
                    <p>
                        Online education is a form of education where students use their home 
                        computers through the internet. For many nontraditional students, among 
                        them all those who want to continue.
                    </p>
                    <div>
                        <button>All Courses</button>
                        <button>
                            <i>icon</i>
                            Play Video
                        </button>
                    </div>
                </div>
                <div>
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