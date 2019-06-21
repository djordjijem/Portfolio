import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import './main.css';
function Main() {
  function open() {
    return 12;
  }

  return (
    <main>
      <div className='main-wrapper'>
        <FaAlignJustify className='main__hamburger' onClick={open} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iusto
          dolore ducimus cumque quasi quo blanditiis ipsa odio maxime
          asperiores, laborum obcaecati animi tempora nesciunt? Sunt illo
          ratione quae alias!
        </p>
      </div>
    </main>
  );
}

export { Main };
