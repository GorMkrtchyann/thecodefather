import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import MobSecondMenu from "./components/MobSecondMenu";
import About from "./components/About";
import Content from "./components/Content";
import Contact from "./components/Contact";

function App(){

  function activeMenu(){  
      let li = document.querySelectorAll(".li");
      let sec = document.querySelectorAll("section");

      let len = sec.length;
      while(--len && window.scrollY + 500 < sec[len].offsetTop){}
      li.forEach(ltx => ltx.classList.remove("active"));
      li[len].classList.add("active");
  }

  window.addEventListener('scroll', () => {
    activeMenu()
  });

  return(
    <div  onLoad={activeMenu}>
      <Menu />
      <MobSecondMenu />
      <Header />
      <About />
      <hr />
      <Content />
      <hr />
      <Contact />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('body'));
