function locoScrollInit() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

  return locoScroll;
}

function clickToScroll(locoScroll, targetElementId) {
  const targetElement = document.querySelector(targetElementId);
  if (targetElement && locoScroll) {
    locoScroll.scrollTo(targetElement);
  }
}

function OpenCloseButton() {
  // Your OpenCloseButton function code here
  var menu = document.querySelector("#hamburger");
    var full = document.querySelector(".full-nav");
    var line1 = document.querySelector("#hamburgerLine1");
    var line2 = document.querySelector("#hamburgerLine2");
  
    var clickCounter = 1;
  
    menu.addEventListener("click", function () {
      if (clickCounter === 1) {
  
        full.style.transform = `translateX(0%)`;
  
        line1.style.transform = `translateY(.5vmax) rotate(45deg)`;
        line2.style.transform = `translateY(-.5vmax) rotate(-45deg) `;
  
  
        clickCounter = 0;
      } else {
        full.style.transform = `translateX(100%)`;
  
  
        line1.style.transform = `initial`;
        line2.style.transform = `initial`;
        
  
        clickCounter = 1;
      }
  
    })
  
}

function CursonAnimation() {

  let section = document.querySelector("#main");
  section.addEventListener("mousemove", function (e) {

    var elem = document.createElement('div');
    elem.setAttribute("class", "trail")

    elem.setAttribute("style", `left: ${e.clientX - 10}px; top:${e.clientY - 10}px;`);

    elem.onanimationend = () => {


      elem.remove();
    }

    document.body.insertAdjacentElement('beforeend', elem);
  })
}

function workAnimationCode() {
  gsap.to(' .card', {

    scrollTrigger: {
      trigger: "#recent-projects",
      scroller: "#main",
      start: "bottom bottom",
      end: "+=400%",
      scrub: true,
      pin: true,
      // markers:true,
      pinSpacing: true,


    },

    top: '-100%',
    stagger: .07,

  })

}

function footerAnimation() {
  gsap.to(' .rounded-div', {

    scrollTrigger: {
      trigger: "footer",
      scroller: "#main",
      start: "top 80%",
      end: "20%",
      scrub: true,
      // markers:true,


    },

    height: '0vh',
  })
  gsap.to(' .contact-ball', {

    scrollTrigger: {
      trigger: "footer",
      scroller: "#main",
      start: "top 80%",
      end: "20%",
      scrub: true,
      // markers:true,


    },
    left: '80%',
  })
}

function init() {
  const mainScroll = locoScrollInit();
  const work = document.querySelector('#work');
  const about = document.querySelector('#about');
  const contact = document.querySelector('#contact');

  work.addEventListener('click', function () {
    clickToScroll(mainScroll, '#recent-projects');
  });

  about.addEventListener('click', function () {
    clickToScroll(mainScroll, '#about-page');
  });

  contact.addEventListener('click', function () {
    clickToScroll(mainScroll, 'footer');
  });

  OpenCloseButton();
  CursonAnimation();
  workAnimationCode();
  footerAnimation();
}

init();