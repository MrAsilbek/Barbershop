document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetElement = document.getElementById(targetId); // Find the target element
        targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling animation
            block: 'start' // Align to the top of the section
        });
    });
});


  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.animate-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, index * 200); // Har biri 200ms kechikish bilan chiqadi
          });
          // Bir marta ko'rsatish uchun observerni o'chirish
          // Agar qaytib o'tganda ham chiqishini xohlasangiz, bu qatorni olib tashlang:
          // observer.unobserve(entry.target);
        } else {
          const items = entry.target.querySelectorAll('.animate-item');
          items.forEach(item => item.classList.remove('visible'));
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  });
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animatedItems = entry.target.querySelectorAll('.animate');
        animatedItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 200); // Har bir element uchun 200ms kechikish
        });
        observer.unobserve(entry.target); // Har safar faqat bir marta animatsiya bo'lishi uchun
      }
    });
  }, {
    threshold: 0.3 // element 30% ko‘ringanda ishga tushadi
  });

  // hero qismi <section id="hero"> bo‘lsa yoki <div id="hero"> bo‘lsa ishlaydi
  const hero = document.querySelector('#home'); // yoki #hero agar sizda shunday bo‘lsa
  if (hero) {
    observer.observe(hero);
  }

