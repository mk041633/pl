import {React , useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import ServicesCompnent from './ServicesCompnent'
import Help from './Help'

function About({coverStyle}) {
    useEffect(()=>{
        AOS.init({duration: 2000})
    })
    return (
        <div >
            <div style={coverStyle}>

                <div className="text-start mt-90 px-28 py-20">
                    <h1 className=" text-blue-900 text-2xl md:text-3xl  lg:text-4xl font-bold " data-aos = "fade-right">
                        Про нас</h1>
                </div>
            </div>
            <Help/>
            <ServicesCompnent/>
            
        </div>
    )
}

export default About