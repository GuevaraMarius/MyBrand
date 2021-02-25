import React from 'react'
import './blog.css'
import {Navigation} from '../NavBar'
import {Footer} from '../Footer'
import atlp from '../images/59687331.png'
import image from '../images/download.jpeg'
export const Blog = () => {
    return (
        <div>
            <div><Navigation/></div>
            <div>
            <div class='container'>
        <article>
          <header>
            <h2>Journey to ATLP </h2>
          </header>
          <aside>
            <img className='blog-logo' src={atlp} alt="atlp"/>
          </aside>

          <p>
          Hello! My Name is Guevara Marius Irabizi. I'm currently taking back-end, front-end development, and professional skills classes with Andela Technical Leadership Program (ATLP).

Why I joined ATLP

Two years ago, I was attending Alight-ICT-Coding school learning front-end and back-end basics. One day I realized that my skills in coding were not enough to be a software engineer.

The idea of searching where I can learn to be a professional started. Luckily, I found ATLP. I read about the program which is interesting and supportive then I made an application.

What I have learned so far and hope to gain from the program

It was a dream come true being admitted into the program. After failing three times I did not give up, I kept studying and making research. These first two months I am excited about learning and working with a team but also learning the professional skills which have the strongest role for being a software engineer.

In the program, we learn and work remotely. I have been able to learn new world-class technology like NodeJS, Firebase, MongoDB, HTML&CSS, JavaScript for making personal blog, Git for tracking changes in codes, GitHub for hosting, Trello for organizing the project, Mocha and Chai for testing the project.<br/>
<img className="blog-image" src={image} alt="atlp"/><br/>
Team working or learning is the best way to grow your skills where you are working with others and trained by experts from Andela. Through the professional skills I am learning career competencies that include communication, team working and the others will occur.

Where I see myself 6-12 months after the program

Once my training is complete, I would love to start my new career as a software engineer. Of course, this will come after I complete all of my coursework including classes on professional and technical skills.

In conclusion, this is a pleasure to be trained by experts from Andela where you meet technologists to learn and work with them to help you grow your skills level but also, nothing can stop your dream through hard work and Praying.

          </p>
          <footer>
            Posted February 24th 2021
            <div class='tags clearfix'>
              <div class='tag'>
                <a href='#'>Tips</a>
              </div>
            </div>
          </footer>
        </article>
      </div>
                </div>
            <div><Footer/> </div>
            </div>

    )
}
