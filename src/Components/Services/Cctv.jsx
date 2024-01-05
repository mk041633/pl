import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function Cctv({ coverStyle }) {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos="fade-right">
            Видеонаблюдение</h1>
        </div>
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-blue-950 text-3xl my-9 font-bold" data-aos="fade-right">

        Установка видеонаблюдения
        </h1>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/cctv-image.jpeg' alt='cctv-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
      <div className='my-9' data-aos="fade-up">
          <h1 className="text-blue-950 text-3xl font-bold">Тарифы на видеонаблюдение</h1>
          <table className='w-full text-md bg-white shadow-md rounded mb-4'>
            <thead className='border-b'>
              <tr>
                <th className='text-left p-3 px-5'>Тариф</th>
                <th className='text-left p-3 px-5'>Камеры</th>
                <th className='text-left p-3 px-5'>Запись</th>
                <th className='text-left p-3 px-5'>Дополнительные услуги</th>
                <th className='text-left p-3 px-5'>Цена в месяц</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Базовый</td>
                <td className='p-3 px-5'>2 камеры</td>
                <td className='p-3 px-5'>24/7 запись</td>
                <td className='p-3 px-5'>Нет</td>
                <td className='p-3 px-5'>1500 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Оптимальный</td>
                <td className='p-3 px-5'>4 камеры</td>
                <td className='p-3 px-5'>24/7 запись + облачное хранение</td>
                <td className='p-3 px-5'>Мобильное приложение</td>
                <td className='p-3 px-5'>3000 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Премиум</td>
                <td className='p-3 px-5'>Неограниченное число камер</td>
                <td className='p-3 px-5'>24/7 запись + облачное хранение + резервное копирование</td>
                <td className='p-3 px-5'>Мобильное приложение + техподдержка 24/7</td>
                <td className='p-3 px-5'>По запросу</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='h-1 bg-red-700 rounded w-36 '></div>
      </div>
      <Help />

    </div>
  )
}

export default Cctv
