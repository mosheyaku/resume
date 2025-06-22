document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

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

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    sections.forEach((section, i) => {
      if (scrollPos >= section.offsetTop - 100) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const id = section.getAttribute('id');
        document.querySelector(`.nav-link[href="#${id}"]`)?.classList.add('active');
        section.classList.add('in-view');
      } else {
        section.classList.remove('in-view');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});
