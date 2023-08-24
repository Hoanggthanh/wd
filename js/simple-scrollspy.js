// JavaScript Document
window.onload = function () {
    scrollSpy('#main-menu', {
      sectionClass: '.scrollspy',
      menuActiveTarget: '.menu-item',
      offset: 100,
      // scrollContainer: null,
      // smooth scroll
      smoothScroll: true,
      smoothScrollBehavior: function(element) {
        console.log('run "smoothScrollBehavior"...', element)
        element.scrollIntoView({ behavior: 'smooth' })
      },
      onActive: (el) => {
        console.log('run "onActive"...', el)
      }
    })
  }