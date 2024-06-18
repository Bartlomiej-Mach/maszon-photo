gsap.registerPlugin(ScrollTrigger);

import { nav } from './nav/nav.js';
import { home } from './home/home.js';
import { about } from './about/about.js';
import { footer } from './footer/footer.js';
import { scroll } from './scroll/scrol.js';
import { ofert } from './ofert/ofert.js';
import { portfolio } from './portfolio/portfolio.js';
 

const navObj = new nav();
const homeObj = new home();
const aboutObj = new about();
const footerObj = new footer();
const scrollObj = new scroll();
const ofertObj = new ofert();
const portfolioObj = new portfolio();

navObj.init();
scrollObj.init();
if(document.querySelector('body[data-page="index"]')) {
  homeObj.init();
}
if(document.querySelector('body[data-page="about"]')) {
  aboutObj.init();
}
if(document.querySelector('.footer')) {
  footerObj.init();
}
if(document.querySelector('body[data-page="ofert"]')) {
  ofertObj.init();
}
if(document.querySelector('body[data-page="portfolio"]')) {
  portfolioObj.init();
}


