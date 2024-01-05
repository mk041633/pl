import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom'
import Help from './Help'
import ServicesCompnent from './ServicesCompnent'

function Services({ coverStyle }) {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const serviceItems = [
        { text: 'Мобильная связь', href: '/pabx', iconSrc: 'images/icons/phone-call.png' },
        { text: 'Домашний интернет', href: '/wifi', iconSrc: 'images/icons/wifi.png' },
        { text: 'Телефония для офиса', href: '/video-intercom', iconSrc: 'images/icons/intercom.png' },
        { text: 'ТВ, подписка на музыку и сериалы', href: '/accesscontrol', iconSrc: 'images/icons/access-control.png' },
        
    ];
    const serviceItems1 = [
        { text: 'Видеонаблюдение', href: '/cctv', iconSrc: 'images/icons/cctv.png' },
        { text: 'Виртуальный хостинг', href: '/servers', iconSrc: 'images/icons/server.png' },
        { text: 'Оборудование', href: '/fibrecabling', iconSrc: 'images/icons/internet.png' },

    ];

    return (
        <div>

            <div className="  py-16 mb-11 " style={coverStyle}>

                <div className="text-start  px-28 ">
                    <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos="fade-right">
                        Наши сервисы</h1>
                </div>
            </div>
            <div className='flex flex-wrap flex-col items-center justify-around mx-3 lg:mx-10   '>
                <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold mb-5 " data-aos="fade-right">
                    МЫ ПРЕДЛАГАЕМ</h1>
                <div className='h-1 bg-red-700 rounded w-16 '></div>
                <div className='  flex mt-10 lg:mt-24' data-aos="fade-up">
                    <div className=' flex mb-0 lg:mb-11 ' data-aos="fade-up">
                        {serviceItems.map((item, index) => (
                            <div className='w-1/3 lg:w-3/12' key={index}>
                                <NavLink to={item.href}>
                                    <div className=' h-52  mx-4'>
                                        <div className='flex justify-center '>
                                            <img src={item.iconSrc} className='h-11 lg:h-20 ' alt={item.text} />
                                        </div>
                                        <h2 className='text-base lg:text-lg mt-5'>{item.text}</h2>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>

                </div>

                <div className=' flex mb-0 lg:mb-11 ' data-aos="fade-up">
                    <div className=' flex mb-0 lg:mb-11 ' data-aos="fade-up">
                        {serviceItems1.map((item, index) => (
                            <div className='w-1/3 lg:w-3/9' key={index}>
                                <NavLink to={item.href}>
                                    <div className=' h-20  mx-12'>
                                        <div className='flex justify-center '>
                                            <img src={item.iconSrc} className='h-11 lg:h-20 ' alt={item.text} />
                                        </div>
                                        <h2 className='text-base lg:text-lg mt-5'>{item.text}</h2>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <ServicesCompnent />
            <Help />

        </div>
    )
}

export default Services