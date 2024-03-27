// Select the necessary elements
const form = document.querySelector('form');
const input = document.querySelector('input');


// Add an event listener to the form
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputValue = input.value;
  // console.log(inputValue.split('').reverse().join(''));


  const inputToLowerCaseString = inputValue.toLowerCase().replace(/[^a-z0-9]/gi, '');
  //toLowerCase() is used to convert the string to lowercase, replace() is used to replace the character with another character
  console.log(inputToLowerCaseString);


  const reversedString = inputToLowerCaseString.split('').reverse().join('');
  //split() is used to split the code, the reverse() is used to reverse the word while the join() is used to join back the reversed word

  // Select the result text
  const resultText = document.querySelector(".result__text")
  if (reversedString === inputToLowerCaseString) {
    //Here, if reversedString is strictly equals to inputToLowercaseString show the .result_text
    resultText.textContent = inputValue + " is a palindrome word ✔";
    resultText.style.color = "green";

  } else {
    //If not show this one
    resultText.textContent = inputValue + " is not a palindrome word ❌";
    resultText.style.color = "red";
  }

  //Display if a text is not added to the input box
  if (!inputToLowerCaseString) {
    resultText.textContent = "Please enter a text";
    resultText.style.color = "red";
    return false;
  }
});


