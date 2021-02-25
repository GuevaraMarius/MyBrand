import React from 'react'
import {Navigation} from './NavBar'
import {Footer} from './Footer'
import {Article} from './Article'

export const LandingPage = () => {
    return (
        <div>
        <div><Navigation/></div>
       <div> <Article/></div>
        <Footer/>
        </div>
    )
}
