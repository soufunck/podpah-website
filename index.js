(function () {
  "use strict";
  
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  }

  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  }

  const scrollto = (el) => {
    let header = select('#header');
    let offset = header.offsetHeight;

    let elementPos = select(el).offsetTop;
    window.scrollTo({ top: elementPos - offset, behavior: 'smooth' });
  }

  on('click', '.styles_mobileToggle__navbar', function (e) {
    select('#navbar').classList.toggle('styles_mobile__navbar');
    document.body.classList.toggle('overflow');
    this.classList.toggle('bx-list-ul');
    this.classList.toggle('bx-x');
  })

  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault();

      let navbar = select('#navbar');

      if (navbar.classList.contains('styles_mobile__navbar')) {
        document.body.classList.remove('overflow');
        navbar.classList.remove('styles_mobile__navbar');

        let navbarToggle = select('.styles_mobileToggle__navbar');
        navbarToggle.classList.toggle('bx-list-ul');
        navbarToggle.classList.toggle('bx-x');
      }

      scrollto(this.hash);
    }
  }, true)


  window.addEventListener('load', () => {
    if (window.location.hash) { if (select(window.location.hash)) { scrollto(window.location.hash); } }
    AOS.init({ duration: 350, once: true, mirror: false });
  });

})();
