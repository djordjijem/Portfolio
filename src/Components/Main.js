import React, { useState, useEffect } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import './Main.css';

function Main() {
  const [open, setOpen] = useState(false);

  function openAside() {
    const aside = document.querySelector('.aside');
    aside.style.display = 'block';
  }

  return (
    <main>
      <div className='main-wrapper'>
        <FaAlignJustify className='main__hamburger' onClick={openAside} />
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
