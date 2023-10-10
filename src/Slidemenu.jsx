import React, { useState, usestate }from 'react';
import './slidemenu.css';  

const Slide = () => {

const [isOpen, setIsOpen]= useState(false);

const toggleNav = () =>{
    setIsOpen(prevIsOpen => !prevIsOpen)  
}

  return (
    <>
      <nav className={isOpen ? 'nav open' : 'nav'}>
        <a href="#">
          <aside>01</aside>
          <article>
            <h3>Home</h3>
            <p className="desc">lorem ipsum dolor sit amet hurrdurr durrsurr</p>
          </article>
        </a>
        <a href="#">
          <aside>02</aside>
          <article>
            <h3>What we do</h3>
            <p className="desc">lorem ipsum dolor sit amet hurrdurr durrsurr</p>
          </article>
        </a>
        <a href="#">
          <aside>03</aside>
          <article>
            <h3>Who we are</h3>
            <p className="desc">lorem ipsum dolor sit amet hurrdurr durrsurr</p>
          </article>
        </a>
        <a href="#">
          <aside>04</aside>
          <article>
            <h3>Contact</h3>
            <p className="desc">lorem ipsum dolor sit amet hurrdurr durrsurr</p>
          </article>
        </a>
      </nav>
      <button className="toggler" onClick={toggleNav}> X</button>
      <h1>Hello there</h1>
      <h2>Toggle the red button in the upper left corner</h2>
    </>
  );
};

export default Slide;
