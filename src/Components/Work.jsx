import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Work() {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='bg-custom-image bg-no-repeat'>
     
      <div className=" pt-8 sm:pt-16 flex flex-col items-center">
        <h1 className="text-2xl text-blue-950 sm:text-3xl sm:px-11 mx-11 md:text-4xl font-bold my-4 sm:my-9">
        Как работает наша компания?
        </h1>
        <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <div className="flex flex-wrap my-6 sm:my-11 justify-center sm:justify-between px-4 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-28" >
        <div className="w-full  sm:w-1/2 md:w-3/12 shadow-xl shadow-blue-950/50 rounded-md my-4 sm:mx-2 bg-white" data-aos="fade-up">
          <div className="h-48 sm:h-52 mx-4 my-4">
            <div className="flex justify-center">
              <img src="images/icons/fast.png" className="h-16 sm:h-10 md:h-12" alt="Fast Service" />
            </div>
            <h2 className="text-base sm:text-lg md:text-base font-bold mt-3 sm:mt-5">БЫСТРЫЙ СЕРВИС</h2>
            <p className="text-slate-500 mt-3 sm:mt-4 sm:text-xs lg:text-base ">
            Наши услуги разработаны с учетом оптимальной скорости и эффективности. Мы уделяем приоритетное внимание быстрому реагированию
              </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-3/12 shadow-xl shadow-blue-950/50 rounded-md my-4 sm:mx-2 bg-white" data-aos="fade-up">
          <div className="h-48 sm:h-52 mx-4 my-4">
            <div className="flex justify-center">
              <img src="images/icons/tick-mark.png" className="h-16 sm:h-10 md:h-12" alt="Best Quality" />
            </div>
            <h2 className="text-base sm:text-lg md:text-base font-bold mt-3 sm:mt-5">ВЫСШЕЕ КАЧЕСТВО</h2>
            <p className="text-slate-500 mt-3 sm:mt-4 sm:text-xs lg:text-base">
            Начиная с продуктов, которые мы предлагаем, и заканчивая поддержкой, которую мы оказываем, качество является нашей отличительной чертой.
              </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-3/12 shadow-xl shadow-blue-950/50 rounded-md my-4 sm:mx-2 bg-white" data-aos="fade-up">
          <div className="h-48 sm:h-52 mx-4 my-4">
            <div className="flex justify-center">
              <img src="images/icons/rating.png" className="h-12 sm:h-10 md:h-6 my-4 sm:my-3" alt="Customer Satisfaction" />
            </div>
            <h2 className="text-base sm:text-lg md:text-base font-bold mt-1 sm:mt-4">УДОВЛЕТВОРЕННОСТЬ КЛИЕНТА</h2>
            <p className="text-slate-500 mt-3 sm:mt-2 sm:text-xs lg:text-base">
            С того момента, как вы пользуетесь нашими услугами, ваши потребности и предпочтения являются нашим главным приоритетом
              </p>
          </div>
        </div>
      </div>
      <div>
      
       
      </div>
    </div>
  );
}

export default Work;
