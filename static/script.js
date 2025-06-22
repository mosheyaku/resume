document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const headerNav = document.querySelector('.header-nav');

  function getNavHeight() {
    return headerNav ? headerNav.offsetHeight : 60;
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const currentSection = document.querySelector('.section.in-view');

      if (!targetSection) return;

      if (currentSection && currentSection !== targetSection) {
        // Start slide out
        currentSection.classList.add('slide-out');

        // Scroll immediately, no delay
        window.scrollTo({
          top: targetSection.offsetTop - getNavHeight() - 10,
          behavior: 'smooth'
        });

        // Remove slide-out class shortly after animation starts
        setTimeout(() => {
          currentSection.classList.remove('slide-out');
        }, 300);
      } else {
        window.scrollTo({
          top: targetSection.offsetTop - getNavHeight() - 10,
          behavior: 'smooth'
        });
      }
    });
  });

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
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
