// Code edited from "Image reveal while hovering on text" forum: https://gsap.com/community/forums/topic/24876-image-reveal-while-hovering-on-text/ by dhaliwallambi
// Updated to ensure disabling when reduced motion is on

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const triggers = document.querySelectorAll('.hover-trigger');
  const hoverImg = document.querySelector('.hover-image');

  triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', e => {
      const imgSrc = e.target.getAttribute('data-image');
      hoverImg.src = imgSrc;
      hoverImg.style.display = 'block';
    });

    trigger.addEventListener('mousemove', e => {
      hoverImg.style.top = e.clientY + 20 + 'px'; // offset a bit from cursor
      hoverImg.style.left = e.clientX + 20 + 'px';
    });

    trigger.addEventListener('mouseleave', () => {
      hoverImg.style.display = 'none';
      hoverImg.src = '';
    });
  });
}
