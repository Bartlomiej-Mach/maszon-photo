
// let zmienne = [];
// const parametry = unescape(window.location.href).split("?");
// if (parametry.length>1) { zmienne=parametry[1].split("&"); }

// console.log(zmienne);

// for (i=0;i<zmienne.length;i++) {
//   zm=zmienne[i].split("=");
//   console.log(zm[1]);
// }



// // ///////////


gsap.registerPlugin(ScrollTrigger);

import { nav } from './nav/nav.js';
import { home } from './home/home.js';
import { about } from './about/about.js';
import { footer } from './footer/footer.js';
 

const navObj = new nav();
const homeObj = new home();
const aboutObj = new about();
const footerObj = new footer();

navObj.init();
if(document.querySelector('body[data-page="index"]')) {
  homeObj.init();
}
if(document.querySelector('body[data-page="about"]')) {
  aboutObj.init();
}
if(document.querySelector('.footer')) {
  footerObj.init();
}

