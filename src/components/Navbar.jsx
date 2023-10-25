import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import AlgoLogoPng from '../assets/logo.png'
import rusFlag from '../assets/ebook.png'
import engFlag from '../assets/ebook.png'
import uzbFlag from '../assets/ebook.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        console.log('hello');
        setNav(!nav)
    }
    return (
        <nav className='text-white flex justify-between items-center h-24 max-w-[1200] mx-auto'>

            <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center h-[100px]">
                <Link to="/" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-[#00ffcb]">
                    <span className="mr-2 text-4xl">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
                    </span>
                    streamio
                </Link>
                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-5 right-7 cursor-pointer md:hidden text-blue-600" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 z-50 ">
                        <li className="font-bold text-gray-100 md:mr-12"><Link to="/library">Kutubxona</Link></li>
                        <li className="font-bold text-gray-100 md:mr-12"><a href="#">Almashish</a></li>
                        <li className="text-gray-100 md:mr-12"><a href="#">Support</a></li>
                        <li className="font-bold md:mr-12">
                            <button className="rounded-full border-2 border-[#00ffcb] px-6 py-1 font-medium text-white transition-colors hover:border-dashed duration-300  hover:text-gray-700">Login</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <div onClick={handleNav} className='block md:hidden ease-in-out duration-300 mr-5'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={!nav ? 'text-white text-xl fixed left-0 top-0 w-[60%] bg-[#0f1ae7] h-full border-r border-r-[#0f1ae7] ease-in-out duration-500 z-10' : "fixed left-[-100%]"}>
                <div className='w-full mt-4 ml-3'><img className='nav-brand lg:w-52 md:w-44 sm:w-32 w-32' src={AlgoLogoPng} /></div>
                <ul className='p-4 uppercase container-lan'>

                    <li className='p-4 border-b border-b-gray-600 item'>Company</li>
                    <li className='p-4 border-b border-b-gray-600 item'>Resources</li>
                    <li className='p-4 border-b border-b-gray-600 item'>About</li>
                    <li className='p-4  item'>Contact</li>


                </ul>
            </div>

        </nav>
    )
}

export default Navbar