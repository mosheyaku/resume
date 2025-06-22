document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  // Smooth scroll and transition handling
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const currentSection = document.querySelector('.section.in-view');

      if (currentSection && currentSection !== targetSection) {
        currentSection.classList.add('slide-out');

        setTimeout(() => {
          window.scrollTo({ top: targetSection.offsetTop - 60, behavior: 'smooth' });
          currentSection.classList.remove('slide-out');
        }, 400);
      } else {
        window.scrollTo({ top: targetSection.offsetTop - 60, behavior: 'smooth' });
      }
    });
  });

  // Show sections that are in view
  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight * 0.8; // Increased visibility range
    let currentId = null;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollPos >= sectionTop - 100) {
        section.classList.add('in-view');
        currentId = section.getAttribute('id');
      } else {
        section.classList.remove('in-view');
      }
    });

    // Highlight active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    if (currentId) {
      document.querySelector(`.nav-link[href="#${currentId}"]`)?.classList.add('active');
    }
  }

  // Call on scroll and on load to catch static view
  window.addEventListener('scroll', onScroll);
  window.addEventListener('load', onScroll);
  onScroll(); // Also run on DOM ready just in case
});
