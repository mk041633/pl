import {React , useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Help from '../Help'


function FibreCabling({ coverStyle }) {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <div>
      <div className="py-20 lg:mb-11 " style={coverStyle}>
        <div className="text-start px-28 ">
          <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos = "fade-right">
            Оборудование</h1>
        </div>
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
        <h1 className="page-title text-blue-950 text-3xl my-9 font-bold" data-aos = "fade-right">

        Оборудование
        </h1>
      </div>
      <div className='flex justify-center text-center' >
        <img src='images/optic-fibre.jpg' alt='pabx-image' className='lg:h-96' />
      </div>
      <div className='flex flex-col items-center mx-11 lg:mx-32'>
       
        <div className='my-9' data-aos="fade-up">
          <h1 className="text-blue-950 text-3xl font-bold">Цены на оборудование</h1>
          <table className='w-full text-md bg-white shadow-md rounded mb-4'>
            <thead className='border-b'>
              <tr>
                <th className='text-left p-3 px-5'>Оборудование</th>
                <th className='text-left p-3 px-5'>Описание</th>
                <th className='text-left p-3 px-5'>Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Nano station M5 AC</td>
                <td className='p-3 px-5'>Новое поколение уличных точек доступа</td>
                <td className='p-3 px-5'>23,000 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Power beam M5</td>
                <td className='p-3 px-5'>Wi-Fi мост с усилением антенны 25 dBi</td>
                <td className='p-3 px-5'>12,900 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>MikroTik hex gr3</td>
                <td className='p-3 px-5'>Маршрутизатор на пять портов Gigabit Ethernet</td>
                <td className='p-3 px-5'>8,800 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>MikroTik SXT-R</td>
                <td className='p-3 px-5'>Небольшая точка доступа без радиомодуля Wi-Fi</td>
                <td className='p-3 px-5'>3,200 руб.</td>
              </tr>
              <tr className='border-b hover:bg-orange-100'>
                <td className='p-3 px-5'>Keenetic start</td>
                <td className='p-3 px-5'>Wi-Fi роутер</td>
                <td className='p-3 px-5'>3,900 руб.</td>
              </tr>
            </tbody>
          </table>
        </div>
          
      </div>
      <Help />

    </div>
  )
}

export default FibreCabling