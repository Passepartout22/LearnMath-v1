window.onscroll = function(){


    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if (scroll < 20){
        header.classList.remove('nav_mod');
    }
    
}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

    menu = document.getElementById("header");
    body = document.getElementById("container__all");
    nav = document.getElementById("nav");

function mostrar_menu(){

    body.classList.toggle('move_content');
    menu.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}

window.addEventListener("resize", function(){

    if (window.innerWidth > 760)  {
        body.classList.remove('move_content');
        menu.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }

});

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
