export const Swap = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('section[data-section-id]');

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetSectionId = link.getAttribute('href').substring(1);
        const targetSection = document.querySelector(`section[data-section-id="${targetSectionId}"]`);

        sections.forEach((section) => {
          section.classList.remove('active');
        });

        if (targetSection) {
          targetSection.classList.add('active');
        }
      });
    });
  });
};
export default Swap;
