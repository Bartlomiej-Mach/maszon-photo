export class portfolio {
  domElements = () => {
    this.portoflioWrapper = document.querySelector("header.portfolio");
    this.horizontalImgContainer = document.querySelectorAll('.portfolio .horizontal .image');
    this.verticalImgContainer = document.querySelectorAll('.portfolio .vertical .image');
    this.nextPortfolioLink = document.querySelector('body[data-page="portfolio"] .next-portfolio-link');
    this.nextPortfolioImg = document.querySelector('body[data-page="portfolio"] .next-portfolio-link img');

    // change number if You add more imgs
    this.imgNumber = 14;
  };

  init() {
    return {
      domElements: this.domElements(),
      useCorrectOrientantion: this.useCorrectOrientantion(),
      animationIn: this.animationIn(),
    };
  }

  // metods
  useCorrectOrientantion = () => {
    let zmienne = [];

    const parametry = unescape(window.location.href).split("?");
    if (parametry.length > 1) {
      zmienne = parametry[1].split("&");
    }

    if(zmienne == '') {
      this.loadImages('vertical', 1);
      this.portoflioWrapper.classList.add("vertical");
      this.nextPortfolio(1);
    } else {
      const orientationPortfolio = zmienne[1].split("=");
      const imageId = zmienne[0].split("=");
  
      if (orientationPortfolio[1] === "horizontal") {
        this.portoflioWrapper.classList.add("horizontal");
      } else {
        this.portoflioWrapper.classList.add("vertical");
      }
      
      this.loadImages(orientationPortfolio[1], imageId[1]);
      this.nextPortfolio(imageId[1]);
    }
  };



  animationIn = () => {
    // first step
    gsap.fromTo('.portfolio', {
      y: '-120%', ease: "power3.out", opacity: 0, duration: 2, delay: 0.5
    }, {
      y: '0', ease: "power3.out", opacity: 1, duration: 2, delay: 0.5
    }) 

    // second step
    setTimeout(() => {
      gsap.fromTo(
        ".navigation",
        { y: -40, opacity: 0, duration: 1.4 },
        { opacity: 1, x: 0, y: 0 }
      );
    }, 1000);
  };

  loadImages = (orientation, portfolioId, isMobile) => {
    let imgCounter = 0;

    if(orientation == 'horizontal') {
      imgCounter = 8;
    } else {
      imgCounter = 7;
    }



    let innerWidth = window.innerWidth;
    if(innerWidth <= 750) {
      for (let i = 0; i < imgCounter; i++) {
        if(orientation == 'horizontal') {
          this.horizontalImgContainer[i].src = `./image/portfolio/${portfolioId}/mobile/${i + 1}.webp`;
        } else {
          this.verticalImgContainer[i].src = `./image/portfolio/${portfolioId}/mobile/${i + 1}.webp`;
        }
      }
    } else {
      for (let i = 0; i < imgCounter; i++) {
        if(orientation == 'horizontal') {
          this.horizontalImgContainer[i].src = `./image/portfolio/${portfolioId}/${i + 1}.png`;
        } else {
          this.verticalImgContainer[i].src = `./image/portfolio/${portfolioId}/${i + 1}.png`;
        }
      }
    }

    window.addEventListener('resize', () => {
      innerWidth = window.innerWidth;
      if(innerWidth <= 750) {
        for (let i = 0; i < imgCounter; i++) {
          if(orientation == 'horizontal') {
            this.horizontalImgContainer[i].src = `./image/portfolio/${portfolioId}/mobile/${i + 1}.webp`;
          } else {
            this.verticalImgContainer[i].src = `./image/portfolio/${portfolioId}/mobile/${i + 1}.webp`;
          }
        }
      } else {
        for (let i = 0; i < imgCounter; i++) {
          if(orientation == 'horizontal') {
            this.horizontalImgContainer[i].src = `./image/portfolio/${portfolioId}/${i + 1}.png`;
          } else {
            this.verticalImgContainer[i].src = `./image/portfolio/${portfolioId}/${i + 1}.png`;
          }
        }
      }
    })
  }

  nextPortfolio = currentId => {
    currentId = parseInt(currentId);

    fetch('../../data/image.json')
    .then((response) => response.json())
    .then((json) => {
      if(currentId == this.imgNumber) {
        this.nextPortfolioLink.href = `./portfolio.html?portfolio=1&orientation=${json.image[0].orientation}`
        this.nextPortfolioImg.src = '../../image/portfolio/1/1.png';
      } else {
        
        this.nextPortfolioLink.href = `./portfolio.html?portfolio=${currentId + 1}&orientation=${json.image[currentId].orientation}`;
        this.nextPortfolioImg.src = `../../image/portfolio/${currentId + 1}/1.png`;
      }
    });
  }

}
