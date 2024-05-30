export class nav {
  constructor() {}
  domElements = () => {
    this.body = document.querySelector("body");
    this.navLinks = document.querySelectorAll(
      ".navigation .navigation__list--item"
    );
    this.footerLinks = document.querySelectorAll(
      ".footer .nav-links .footer__cover__list--link"
    );
    this.menuBtnOpen = document.querySelector("button .nav-menu__open");
    this.menuBtnClose = document.querySelector("button .nav-menu__close");
    this.naviContainer = document.querySelector(".navigation");

    this.links = {
      index: "./index.html",
      about: "./o-mnie.html",
      ofert: "./oferta.html",
      contact: "./kontakt.html",
    };
  };
  init() {
    return {
      domElements: this.domElements(),
      navLinkChecker: this.navLinkChecker(),
      navLinkHover: this.navLinkHover(),
      mobileNav: this.mobileNav(),
      resizeReset: this.resizeReset(),
      navHrefInit: this.navHrefInit(),
    };
  }

  // metods
  navLinkChecker = () => {
    for (let i = 0; i < this.navLinks.length; i++) {
      if (
        this.body.getAttribute("data-page") ===
        this.navLinks[i].getAttribute("data-page")
      ) {
        this.navLinks[i].classList.add("nav-link-active");
        this.footerLinks[i]?.classList.add("nav-link-active");
      }
    }
  };

  navHrefInit = () => {
    for (let i = 0; i < this.navLinks.length; i++) {
      if (this.navLinks[i].getAttribute("data-page") == "index") {
        this.navLinks[i].querySelector("a").href = this.links.index;
        this.footerLinks[i]?.querySelector("a").setAttribute("href", this.links.index);
      } else if (this.navLinks[i].getAttribute("data-page") == "about") {
        this.navLinks[i].querySelector("a").href = this.links.about;
        this.footerLinks[i]?.querySelector("a").setAttribute("href", this.links.about);
      } else if (this.navLinks[i].getAttribute("data-page") == "ofert") {
        this.navLinks[i].querySelector("a").href = this.links.ofert;
        this.footerLinks[i]?.querySelector("a").setAttribute("href", this.links.ofert);
      } else if (this.navLinks[i].getAttribute("data-page") == "contact") {
        this.navLinks[i].querySelector("a").href = this.links.contact;
        this.footerLinks[i]?.querySelector("a").setAttribute("href", this.links.contact);
      }
    }
  };

  navLinkHover = () => {
    let innerWidth = window.innerWidth;
    if(innerWidth > 750) {
          // mouse in
      this.navLinks.forEach((element) => {
        element.addEventListener("mouseover", () => {
          for (let i = 0; i < this.navLinks.length; i++) {
            this.navLinks[i].classList.add("is-blurred");
          }
          element.classList.remove("is-blurred");
        });
      });
      // mouse leave
      this.navLinks.forEach((element) => {
        element.addEventListener("mouseout", () => {
          for (let i = 0; i < this.navLinks.length; i++) {
            this.navLinks[i].classList.remove("is-blurred");
          }
        });
      });
    } else {
      this.navLinks.forEach((element) => {
        element.removeEventListener('mouseout', {});
        element.removeEventListener('mouseover', {});
      })
    }
  };

  mobileNav = () => {
    this.menuBtnOpen.addEventListener("click", () => {
      this.naviContainer.classList.add("nav-menu-active");
    });
    this.menuBtnClose.addEventListener("click", () => {
      this.naviContainer.classList.remove("nav-menu-active");
    });
  };

  resizeReset = () => {
    window.addEventListener("resize", () => {
      let innerWidth = window.innerWidth;
      if (innerWidth > 750) {
        this.naviContainer.classList.remove("nav-menu-active");
      }
    });
  };
}
