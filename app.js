// A function to get the various inputs and call their respective validator functions
function getElements(elementName, functionName) {
  document.getElementById(elementName).addEventListener('blur', functionName);
}

getElements('name', validateName);
getElements('zip', validateZip);
getElements('email', validateEmail);
getElements('phone', validatePhone);

function validateName() {
  const name = document.getElementById('name');

  /**
   * The regex
   * I want both uppercase and lowercase letters
   * I also want names between 2 to 10 characters and it must end with them characters
   * The characters must start with letters as well
   */
  const re = /^[a-zA-Z]{2,10}$/;
  !re.test(name.value) ? name.classList.add('is-invalid') : name.classList.remove('is-invalid');
}

function validateZip() {
  const zip = document.getElementById('zip');
  /**
   * The regex
   * The zipcode can allow six numbers first
   * Then an optional four numbers must come only after an hyphen
   */
  const re = /^[0-9]{6}(-[0-9]{4})?$/;
  !re.test(zip.value) ? zip.classList.add('is-invalid') : zip.classList.remove('is-invalid');
}

function validateEmail() {
  const email = document.getElementById('email');
  /**
   * The regex
   * Accepts alphanumeric characters and the underscore appearing multiple times
   * Accepts the @ sign coming in as well
   * Accepts the end part e.g yahoo or gmail to be between 2 to 5 characters of only alphabets
   */
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  !re.test(email.value) ? email.classList.add('is-invalid') : email.classList.remove('is-invalid');
}

function validatePhone() {
  const phone = document.getElementById('phone');
  /**
   * The regex
   * This one accepts optional brackets covering the first three numbers: i.e 234
   * The next set of numbers also allow dash, comma or space between them.
   */
  const re = /^\+?\(?\d{3}\)?[-. ]?\d{3}[-. ]?[-. ]?\d{3}[-. ]?\d{4}$/;
  !re.test(phone.value) ? phone.classList.add('is-invalid') : phone.classList.remove('is-invalid');
}
