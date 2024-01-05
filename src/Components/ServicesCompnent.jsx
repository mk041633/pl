import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

function ServicesCompnent() {

 

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const coverStyle = {
        backgroundImage: `url('images/globe.PNG')`,
        backgroundSize: '100% ',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='w-full flex mb-12 lg:my-12 text-white justify-between' style={coverStyle}>

            <div className='w-full bg-blue-950 bg-opacity-95 px-10 sm:px-11 py-11 text-start' >
                <div className='flex flex-col items-center justify-center'>

                    <h2 className='text-3xl font-bold text-red-700 mt-5' data-aos="fade-right">Наши сервисы</h2>
                    <div className='h-1 bg-white my-4 rounded w-14 '></div>
                </div>
                <p className='my-5 font-thin  sm:mx-0 lg:mx-11' data-aos="fade-up">
                "Откройте для себя мир бесперебойного подключения и коммуникации с A&A Telecom. Наш широкий спектр услуг включает высокоскоростной Интернет, кристально чистую голосовую связь, гибкие тарифные планы передачи данных, услуги мобильной связи и индивидуальные решения для бизнеса. Независимо от того, находитесь ли вы дома или в дороге, наша надежная сеть поддерживает вас на связи. Благодаря приверженности экологичности и поддержке в режиме 24/7 мы являемся вашим надежным партнером для удовлетворения всех ваших телекоммуникационных потребностей."
                </p>
                <p className='my-5 font-thin'>

                </p>
                <div className='flex justify-center'>

                    <button
                        class="bg-transparent px-3 py-2 my-4 rounded-md border shadow-custom border-white  hover:bg-red-700 hover:border-none">
                      <a href='/services'> Узнать больше</a>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ServicesCompnent