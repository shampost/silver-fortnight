// JavaScript code for form validation
// Retrieve the input field value
var inputField = document.getElementById("inputField");

inputField.addEventListener("input", function (evt) {
  // Regular expression pattern for alphanumeric input
  var pattern = /^[a-z0-9]+$/i;
  
  // Check if the input value matches the pattern
  if (pattern.test(inputField.value)) {
    // taken from linkedin learning course
    inputField.setCustomValidity('');
  }
  else {
    // Invalid input: display error message
    inputField.setCustomValidity('Input is invalid');
  }
  inputField.reportValidity();
});

document.getElementById("myForm").addEventListener("submit", function (evt) {
  if (!inputField.checkValidity()) {
    // Prevent form from submitting
    evt.preventDefault();
  }
  else {
    // Valid input: display confirmation and submit the form 
    alert("Form submitted successfully");
    document.forms.myForm.submit();
    console.log("Form submitted successfully");
  }
});