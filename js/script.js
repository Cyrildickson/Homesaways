// const btn = document.getElementById('menu-btn')
// const nav = document.getElementById('menu')

// btn.addEventListener('click', () => {
//   btn.classList.toggle('open')
//   nav.classList.toggle('flex')
//   nav.classList.toggle('hidden')
// })


document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL path
    var path = window.location.pathname;
  
    // Find the corresponding link and add the 'active' class
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
      if (link.getAttribute('href') === path) {
        link.classList.add('active');
      }
    });
  });




