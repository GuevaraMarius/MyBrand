import React, { useEffect } from 'react';
import './blog.css';
import { Navigation } from '../NavBar';
import { Footer } from '../Footer';
import atlp from '../images/59687331.png';
import image from '../images/download.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAction } from '../../redux/actions/postsAction';
export const Blog = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getPostReducer);
  console.log(state);
  useEffect(() => {
    dispatch(getPostAction());
  }, []);
  return (<>
    {
    !state.success && <h1 className='load' >Loading...</h1>
  }
  
  {
    state.success &&
      state.success.map((article) => (
        <div>
          <div className='container'>
            <article>
              <header>
                <h2>{article.title} </h2>
              </header>
              <aside>
                <img className='blog-logo' src={atlp} alt='atlp' />
              </aside>

              <p>{article.description}</p>
              <footer>
                Posted February 24th 2021
                <div className='tags clearfix'>
                  <div className='tag'>
                    <a href='#'>Tips</a>
                  </div>
                </div>
              </footer>
            </article>
          </div>
        </div>
      ))
  }
  <div>
    <div>
      <Navigation />
    </div>

    <div>
      <Footer />{' '}
    </div>
  </div>;
  </>)
  



  
};
