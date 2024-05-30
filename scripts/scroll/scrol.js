export class scroll {
  
  init() {
    return {
      scrollInit: this.scrollInit(),
      disabledScrol: this.disabledScrol(),
    };
  }

  // metods
  scrollInit = () => {
    (function () {
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }

  disabledScrol = () => {
    
    if(document.querySelector('body[data-page="ofert"]') || document.querySelector('body[data-page="index"]') ||document.querySelector('body[data-page="contact"]')) {
      document.body.addEventListener('touchmove', (e)=> { e.preventDefault(); }, {passive:false});
    }

  }
  

  
}
