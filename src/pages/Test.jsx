import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineHeart, AiOutlineLogin, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion";
import "../scss/test.scss"
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        console.log('hello');
        setNav(!nav)
    }
    const style = {
        navbar: `text-[#fff] flex justify-between items-center py-4 mt-3 px-2 rounded-md max-w-[1400px] mx-auto`,
        navList: `hidden md:flex h-5 items-center container-lan`,
        li: `p-2 item font-semibold cursor-pointer transform duration-300 duration-400 transition `,
        liMobile: `p-2 item font-semibold cursor-pointer flex items-center text-white transform hover:scale-110 duration-400 ease-in-out border-b border-b-white`,
        navLinkText: `ml-2`,
        searchInput: `bg-slate-700  max-w-[400px] w-[400px] rounded-md  outline-none  text-black font-[600] py-2 px-3 pr-8`
    }
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 1.2
            }
        }
    }
    return (
        <nav className={style.navbar}>
            <AnimatePresence>
                <motion.div className="md:flex justify-between w-100 bg-black font-semibold text-[#0f1ae7] text-3xl uppercase hidden"
                    variants={item}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1, height: "20vh" }}
                    transition={{ duration: .5 }}
                    style={{ top: 0, display: "flex" }}
                    exit="exit"
                >
                    <motion.div>
                        <motion.a
                            initial={{ x: -90, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0 }}
                            exit={{
                                opacity: 0,
                                y: 90,
                                transition: {
                                    ease: "ease",
                                }
                            }}
                        >
                            navlogo
                        </motion.a>
                    </motion.div>
                    <motion.div className='md:flex justify-between gap-3 hidden '>
                        <motion.a href=""
                            initial={{ y: 90, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .8 }}
                            exit={{
                                opacity: 0,
                                y: 90,
                                transition: {
                                    ease: "easeInOut",
                                    delay: 1
                                }
                            }}
                        >Kutubxona
                        </motion.a>
                        <motion.a href=""
                            initial={{ y: 90, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .7 }}
                            exit={{
                                opacity: 0,
                                y: 30,
                                transition: {
                                    ease: "easeInOut",
                                    delay: .8
                                }
                            }}
                        >Almashish</motion.a>
                        <motion.a href=""
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .6 }}
                            exit={{
                                opacity: 0,
                                y: 90,
                                transition: {
                                    ease: "easeInOut",
                                    delay: .6
                                }
                            }}
                        >Portfolio</motion.a>
                        <motion.a href=""
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .5 }}
                            exit={{
                                opacity: 0,
                                y: 90,
                                transition: {
                                    ease: "easeInOut",
                                    delay: .4
                                }
                            }}
                        >Blog</motion.a>
                        <motion.a href=""
                            initial={{ y: 80, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: .4 }}
                            exit={{
                                opacity: 0,
                                y: 90,
                                transition: {
                                    ease: "easeInOut",
                                    delay: .2
                                }
                            }}
                        >Contact</motion.a>
                    </motion.div>
                </motion.div>

            </AnimatePresence>

            <div onClick={handleNav} className='block md:hidden ease-in-out duration-300 mr-5 text-black'>
                <AiOutlineMenu size={20} />
            </div>
            <AnimatePresence className="block md:hidden">
                {
                    nav && (
                        <motion.div className="menu_container"
                            variants={item}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "100vh", opacity: 1 }}
                            transition={{ duration: .5 }}
                            style={{ top: 0 }}
                            exit="exit"
                        >
                            <div className="btn_close" onClick={handleNav}>X</div>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .8 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: 1
                                    }
                                }}
                            >Home
                            </motion.a>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .7 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .8
                                    }
                                }}
                            >About</motion.a>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .6 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .6
                                    }
                                }}
                            >Portfolio</motion.a>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .5 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .4
                                    }
                                }}
                            >Blog</motion.a>
                            <motion.a href=""
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .4 }}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: .2
                                    }
                                }}
                            >Contact</motion.a>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </nav>
    )
}

export default Navbar