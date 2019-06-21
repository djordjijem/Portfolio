import React from 'react';
import './Aside.css';

function Aside() {
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
    <aside className='aside'>
      {/*******   img   *******/}
      <div className='columns'>
        <div className='column'>
          <figure className='image is-128x128 aside__img'>
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
          <ul className='aside__list'>
            {pages.map((page, i) => (
              <li key={i} className='aside__list-el'>
                <a>{page}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='columns aside__footer'>
        <div className='column'>
          <p>©djordjijem ©2019</p>
        </div>
      </div>
    </aside>
  );
}

export { Aside };
