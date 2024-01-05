import { React, useEffect } from 'react'
import { Button } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css'


function Cover() {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    const coverStyle = {
        backgroundImage: `url('images/bluecover-01.jpg')`,
        backgroundSize: '100% 115%',
        backgroundRepeat: 'no-repeat',
    };




    return (

        <div style={coverStyle}>
            <main class=" flex  mx-11 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-28  sm:py-5 text-blue-900">
                <div class="text-center md:text-left py-35 sm:px-11 sm:mt-6 lg:mt-16">
                    <div class=" font-semibold  text-blue-900   " data-aos="fade-down">
                        <h1 className=' sm:text-4xl  md:text-3xl lg:text-5xl xl:text-5xl'>

                            Добро пожаловать в <br /> PRIMETEL
                        </h1>

                    </div>
                    <div>
                        <p className="font-light  my-4 text-base sm:text-lg lg:text-xl xl:text-2xl xl:py-3 lg:py-3" data-aos="fade-right">
                        PRIMETEL - это профессиональная компания по предоставлению телекоммуникационных услуг. Здесь вы найдете проекты и все услуги, связанные с информационными технологиями.
                        </p>

                    </div>
                    <div className="block sm:hidden mb-9">
                        <a
                            href="https://api.whatsapp.com/send?phone=79253443882"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="bg-green-600 text-white rounded-md px-2 py-1 sm:px-5 sm:py-4 mx-4  my-2 sm:my-0 text-xs sm:text-base">
                                Подать заявку
                            </Button>

                        </a>
                    </div>
                    <div className="hidden sm:block">
                        <button
                            className="bg-blue-900 px-3 py-2 my-4 shadow-white rounded-md text-white hover:text-blue-900 hover:bg-white"
                        >
                           <a href='/services'>Узнать больше</a>
                        </button>
                    </div>
                </div>
                

            </main>
        </div>
    )
}

export default Cover