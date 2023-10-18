import Books from '../components/library/Books'
import Hero from '../components/library/Hero'
import Navbar from "../components/Navbar"


const Page = () => {
  const style = {
    container:'max-w-[1400px] mx-auto w-full overflow-x-auto'
  }
  localStorage.setItem('token','')  
  return (
    <main className={style.container}>
      <Navbar />
      <h1 className='text-[#fff]  text-center text-4xl font-semibold mt-10'>SAMTUIT  <span className='text-[#00ffcb]'>ONLINE</span> KUTUBXONASI</h1>
    <Hero />
    <Books />
    <h2 className='overflow-y-auto'></h2>
    </main>
  )
}

export default Page