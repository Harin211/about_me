document.addEventListener('DOMContentLoaded', () => {
  const dropBtn = document.querySelector('.dropbtn');
  const dropdown = document.querySelector('.dropdown-content');

  // Ensure dropdown is hidden on page load
  dropdown.style.display = 'none';

  // Toggle dropdown on button click
  dropBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent window click from immediately hiding it
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Hide dropdown when clicking outside
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.interests')) {
      dropdown.style.display = 'none';
    }
  });
});