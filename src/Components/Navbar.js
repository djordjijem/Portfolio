import React from 'react';
import './Navbar.css';

function Navbar() {
  const pages = [
    'Home',
    'About',
    'Skills',
    'Education',
    'Experience',
    'Work',
    'Blog',
    'Contact'
  ];

  return (
    <nav className='column is-one-fifth navbar'>
      {/*******   img   *******/}
      <div className='columns'>
        <div className='column'>
          <figure className='image is-128x128'>
            <img
              className='is-rounded'
              src='https://bulma.io/images/placeholders/128x128.png'
            />
          </figure>
        </div>
      </div>
      {/*******   img   *******/}
      <div className='columns'>
        <div className='column'>
          <h4 className='title is-4'>George Matic</h4>
        </div>
      </div>
      <div className='columns'>
        <div className='column content'>
          <h4 className='title is-6'>Javascript Dev</h4>
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          <ul className='navbar__list'>
            {pages.map((page, i) => (
              <li key={i} className='navbar__list-el'>
                <a>{page}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          <p>©djordjijem ©2019</p>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
