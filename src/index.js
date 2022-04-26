import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import MobSecondMenu from "./components/MobSecondMenu";
import About from "./components/About";

function App(){

  function activeMenu(){  
      let li = document.querySelectorAll(".li");
      let sec = document.querySelectorAll("section");

      let len = sec.length;
      while(--len && window.scrollY + 100 < sec[len].offsetTop){}
      li.forEach(ltx => ltx.classList.remove("active"));
      li[len].classList.add("active");

      li = document.querySelectorAll(".s-li");

      let sLen = sec.length;
      while(--sLen && window.scrollY + 100 < sec[sLen].offsetTop){}
      li.forEach(ltx => ltx.classList.remove("active"));
      li[sLen].classList.add("active");
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
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('body'));
