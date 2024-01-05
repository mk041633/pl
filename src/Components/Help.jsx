import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Help() {


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className='my-4  mx-11 sm:my-12  sm:mx-11  sm:px-11'>
        <h1 className='text-xl sm:text-3xl font-bold' data-aos='fade-right'>
          Нужна помощь?
        </h1>

        <p className='font-light px-11 text-base sm:text-lg my-3 sm:my-7' data-aos='fade-up'>
        Свяжитесь с нашей службой поддержки клиентов, которая всегда готова помочь вам с любыми возможными вопросами, проблемами или информацией
        </p>
        <p className='text-red-700 text-base sm:text-xl' data-aos='fade-left'>
          primetel@telecom.com
        </p>
      </div>
    </div>
  );
}

export default Help;
