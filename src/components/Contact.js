import React from 'react'
import {Footer} from './Footer'
import {Navigation} from './NavBar'
import './styles/contact.css'
import contactImage from './images/undraw_contact_us_15o2.svg'

export const Contact = () => {
    return (
        <div>
     <div>  <Navigation/></div>
       <div class="container">
<div class="wrapper">
    <div class="user-info">
        <h3>Guevara Marius Irabizi</h3>
        <ul>
            <li><img src={contactImage} alt="contact"/> </li>
            <li><i class="fa fa-road"></i> Rwanda Byumba</li>
            <li><i class="fa fa-phone"></i> +250785896337</li>
            <li><i class="fa fa-google"></i> irabizimguevara</li>
        </ul>
    </div>
    <div class="contact">
        <h3>Send Email</h3>

        <form id="contact-form">

            <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required/>
            </p>

            <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required/>
            </p>

            <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone"/>
            </p>

            <p class="full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
            </p>

            <p class="full">
                <button type="submit">Send</button>
            </p>

        </form>
    
    </div>
   

</div>

</div>

            <div> <Footer/></div>
        </div>
    )
}
