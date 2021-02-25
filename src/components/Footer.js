import React from 'react'
import '../index.css';
export const Footer = () => {
    return (
        <div>
         <footer className="footer">
      <ul className="list-inline text-center py-2">
        <li className="list-inline-item">
        <i class="fa fa-facebook-square" id="icon"></i>
        </li>
        <li className="list-inline-item">
        <i class="fa fa-linkedin-square" id="icon"></i>
        </li>
        <li className="list-inline-item">
        <i class="fa fa-twitter-square" id="icon"></i>
        </li>
      </ul>
      <div className="text-white text-center pb-4">
        <p className="h2">Guevara Marius Irabizi</p>
        <small className="small">&copy;2021</small>
      </div>
      
    </footer>
        </div>
    )
}
