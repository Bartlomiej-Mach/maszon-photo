export class ofert {
  constructor() {}
  domElements = () => {
    this.footerLinks = document.querySelectorAll(
      ".footer .footer__cover__list ul li"
    );
    this.homeH1 = document.querySelectorAll(".home h1 span");
    this.slides = document.querySelectorAll(".home__bg-slider--slide");
    this.slideName = document.querySelectorAll(
      'body[data-page="ofert"] .home__cover--name-container .name'
    );
    this.linkButtons = document.querySelectorAll(
      'body[data-page="ofert"] .link-container a'
    );
  };
  init() {
    return {
      domElements: this.domElements(),
      animationIn: this.animationIn(this.homeH1),
      liquidSlider: this.liquidSlider(this.homeH1),
    };
  }

  // metods
  animationIn = (listOfElements) => {
    // first step
    listOfElements.forEach((element) => {
      gsap.to(element, { y: 0, opacity: 1, delay: 0.5 });
      gsap.to(element, { y: 0, opacity: 0, delay: 2 });
      gsap.to(element, { position: "absolute", delay: 2.5 });
      gsap.to(element, { opacity: 1, delay: 2.8 });
    });
    gsap.to(listOfElements[2], {
      opacity: 1,
      delay: 3.2,
      duration: 0.01,
      x: "-50%",
    });

    // second step
    setTimeout(() => {
      gsap.from(listOfElements[0], { x: -25, y: -25 });
      gsap.from(listOfElements[1], { x: 25, y: -25 });
      gsap.fromTo(listOfElements[2], { x: "-50%", y: 25 }, { x: "-50%", y: 0 });
      gsap.from(listOfElements[3], { x: 25, y: 25 });

      gsap.fromTo(
        ".navigation",
        { y: -40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );

      gsap.to(this.slideName[0].querySelectorAll("span"), {
        y: 0,
        stagger: 0.1,
        duration: 0.2,
      });
    }, 2700);
  };

  liquidSlider = (listOfElements) => {
    let currentSlideIndex = 0;
    let isAnimating = false;
    let currentTopValue = 0;

    this.slides.forEach((slide, idx) => {
      if (idx !== 0) {
        const img = slide.querySelector("img");
        gsap.set(img, { scale: 2, top: "4em" });
      }
    });
    const showSlide = (index) => {
      if (isAnimating) return;
      isAnimating = true;
      const slide = this.slides[index];
      const img = slide.querySelector("img");
      currentTopValue -= 30;

      // animation text
      

      gsap.to(this.slideName[currentSlideIndex].querySelectorAll("span"), {
        // opacity: 0,
        y: "-100%",
        stagger: 0.1,
        duration: 0.3,
      });
      gsap.to(this.slideName[currentSlideIndex + 1].querySelectorAll("span"), {
        // opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.3,
      });


      // main letters animation
      gsap.to(listOfElements[0], { x: -25, y: -25, ease: 'power3.inOut' });
      gsap.to(listOfElements[1], { x: 25, y: -25, ease: 'power3.inOut' });
      gsap.fromTo(listOfElements[2], { x: "-50%", y: 0, ease: 'power3.inOut'}, { x: "-50%", y: 25, ease: 'power3.inOut' });
      gsap.to(listOfElements[3], { x: 25, y: 25, ease: 'power3.inOut' });

      gsap.to(listOfElements[0], { x: 0, y: 0, ease: 'power3.inOut', delay: 1.2});
      gsap.to(listOfElements[1], { x: 0, y: 0, ease: 'power3.inOut', delay: 1.2});
      gsap.fromTo(listOfElements[2], { x: "-50%", y: 25 }, { x: "-50%", y: 0, ease: 'power3.inOut', delay: 1.2});
      gsap.to(listOfElements[3], { x: 0, y: 0, ease: 'power3.inOut', delay: 1.2});

      // animation buttons 
      gsap.to(this.linkButtons, {scale: 0.8});
      gsap.to(this.linkButtons, {scale: 1, delay: 1});


      // animation img

      gsap.to(img, {
        scale: 1,
        top: "0%",
        duration: 2,
        ease: "power3.inOut",
      });

      gsap.to(
        slide,
        {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          duration: 2,
          ease: "power4.inOut",
          onComplete: () => {
            isAnimating = false;
          },
        },
        "<"
      );
    };

    const hideSlide = (index) => {
      if (isAnimating) return;
      isAnimating = true;
      const slide = this.slides[index];
      const img = slide.querySelector("img");

      currentTopValue += 30;

      // animation text

      gsap.to(this.slideName[currentSlideIndex].querySelectorAll("span"), {
        // opacity: 0,
        y: "100%",
        stagger: 0.1,
        duration: 0.3,
      });
      gsap.to(this.slideName[currentSlideIndex - 1].querySelectorAll("span"), {
        // opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.3,
      });

      // animation buttons 
      gsap.to(this.linkButtons, {scale: 0.8});
      gsap.to(this.linkButtons, {scale: 1, delay: 1});

      // main letters animation
      gsap.to(listOfElements[0], { x: 25, y: 25, ease: 'power3.inOut' });
      gsap.to(listOfElements[1], { x: -25, y: 25, ease: 'power3.inOut' });
      gsap.fromTo(listOfElements[2], { x: "-50%", y: 0, ease: 'power3.inOut'}, { x: "-50%", y: -25, ease: 'power3.inOut' });
      gsap.to(listOfElements[3], { x: -25, y: -25, ease: 'power3.inOut' });

      gsap.to(listOfElements[0], { x: 0, y: 0, ease: 'power3.inOut', delay: 1.2});
      gsap.to(listOfElements[1], { x: 0, y: 0, ease: 'power3.inOut', delay: 1.2});
      gsap.fromTo(listOfElements[2], { x: "-50%", y: -25 }, { x: "-50%", y: 0, ease: 'power3.inOut', delay: 1.2});
      gsap.to(listOfElements[3], { x: 0, y: 0, ease: 'power3.inOut', delay: 1.2});

      gsap.to(slide, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 2,
        ease: "power4.inOut",
      });
      gsap.to(img, {
        scale: 2,
        top: "4em",
        duration: 2,
        ease: "power3.inOut",
      });
      gsap.to(
        slide,
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          duration: 2,
          ease: "power4.inOut",
          onComplete: () => {
            isAnimating = false;
          },
        },
        "<"
      );
    };

    window.addEventListener("wheel", (e) => {
      if (isAnimating) return;
      if (e.deltaY > 0 && currentSlideIndex < this.slides.length - 1) {
        showSlide(currentSlideIndex + 1);

        // gsap.to(this.slideName[currentSlideIndex], {
        //   opacity: 0,
        // });
        // gsap.to(this.slideName[currentSlideIndex + 1], {
        //   opacity: 1,
        // });
        currentSlideIndex++;
      } else if (e.deltaY < 0 && currentSlideIndex > 0) {
        hideSlide(currentSlideIndex);
        // gsap.to(this.slideName[currentSlideIndex], {
        //   opacity: 0,
        // });
        // gsap.to(this.slideName[currentSlideIndex - 1], {
        //   opacity: 1,
        // });
        currentSlideIndex--;
      }
    });
  };


}
