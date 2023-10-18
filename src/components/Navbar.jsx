import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
const Navbar = () => {
    const style= {
        navLink: "px-3 py-2 border-2 rounded-full cursor-pointer hover:border-[#fff] duration-200 hover: border-[#00ffcb] text-[#00ffcb] hover:text-[#00ffcb]"
    }
  return (
    <nav className='w-full max-w-[1600px]  px-5 md:px-16 flex justify-between items-center mt-4'>
                <Link to="/" className='flex items-center gap-4'>
                    <img src={logo} alt="logo in samtuit" width={70} />
                    <h1 className='text-white text-xl sm:text-5xl 2xl:text-6x font-semibold'>SAMTUIT Library</h1>
                </Link>
                <ul className="flex  gap-3 text-xl font-[500]">
                    <Link to="/library" className={style.navLink}>Kutubxona</Link>
                    <Link to="/library" className={style.navLink}>Kitob Almashish</Link>
                    <Link to='/signin' className={style.navLink}>Login</Link>
                </ul>
            </nav>
  )
}

export default Navbar