// Page up

const btnUp = {
  el: document.querySelector(".btn-up"),
  show() {
   
    this.el.classList.remove("btn-up_hide");
  },
  hide() {
    
    this.el.classList.add("btn-up_hide");
  },
  addEventListener() {
  
    window.addEventListener("scroll", () => {
      
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      
      scrollY > 400 ? this.show() : this.hide();
    });
    
    document.querySelector(".btn-up").onclick = () => {
   
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};
btnUp.addEventListener();




// Hamburger

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".submenu__list"),
    menuItem = document.querySelectorAll(".subtext"),
    hamburger = document.querySelector(".submenu__menu-btn");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("submenu__menu-btn-active");
    menu.classList.toggle("submenu__list-active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("submenu__menu-btn-active");
      menu.classList.toggle("submenu__list-active");
    })
  })
})

// Hamburger-mobile

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".mobile__inner"),    
    hamburger = document.querySelector(".mobile__burger-btn");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("mobile__burger-btn-active");
    menu.classList.toggle("mobile__inner-active");
  });
  
  })
