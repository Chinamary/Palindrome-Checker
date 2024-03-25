// Select the necessary elements
const form = document.querySelector('form');
const input = document.querySelector('input');


// Add an event listener to the form
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = input.value;
  console.log(inputValue);
});