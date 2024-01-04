document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.content');
    const navigationLinks = document.querySelectorAll('.navigation-bar a');


    navigationLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();

        content.style.transitionDuration = '0.5s';
        content.classList.add('content-slide-out');
        setTimeout(function () {
          content.style.transitionDuration = '';
          content.classList.remove('content-slide-out');
          content.classList.add('content-slide-out-return');
        }, 500);
      });
    });

    content.addEventListener('transitionend', function () {
      content.classList.remove('content-slide-out-return');
    });
});