export class footer {
  constructor() {}
  domElements = () => {
    this.footerLinks = document.querySelectorAll('.footer .footer__cover__list ul li');
  };
  init() {
    return {
      domElements: this.domElements(),
      animationIn: this.animationIn(),
      animationOut: this.animationOut(),
      navLinkHover: this.navLinkHover()
    };
  }

  // metods
  animationIn = () => {


    gsap.to(".footer .center-x", {
      scrollTrigger: {
        trigger: ".about-footer",
        toggleActions: "restart",
        start: 'top 20%',
        markers: false,
      },
      scale: 1,
      duration: .4, 
      ease: "none"
    });

    gsap.to(".footer .footer__cover__list li", {
      scrollTrigger: {
        trigger: ".about-footer",
        toggleActions: "restart",
        start: 'top 20%',
        markers: false,
      },
      opacity: 1,
      y: 0, 
      duration: .4, 
      stagger: 0.2,
      ease: "none"
    });

    if(document.querySelector('body[data-page="contact"]')) {
      gsap.fromTo('h2', {
        opacity: 0,
        y: -70
      }, {
        opacity: 1,
        y: 0
      })
      gsap.fromTo('span', {
        opacity: 0,
        y: -70
      }, {
        delay: 0.3,
        opacity: 1,
        y: 0
      })
      gsap.fromTo(
        ".navigation",
        { y: -40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0, delay: 1 }
      );
    }


  }

  animationOut = () => {
    gsap.to(".footer .footer__cover__list li", {
      scrollTrigger: {
        trigger: ".about-footer",
        toggleActions: "play complete reverse reset",
        start: 'top 100%',
        markers: false,
      },
      opacity: 0,
      y: 20, 
      duration: .01, 
      ease: "none"
    });

    gsap.to(".footer .center-x", {
      scrollTrigger: {
        trigger: ".about-footer",
        toggleActions: "play complete reverse reset",
        start: 'top 100%',
        markers: false,
      },
      scale: 0, 
      duration: .01, 
      ease: "none"
    });

  }

  navLinkHover = () => {
    // mouse in
    this.footerLinks.forEach(element => {
      element.addEventListener('mouseover', () => {
        for (let i = 0; i < this.footerLinks.length; i++) {
          this.footerLinks[i].classList.add('is-blurred');
        }
        element.classList.remove('is-blurred');
      });
    });
    // mouse leave
    this.footerLinks.forEach(element => {
      element.addEventListener('mouseout', () => {
        for (let i = 0; i < this.footerLinks.length; i++) {
          this.footerLinks[i].classList.remove('is-blurred');
        }
      })
    });
  }

  
}
