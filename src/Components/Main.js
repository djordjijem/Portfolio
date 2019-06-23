import React, { useState, useEffect } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
<<<<<<< HEAD
import { Hero } from './Hero';
import './main.css';
=======
import './Main.css';

>>>>>>> a96475e93385a557f70afb3e9e763f0c8f914adc
function Main() {
  const [open, setOpen] = useState(false);

  function openAside() {
    const aside = document.querySelector('.aside');
    aside.style.display = 'block';
  }

  return (
    <main>
      <div className='main-wrapper'>
<<<<<<< HEAD
        <FaAlignJustify className='main__hamburger' onClick={open} />
        <section>
          <Hero />
        </section>
=======
        <FaAlignJustify className='main__hamburger' onClick={openAside} />
        <div className='columns'>
          <div className='column'>
            <section className='hero'>
              <h1 className='hero_title'>
                Hi, <br /> i'm George!
              </h1>
            </section>
            <article className='article about'>
              <h1 className='title'>About</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ex, reiciendis deserunt quae rerum aliquid aut culpa
              ad nemo earum accusantium expedita sequi assumenda! In cupiditate
              iste necessitatibus voluptatibus sit?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda sequi dolorum nam iusto
              architecto amet suscipit esse itaque est ea minus molestias,
              temporibus alias? Tempora ab eum provident obcaecati atque.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              dicta esse laborum repellat atque veritatis tempore ipsa quos
              dolores incidunt culpa ab repellendus tenetur ipsum quas ullam
              eveniet quibusdam labore!
            </article>
            <article className='article about'>
              <h1 className='title'>Skills</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ex, reiciendis deserunt quae rerum aliquid aut culpa
              ad nemo earum accusantium expedita sequi assumenda! In cupiditate
              iste necessitatibus voluptatibus sit?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda sequi dolorum nam iusto
              architecto amet suscipit esse itaque est ea minus molestias,
              temporibus alias? Tempora ab eum provident obcaecati atque.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              dicta esse laborum repellat atque veritatis tempore ipsa quos
              dolores incidunt culpa ab repellendus tenetur ipsum quas ullam
              eveniet quibusdam labore!
            </article>
            <article className='article about'>
              <h1 className='title'>Education</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ex, reiciendis deserunt quae rerum aliquid aut culpa
              ad nemo earum accusantium expedita sequi assumenda! In cupiditate
              iste necessitatibus voluptatibus sit?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda sequi dolorum nam iusto
              architecto amet suscipit esse itaque est ea minus molestias,
              temporibus alias? Tempora ab eum provident obcaecati atque.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              dicta esse laborum repellat atque veritatis tempore ipsa quos
              dolores incidunt culpa ab repellendus tenetur ipsum quas ullam
              eveniet quibusdam labore!
            </article>
            <article className='article about'>
              <h1 className='title'>Experience</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ex, reiciendis deserunt quae rerum aliquid aut culpa
              ad nemo earum accusantium expedita sequi assumenda! In cupiditate
              iste necessitatibus voluptatibus sit?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda sequi dolorum nam iusto
              architecto amet suscipit esse itaque est ea minus molestias,
              temporibus alias? Tempora ab eum provident obcaecati atque.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              dicta esse laborum repellat atque veritatis tempore ipsa quos
              dolores incidunt culpa ab repellendus tenetur ipsum quas ullam
              eveniet quibusdam labore!
            </article>
            <article className='article about'>
              <h1 className='title'>Work</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ex, reiciendis deserunt quae rerum aliquid aut culpa
              ad nemo earum accusantium expedita sequi assumenda! In cupiditate
              iste necessitatibus voluptatibus sit?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda sequi dolorum nam iusto
              architecto amet suscipit esse itaque est ea minus molestias,
              temporibus alias? Tempora ab eum provident obcaecati atque.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              dicta esse laborum repellat atque veritatis tempore ipsa quos
              dolores incidunt culpa ab repellendus tenetur ipsum quas ullam
              eveniet quibusdam labore!
            </article>
            <article className='article about'>
              <h1 className='title'>Blog</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ex, reiciendis deserunt quae rerum aliquid aut culpa
              ad nemo earum accusantium expedita sequi assumenda! In cupiditate
              iste necessitatibus voluptatibus sit?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Assumenda sequi dolorum nam iusto
              architecto amet suscipit esse itaque est ea minus molestias,
              temporibus alias? Tempora ab eum provident obcaecati atque.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              dicta esse laborum repellat atque veritatis tempore ipsa quos
              dolores incidunt culpa ab repellendus tenetur ipsum quas ullam
              eveniet quibusdam labore!
            </article>
          </div>
        </div>
>>>>>>> a96475e93385a557f70afb3e9e763f0c8f914adc
      </div>
    </main>
  );
}

export { Main };
