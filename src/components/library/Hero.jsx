import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import sliderImg from '../../assets/library/slider.png'
import sliderImg2 from '../../assets/library/slider2.png'
import sliderImg3 from '../../assets/library/slider3.png'
import discountImg from '../../assets/library/chegirma.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const style = {
        container: "min-h-[400px] lg:h-[350px] sm:h-[600px]  sm:pt-3 sm:px-10 lg:px-0 md:pt-6 pt-8 flex flex-col sm:flex-col sm:w-full lg:flex-row sm:",
        swiperADS: `h-full rounded-2xl sm:w-full lg:w-[70%] sm:h-[300px] lg:h-full `,
        sliderADS: `bg-slate-800 text-white text-center min-h-[350px]`,
        discount: ` rounded-2xl px-4 lg:ml-5 sm:mx-0 sm:my-5 lg:my-0 w-full sm:w-full lg:w-[30%] sm:h-[300px] lg:h-full min-h-[300px] `
    }
    const sliderData = [
        {
            "id": 1,
            "sliderImg": sliderImg,
            "sliderInfo": "Lorem ipsum dolor sit amet",
            "sliderURL": "/signup"
        },
        {
            "id": 2,
            "sliderImg": sliderImg3,
            "sliderInfo": "Lorem ipsum dolor sit amet 2",
            "sliderURL": "/signup"
        },
        {
            "id": 3,
            "sliderImg": sliderImg,
            "sliderInfo": "Lorem ipsum dolor sit amet 3",
            "sliderURL": "/signup"
        },
        {
            "id": 4,
            "sliderImg": sliderImg2,
            "sliderInfo": "Lorem ipsum dolor sit amet 2",
            "sliderURL": "/signup"
        }
    ]
    return (
        <section className={style.container}>
            
            <Swiper
                className={style.swiperADS}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                {sliderData.map((item) => (
                    <SwiperSlide key={item.id} className={`${style.sliderADS}`} style={{ background: `url('${item.sliderImg}') no-repeat center`, backgroundSize: "cover" }}>
                        <div className="flex justify-center flex-col items-center min-h-full">
                            <h3>{item.sliderInfo}</h3>
                            <a href={item.sliderURL}>Batafsil</a>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle} >
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper >
            <div className={style.discount} style={{ background: `url(${discountImg}) no-repeat center`, backgroundSize: "cover" }} >
                {/* <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsa possimus non corporis labore, recusandae, fugiat vel eveniet ipsam nobis nostrum expedita neque quam repellendus nihil porro aliquid quia eos.</h1> */}
            </div>
        </section>
    )
}

export default Hero