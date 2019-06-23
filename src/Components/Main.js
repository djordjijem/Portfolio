import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { Hero } from './Hero';
import './main.css';
function Main() {
  function open() {
    return 12;
  }

  return (
    <main>
      <div className='main-wrapper'>
        <FaAlignJustify className='main__hamburger' onClick={open} />
        <section>
          <Hero />
        </section>
      </div>
    </main>
  );
}

export { Main };
