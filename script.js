document.addEventListener('DOMContentLoaded', () => {
  // Select all dropdown containers (both interests & projects)
  const dropdownContainers = document.querySelectorAll('.interests, .projects');

  dropdownContainers.forEach(container => {
    const button = container.querySelector('.dropbtn');          // the button
    const content = container.querySelector('.dropdown-content, .projs'); // the content

    if (content) content.style.display = 'none';

    // Toggle dropdown on button click
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      // Toggle this one
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Hide dropdowns when clicking outside
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.interests') && !e.target.closest('.projects')) {
      document.querySelectorAll('.dropdown-content, .projs').forEach(d => {
        d.style.display = 'none';
      });
    }
  });


const skillButton = document.querySelector('.list-skills');
const skillContents = document.querySelectorAll('.skill-content');

skillButton.addEventListener('click', () => {
  skillContents.forEach(box => {
    box.style.display = (box.style.display === 'none' || box.style.display === '') 
    if (box.style.display === 'none' || box.style.display === '') {
      box.style.display = 'flex';
    } else {
      box.style.display = 'none';
    }

  });
});


});
