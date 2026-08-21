(function () {
  'use strict';

  /* =============================================
     Mobile Navigation
     ============================================= */
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');
  var navLinks = document.querySelectorAll('.nav__link');

  function toggleMenu() {
    var isOpen = nav.classList.toggle('nav--open');
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    nav.classList.remove('nav--open');
    hamburger.classList.remove('hamburger--active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* =============================================
     Smooth Scrolling
     ============================================= */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      
     // Close mobile menu if open
     closeMenu();
      
     // Smooth scroll with enhanced easing
     target.scrollIntoView({ 
       behavior: 'smooth',
       block: 'start'
     });
    });
  });

  /* =============================================
     Navbar Scroll Behavior with Smooth Effect
     ============================================= */
  var header = document.getElementById('header');
  var lastScroll = 0;
  var scrollThreshold = 50;

  function handleScroll() {
    var currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
     header.classList.add('header--scrolled');
    } else {
     header.classList.remove('header--scrolled');
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* =============================================
     Active Nav Link on Scroll
     ============================================= */
  var sections = document.querySelectorAll('section[id]');

  function setActiveLink() {
    var scrollPos = window.pageYOffset + 120;

    sections.forEach(function (section) {
     var top = section.offsetTop;
     var height = section.offsetHeight;
     var id = section.getAttribute('id');

     if (scrollPos >= top && scrollPos < top + height) {
       navLinks.forEach(function (link) {
         link.classList.remove('nav__link--active');
         if (link.getAttribute('href') === '#' + id) {
           link.classList.add('nav__link--active');
         }
       });
     }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });

  /* =============================================
     Scroll Reveal with Intersection Observer
     ============================================= */
  var revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
     function (entries) {
       entries.forEach(function (entry) {
         if (entry.isIntersecting) {
           entry.target.classList.add('reveal--visible');
           revealObserver.unobserve(entry.target);
         }
       });
     },
     {
       threshold: 0.12,
       rootMargin: '0px 0px -40px 0px'
     }
    );

    revealElements.forEach(function (el) {
     revealObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach(function (el) {
     el.classList.add('reveal--visible');
    });
  }

  /* =============================================
     Stagger Animation for Lists
     ============================================= */
  var skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(function (item, index) {
    item.style.animationDelay = (0.05 * index) + 's';
  });

  var skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(function (card, index) {
    card.style.animationDelay = (0.08 * index) + 's';
  });

  /* =============================================
     Close mobile menu on resize
     ============================================= */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
     closeMenu();
    }
  });

  /* =============================================
     Enhanced Parallax on Hover (Hero Section)
     ============================================= */
  var heroComposition = document.querySelector('.hero__composition');
  
  if (heroComposition) {
    document.addEventListener('mousemove', function (e) {
     if (window.innerWidth < 1024) return; // Disable on tablets/mobile
      
     var x = (e.clientX / window.innerWidth) * 20 - 10;
     var y = (e.clientY / window.innerHeight) * 20 - 10;
      
     heroComposition.style.transform = 'perspective(1000px) rotateX(' + (y * 0.05) + 'deg) rotateY(' + (x * 0.05) + 'deg)';
    });
    
    document.addEventListener('mouseleave', function () {
     heroComposition.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }
})();
