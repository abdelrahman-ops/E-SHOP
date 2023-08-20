// Get references to the category button and dropdown
const categoryButton = document.querySelector('.category-button');
const categoryDropdown = document.querySelector('.category-dropdown');

// Add a click event listener to the button
categoryButton.addEventListener('click', () => {
  // Toggle the visibility of the category dropdown
  categoryDropdown.classList.toggle('show');
});


// Get references to the profile button and dropdown
const profileButton = document.querySelector('.profile-button');
const profileDropdown = document.querySelector('.profile-dropdown');

// Add a click event listener to the button
profileButton.addEventListener('click', () => {
  // Toggle the visibility of the profile dropdown
  profileDropdown.classList.toggle('show');
});
