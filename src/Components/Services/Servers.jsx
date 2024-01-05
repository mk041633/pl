import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function Servers({ coverStyle }) {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })

  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos="fade-right">
          Виртуальный хостинг </h1>
        </div>
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
      <h1 className="page-title text-blue-950 text-3xl my-9 font-bold" data-aos="fade-right">

      Виртуальный хостинг
      </h1>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/server.jpg' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
      <div className='my-9' data-aos="fade-up">
          <h1 className="text-blue-950 text-3xl font-bold">Тарифы на виртуальный хостинг</h1>
          <table className='w-full text-md bg-white shadow-md rounded mb-4'>
            <thead className='border-b'>
              <tr>
                <th className='text-left p-3 px-5'>Тариф</th>
                <th className='text-left p-3 px-5'>Диск</th>
                <th className='text-left p-3 px-5'>Трафик</th>
                <th className='text-left p-3 px-5'>Сайты</th>
                <th className='text-left p-3 px-5'>Цена в месяц</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Стартовый</td>
                <td className='p-3 px-5'>10 ГБ</td>
                <td className='p-3 px-5'>Неограничен</td>
                <td className='p-3 px-5'>1</td>
                <td className='p-3 px-5'>100 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Бизнес</td>
                <td className='p-3 px-5'>30 ГБ</td>
                <td className='p-3 px-5'>Неограничен</td>
                <td className='p-3 px-5'>5</td>
                <td className='p-3 px-5'>300 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Премиум</td>
                <td className='p-3 px-5'>50 ГБ</td>
                <td className='p-3 px-5'>Неограничен</td>
                <td className='p-3 px-5'>Без ограничений</td>
                <td className='p-3 px-5'>500 руб.</td>
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

export default Servers