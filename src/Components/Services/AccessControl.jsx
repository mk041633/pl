import {React , useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function AccessControl({coverStyle}) {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos = "fade-right">
          ТВ, музыка и сериалы</h1>
        </div>
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-3xl my-9 font-bold text-blue-950" data-aos = "fade-right">

          ТВ, музыка и сериалы
        </h1>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/access-control.png' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
      <div className='my-9' data-aos="fade-up">
          <h1 className="text-blue-950 text-3xl font-bold">Тарифы: ТВ, музыка и сериалы</h1>
          <table className='w-full text-md bg-white shadow-md rounded mb-4'>
            <thead className='border-b'>
              <tr>
                <th className='text-left p-3 px-5'>Тариф</th>
                <th className='text-left p-3 px-5'>Каналы</th>
                <th className='text-left p-3 px-5'>Музыка</th>
                <th className='text-left p-3 px-5'>Сериалы</th>
                <th className='text-left p-3 px-5'>Цена в месяц</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Базовый</td>
                <td className='p-3 px-5'>50 каналов</td>
                <td className='p-3 px-5'>Стандартное качество</td>
                <td className='p-3 px-5'>10 сериалов</td>
                <td className='p-3 px-5'>300 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Оптимальный</td>
                <td className='p-3 px-5'>100 каналов</td>
                <td className='p-3 px-5'>Высокое качество</td>
                <td className='p-3 px-5'>Безлимит сериалов</td>
                <td className='p-3 px-5'>500 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Премиум</td>
                <td className='p-3 px-5'>Все каналы</td>
                <td className='p-3 px-5'>Высокое качество + эксклюзивы</td>
                <td className='p-3 px-5'>Безлимит сериалов + эксклюзивы</td>
                <td className='p-3 px-5'>800 руб.</td>
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

export default AccessControl