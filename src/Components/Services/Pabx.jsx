import {React , useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function Pabx({coverStyle}) {
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos = "fade-right">
           Мобильная связь</h1>
        </div>
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-blue-950 text-2xl md:text-3xl  lg:text-4xl my-9 font-bold" data-aos = "fade-right">

          Зона покрытия
        </h1>
        
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/Screenshot_5.png' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <div className='my-9' data-aos="fade-up">
          <h1 className="text-blue-950 text-2xl md:text-3xl lg:text-4xl font-bold">Тарифы мобильной связи</h1>
          <table className='w-full text-md bg-white shadow-md rounded mb-4'>
            <thead className='border-b'>
              <tr>
                <th className='text-left p-3 px-5'>Тариф</th>
                <th className='text-left p-3 px-5'>Минуты</th>
                <th className='text-left p-3 px-5'>Интернет</th>
                <th className='text-left p-3 px-5'>Цена в месяц</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Эконом</td>
                <td className='p-3 px-5'>300 минут</td>
                <td className='p-3 px-5'>5Гб</td>
                <td className='p-3 px-5'>300 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Стандарт</td>
                <td className='p-3 px-5'>500 минут</td>
                <td className='p-3 px-5'>15Гб</td>
                <td className='p-3 px-5'>500 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Премиум</td>
                <td className='p-3 px-5'>Безлимит</td>
                <td className='p-3 px-5'>30Гб</td>
                <td className='p-3 px-5'>1000 руб.</td>
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

export default Pabx