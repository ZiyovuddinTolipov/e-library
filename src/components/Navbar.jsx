import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import AlgoLogoPng from '../assets/logo.png'
import rusFlag from '../assets/ebook.png'
import engFlag from '../assets/ebook.png'
import uzbFlag from '../assets/ebook.png'
const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        console.log('hello');
        setNav(!nav)
    }
    return (
        <nav className='text-white flex justify-between items-center h-24 max-w-[1080px] mx-auto'>
            <div className='w-full px-10'><img className='nav-brand lg:w-52 md:w-44 sm:w-32 w-32' src={AlgoLogoPng} alt="logo" /></div>
            <ul className='hidden md:flex h-5 items-center container-lan'>

                <li className='p-2 item'><img src={rusFlag} alt="rusflag" className='h-[40px]  cursor-pointer' /></li>
                <li className='p-2 item'><img src={engFlag} alt="rusflag" className='h-[38px]  cursor-pointer' /></li>
                <li className='p-2 item'><img src={uzbFlag} alt="rusflag" className='h-[36px]  cursor-pointer' /></li>
            </ul>
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