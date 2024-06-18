export class home {
  constructor() {}
  domElements = () => {
    this.homeH1 = document.querySelectorAll(".home h1 span");
  };
  init() {
    return {
      domElements: this.domElements(),
      animationIn: this.animationIn(this.homeH1),
      imgFetch: this.imgFetch(),
      mouseMove: this.mouseMove(),
    };
  }

  // metods

  mouseMove = () => {
    document.addEventListener("mousemove", (e) => {
      parallaxIt(e, document.querySelector(".square-container-2"), 10);
    });

    const parallaxIt = (e, target, movement) => {
      let $this = target;

      let relX = e.pageX - $this.offsetLeft - 1000;
      let relY = e.pageY - $this.offsetTop + 10;

      TweenMax.to(target, 1, {
        x: ((relX - $this.offsetWidth / 2) / $this.offsetWidth) * movement,
        y: ((relY - $this.offsetHeight / 2) / $this.offsetHeight) * movement,
      });
    };
  };

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
      gsap.fromTo(".center", { opacity: 0, duration: 1.4 }, { opacity: 1 });
      gsap.fromTo(
        ".home .slogan",
        { x: -40, y: 40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );
      gsap.fromTo(
        ".home .slogan_mobile",
        { x: "-50%", y: 40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: "-50%", y: 0 }
      );
      gsap.fromTo(
        ".navigation",
        { y: -40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );
      gsap.to(".home .menu--item", {
        y: 0,
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
        pointerEvents: "all",
      });
    }, 2700);
  };

  imgFetch = () => {
    const menuWrapper = document.querySelector(".menu--wrapper");
    fetch('../../data/image.json')
    .then((response) => response.json())
    .then((json) => {

      for (let i = 0; i < json.image.length; i++) {
        menuWrapper.innerHTML += `
        <a href="./portfolio.html?portfolio=${i + 1}&orientation=${json.image[i].orientation}" class="menu--item" draggable="false">
          <div class="img-container">
            <img src="./image/home-small-img/${i + 1}.jpg" alt="slider-img" />
          </div>
        </a>
        `;

        this.imgSlider();

      }
    });
  }

  imgSlider = () => {

    /*--------------------
    Vars
    --------------------*/
    let $menu = document.querySelector(".menu");
    const $items = document.querySelectorAll(".menu--item");
    let itemWidth = $items[0].clientWidth;
    let wrapWidth = $items.length * itemWidth;

    let scrollSpeed = 0;
    let oldScrollY = 0;
    let scrollY = 0;
    let y = 0;

    /*--------------------
    Lerp
    --------------------*/
    const lerp = (v0, v1, t) => {
      return v0 * (1 - t) + v1 * t;
    };

    /*--------------------
    Dispose
    --------------------*/
    const dispose = (scroll) => {
      gsap.set($items, {
        x: (i) => {
          return i * itemWidth + scroll;
        },
        modifiers: {
          x: (x, target) => {
            const s = gsap.utils.wrap(
              -itemWidth,
              wrapWidth - itemWidth,
              parseInt(x)
            );
            return `${s}px`;
          },
        },
      });
    };
    dispose(0);

    /*--------------------
    Wheel
    --------------------*/
    const handleMouseWheel = (e) => {
      scrollY -= e.deltaY * 0.9;
    };

    /*--------------------
    Touch
    --------------------*/
    let touchStart = 0;
    let touchX = 0;
    let isDragging = false;
    const handleTouchStart = (e) => {
      touchStart = e.clientX || e.touches[0].clientX;
      isDragging = true;
      $menu.classList.add("is-dragging");
    };
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      touchX = e.clientX || e.touches[0].clientX;
      scrollY += (touchX - touchStart) * 2.5;
      touchStart = touchX;
    };
    const handleTouchEnd = () => {
      isDragging = false;
      $menu.classList.remove("is-dragging");
    };

    /*--------------------
    Listeners
    --------------------*/
    $menu.addEventListener("mousewheel", handleMouseWheel);

    $menu.addEventListener("touchstart", handleTouchStart);
    $menu.addEventListener("touchmove", handleTouchMove);
    $menu.addEventListener("touchend", handleTouchEnd);

    $menu.addEventListener("mousedown", handleTouchStart);
    $menu.addEventListener("mousemove", handleTouchMove);
    $menu.addEventListener("mouseleave", handleTouchEnd);
    $menu.addEventListener("mouseup", handleTouchEnd);

    $menu.addEventListener("selectstart", () => {
      return false;
    });

    /*--------------------
    Resize
    --------------------*/
    window.addEventListener("resize", () => {
      let menuWidth = $menu.clientWidth;
      itemWidth = $items[0].clientWidth;
      wrapWidth = $items.length * itemWidth;
    });

    /*--------------------
    Render
    --------------------*/
    const render = () => {
      requestAnimationFrame(render);
      y = lerp(y, scrollY, 0.1);
      dispose(y);

      scrollSpeed = y - oldScrollY;
      oldScrollY = y;

      gsap.to($items, {
        skewX: -scrollSpeed * 0.2,
        rotate: scrollSpeed * 0.01,
        scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003,
        duration: 3,
      });
    };
    render();
  };
}
