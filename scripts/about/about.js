export class about {
  constructor() {}
  domElements = () => {
    this.homeH1 = document.querySelectorAll(".home h1 span");
    this.spans = document.querySelectorAll(".text-container span span");
    this.cardBoxes = document.querySelectorAll(
      ".content-two .content-two__cover--img-box .card-box img"
    );
    this.cardBoxContainer = document.querySelectorAll(
      ".content-two .content-two__cover--img-box .card-box"
    )
    this.videoContainer = document.querySelector('.video-container video');
  };
  init() {
    return {
      domElements: this.domElements(),
      animationIn: this.animationIn(this.homeH1),
      imgRandomizer: this.imgRandomizer(6, 1, 11),
      animationsOnScroll: this.animationsOnScroll(),
      // videoStart: this.videoStart(),
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
        ".text-container h2 span",
        { stagger: 0.2, opacity: 0 },
        { stagger: 0.2, opacity: 1 }
      );
      gsap.fromTo(
        this.spans,
        { stagger: 0.2, opacity: 0, y: 20 },
        { y: 0, stagger: 0.2, opacity: 1 }
      );

      gsap.fromTo(
        ".left-top",
        { x: -40, y: -40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );
      gsap.fromTo(
        ".right-top",
        { x: 40, y: -40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );
      gsap.fromTo(
        ".right-bottom",
        { x: 40, y: 40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );
      gsap.fromTo(
        ".left-bottom",
        { x: -40, y: 40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );
      gsap.fromTo(
        ".rec",
        { x: -40, y: 40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );
      gsap.fromTo(
        ".navigation",
        { y: -40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );
    }, 2700);
  };

  videoStart = () => {
    if(this.videoContainer) this.videoContainer.play();
  }


  animationsOnScroll = () => {

    gsap.to(this.cardBoxContainer[0], {
      scrollTrigger: {
        trigger: ".content-two__cover--img-box",
        scrub: true,
        start: "top 80%",
        end: "top -100%",
        markers: false,
      },
      y: -300,
      duration: 1,
      ease: "power4.out",
    });

    gsap.to(this.cardBoxContainer[1], {
      scrollTrigger: {
        trigger: ".content-two__cover--img-box",
        scrub: true,
        start: "top 80%",
        end: "top -100%",
        markers: false,
      },
      y: -500,
      duration: 1,
      ease: "power4.out",
    });
    gsap.to(this.cardBoxContainer[2], {
      scrollTrigger: {
        trigger: ".content-two__cover--img-box",
        scrub: true,
        start: "top 80%",
        end: "top -100%",
        markers: false,
      },
      y: -200,
      duration: 2,
      ease: "power4.out",
    });

    gsap.to(this.cardBoxContainer[3], {
      scrollTrigger: {
        trigger: ".content-two__cover--img-box",
        scrub: true,
        start: "top 80%",
        end: "top -100%",
        markers: false,
      },
      y: -500,
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(this.cardBoxContainer[4], {
      scrollTrigger: {
        trigger: ".content-two__cover--img-box",
        scrub: true,
        start: "top 80%",
        end: "top -100%",
        markers: false,
      },
      y: -100,
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(this.cardBoxContainer[5], {
      scrollTrigger: {
        trigger: ".content-two__cover--img-box",
        scrub: true,
        start: "top 80%",
        end: "top -100%",
        markers: false,
      },
      y: -300,
      duration: 2,
      ease: "power4.out",
    });

    gsap.from('.content-one h3 span .l', {
      scrollTrigger: {
        trigger: ".content-one",
        toggleActions: "play",
        start: "-80%",
        markers: false,
      },
      opacity: 0,
      duration: .3,
      stagger: 0.1,
      y: 20,
      ease: "power4.out",
    });
    gsap.from('.content-one p', {
      scrollTrigger: {
        trigger: ".content-one",
        toggleActions: "play",
        start: "-30%",
        markers: false,
      },
      opacity: 0,
      duration: .3,
      stagger: 0.1,
      y: 20,
      ease: "power4.out",
    });

    this.paralaxAnimation('.home', 'video');
    this.paralaxAnimation('.content-three', '.content-three__bg-img');
    
    
  };

  paralaxAnimation = (container, elementToAnim) => {
    gsap.utils.toArray(container).forEach((container) => {
      let image = container.querySelector(elementToAnim);
    
      let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
          },
        }); 
        tl.from(image, {
          yPercent: -30,
          ease: "none",
        }).to(image, {
          yPercent: 30,
          ease: "none",
        }); 
    });
  }

  imgRandomizer = (numbers, min, max) => {
    const numberTab = [];
    while (numberTab.length < numbers) {
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numberTab.includes(number)) {
        numberTab.push(number);
      }
    }
    for (let index = 1; index < numbers + 1; index++) {
      this.cardBoxes[index - 1].src = `./image/about/${
        numberTab[index - 1]
      }.jpg`;
    }
  };
}
