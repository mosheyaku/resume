document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const headerNav = document.querySelector('.header-nav');
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

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

      // Close mobile nav if open
      if (navList.classList.contains('show')) {
        navList.classList.remove('show');
      }

      if (currentSection && currentSection !== targetSection) {
        currentSection.classList.add('slide-out');

        window.scrollTo({
          top: targetSection.offsetTop - getNavHeight() - 10,
          behavior: 'smooth'
        });

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

  // Hamburger toggle
  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }
});
