// Select the necessary elements
const form = document.querySelector('form');
const input = document.querySelector('input');


// Add an event listener to the form
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = input.value;
  // console.log(inputValue.split('').reverse().join(''));

  const reversedString = inputValue.split('').reverse().join('');
  //split() is used to split the code, the reverse() is used to reverse the word while the join() is used to join back the reversed word
  if (reversedString === inputValue) {//Here, if reversedString is strictly equals to inputValue show the .result_text
    document.querySelector(".result__text").textContent = reversedString + " is a palindrome ✔";
  } else {//If not show this one
    document.querySelector(".result__text").textContent = reversedString + " is not a palindrome ❌";
  }
});
