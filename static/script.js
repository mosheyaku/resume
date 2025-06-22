document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Smooth scroll immediately
      window.scrollTo({ top: targetSection.offsetTop - 60, behavior: 'smooth' });
    });
  });

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach((section, i) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      const isInView = scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight;

      if (isInView) {
        section.classList.add('in-view');
        const id = section.getAttribute('id');
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      } else {
        section.classList.remove('in-view');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});
