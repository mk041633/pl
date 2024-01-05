import React from 'react'
import Cover from './Cover'
import ServicesCompnent from './ServicesCompnent'
import Help from './Help'
import ReviewsComponent from './ReviewsComponent'
import Work from './Work'

function Home() {
    return (
        <div>

            <Cover />
            <Work/>
            <ServicesCompnent />           
            <Help />
            
        </div>
    )
}

export default Home