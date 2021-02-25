import React from 'react';
import './styles/article.css'
import developer from './images/undraw_developer_activity_bv83.svg'

export const Article = () => {
  return (
    <div>
      <div class='container'>
        <article>
          <header>
            <h2>About Me</h2>
          </header>
          <aside>
            <img src={developer} alt="developer"/>
          </aside>

          <p>
          Hello, my name is Guevara Marius Irabizi, I'm a software engineer and technology enthusiast welcome to my blog.
          <br/>
           I will be sharing different techniques, tips, and design used in software development.

          </p>
          <p>
            Profile: Full stack Software engineer
          </p>
          
          <p> Languages : <br/>
          HTML&CSS<br/>
          Javascript(Nodejs)<br/>
          PHP
          </p>
          <p> Libraries and Framework <br/>
          Express<br/>
          React<br/>
          Angular
          </p>
          <footer>
            Posted February 21st 2021
            <div class='tags clearfix'>
              <div class='tag'>
                <a href='#'>Techniques</a>
              </div>
              <div class='tag'>
                <a href='#'>Design</a>
              </div>
              <div class='tag'>
                <a href='#'>Tips</a>
              </div>
              <div class='tag'>
                <a href='#'>Coding</a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};
