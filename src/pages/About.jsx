import { Link } from "react-router-dom";


const About = () => {
  return (
    
    <section className="relative  bg-black h-[100vh] py-5">
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto mt-78">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                        <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" className="w-full align-middle rounded-t-lg" />
                        <blockquote className="relative p-8 mb-4">
                            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                                {/* <polygon points="-30,95 583,95 583,65" className="text-white fill-current" /> */}
                            </svg>
                            <h4 className="text-xl font-bold text-[#00ffcb]">
                                Elektron kutubxona haqida
                            </h4>
                            <p className="text-md font-light mt-2 text-white">
                                Bu Dastur 2023 yilda AlgorithmAllies jamosi tomonida tuzilgan.
                            </p>
                        </blockquote>
                    </div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 px-4">
                            <div className="relative flex flex-col mt-4">
                                <div className="px-4 py-2 flex-auto text-white">
                                    <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-[#00ffcb]">
                                        <i className="fas fa-sitemap" />
                                    </div>
                                    <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                                    <p className="mb-4 text-blueGray-500">
                                        Notus JS comes with a huge number of Fully Coded CSS
                                        components.
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col min-w-0 text-white">
                                <div className="px-4 py-2 flex-auto">
                                    <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-[#00ffcb]">
                                        <i className="fas fa-drafting-compass" />
                                    </div>
                                    <h6 className="text-xl mb-1 font-semibold">
                                        JavaScript Components
                                    </h6>
                                    <p className="mb-4 text-blueGray-500">
                                        We also feature many dynamic components for React, NextJS,
                                        Vue and Angular.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 px-4 text-white">
                            <div className="relative flex flex-col min-w-0 mt-4 ">
                                <div className="px-4 py-2 flex-auto">
                                    <div className="text-black text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-[#00ffcb]">
                                        <i className="fas fa-newspaper" />
                                    </div>
                                    <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                                    <p className="mb-4 text-blueGray-500">
                                        This extension also comes with 3 sample pages. They are
                                        fully coded so you can start working instantly.
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex flex-col min-w-0">
                                <div className="px-4 py-2 flex-auto">
                                    <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-2 shadow-lg rounded-full bg-[#00ffcb]">
                                        <i className="fas fa-file-alt" />
                                    </div>
                                    <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                                    <p className="mb-4 text-blueGray-500">
                                        Built by developers for developers. You will love how easy
                                        is to to work with Notus JS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                        <div className="text-sm text-white font-semibold py-1">
                            Made with <Link to="https://www.tolipovjs.uz/" className="text-blueGray-500 hover:text-gray-300" >TolipovJS.uz</Link> by <Link to="https://www.tolipovjs.uz/" className="text-blueGray-500 hover:text-blueGray-800" > Ziyovuddin Tolipov</Link>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
  )
}

export default About