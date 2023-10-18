import HeroImg from '../../assets/avatar.png'
// icons
import instagramLogo from "../../assets/instagram.svg"
import telegramLogo from "../../assets/telegram.svg"
import xLogo from "../../assets/xcom.svg"
import homeLogo from "../../assets/facebook.svg"

import Navbar from "../Navbar"

const Hero = () => {
    const style = {
        container: "bg-black w-full mx-auto z-30 hero flex flex-col items-center justify-between overflow-y-hidden h-[100vh]",
        headingText: "text-3xl sm:text-5xl md:text-6xl font-bold text-white w-[50%]",
        h2: "text-3xl md:text-5xl ",
        socialLinks: "px-5 py-2 bg-black max-w-[200px] w-full my-2 cursor-pointer flex gap-2 items-center",
        text100: "text-[#00ffcb] font-semibold",
        navLink: "px-3 py-2 border-2 rounded-full cursor-pointer hover:border-[#fff] duration-200 hover: border-[#00ffcb] text-[#00ffcb] hover:text-[#00ffcb]"
    }
    return (
        <section className={style.container}>
            <Navbar />
            <div className="flex  md:flex-row h-auto md:h-[500px] xl:h-[70vh] hero__content w-full flex-col-reverse pt-10 max-w-[1600px] mb-10">
                <div className="circle rounded-full absolute z-10" />
                <div className='w-100 md:w-[50%] flex items-center md:items-start justify-center md:justify-center  flex-col  px-5  md:px-16   md:pt-0 relative'>
                    
                    <h3 className='text-base text-white my-2 md:text-2xl'>
                        <span className={style.text100}>-</span> Elektron kitoblar jami <span className={style.text100}>12500+</span> dan ortiq<br />
                        <span className={style.text100}>-</span> Foydalanuvchilar soni <span className={style.text100}>23400+</span> dan ortiq<br />
                        <span className={style.text100}>-</span> Yuklab olinishlar soni <span className={style.text100}>15600+</span> dan ortiq
                    </h3>
                    <h2 className='text-xl sm:text-2xl  text-white mt-6 md:mt-6'>Bizni ijtimoiy tarmoqlarda kuzating!</h2>
                    <div className="social-buttons lines flex justify-center md:justify-start my-4 ">
                        
                        <a href="#" target="_blank" className="social-button">
                            <img src={telegramLogo} alt="telegram" width={30} height={30} className='fa ' />
                        </a>
                        <a href="#" target="_blank" className="social-button ">
                            <img src={xLogo} alt="x.com" width={30} height={30} className='fa ' />
                        </a>
                        {/* <a href="https://www.linkedin.com/in/naimjeem" target="_blank" className="social-button linkedin"><i className="fa fa-linkedin" /></a> */}
                        <a href="#" target="_blank" className="social-button">
                            <img src={instagramLogo} alt="instagram" width={30} height={30} className='fa ' />
                        </a>
                        <a href="#" target="_blank" className="social-button">
                            <img src={homeLogo} alt="telegram" width={35} height={35} className='fa ' />

                        </a>
                    </div>
                </div>
                <div className="circle3 rounded-full absolute -z-10" />
                <div className='w-100 md:w-[50%] flex items-center justify-center flex-col relative'>
                    <div className="circle2 rounded-full absolute -z-10 top-[0px] sm:top-[-30px] md:top-[0px] right-0 sm:right-[-30px] md:right-[0px] hidden md:block" />
                    <div className='hero-img md:h-[100%] '>
                        <img src={HeroImg} alt="hero-img-homepage" className='transform w-[200px] h-[300px] md:h-[500px]  md:w-auto duration-200 ' />
                    </div>
                    {/* <h3 className='text-3xl font-semibold text-white mt-5'>MuhammadAli</h3> */}
                </div>
            </div>
        </section>
    )
}

export default Hero;