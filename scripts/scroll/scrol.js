export class scroll {
  
  init() {
    return {
      scrollInit: this.scrollInit(),
    };
  }

  // metods
  scrollInit = () => {
    (function () {
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }
  

  
}
