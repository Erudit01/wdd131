function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
  event.preventDefault()
  let errorMsg = ''
  // clear any previous errors
  displayError('')
  // Get form reference
  const form = event.target;
  // check credit card number
  if (isNaN(form.cardNumber.value)) {
    // it is not a valid number
    errorMsg += 'Card number is not a valid number<br>';
  } else if (!isCardNumberValid(form.cardNumber.value)) {
    // it is a number, but is it valid?
    errorMsg += 'Card number is not a valid card number<br>';
  }
  // Expiry date validation
  let month = parseInt(form.expMonth.value);
  let year = parseInt(form.expYear.value);
  if (!isExpiryValid(month, year)) {
    errorMsg += 'Expiration date must be in the future<br>';
  }
  if (errorMsg !== '') {
    // there was an error. stop the form and display the errors.
    displayError(errorMsg);
    return false;
  }
  return true;
}
function isExpiryValid(month, year) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  // Convert 2-digit year to full year (assuming 2000s)
  let fullYear = 2000 + year;
  console.log(`Entered Month: ${month}, Entered Year: ${fullYear}`);
  console.log(`Current Month: ${currentMonth}, Current Year: ${currentYear}`);
  if (fullYear < currentYear) {
    return false; // Year is in the past
  }
  if (fullYear === currentYear && month < currentMonth) {
    return false; // Same year but past month
  }
  return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);