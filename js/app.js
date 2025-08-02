const inputElem = document.querySelector('input')
const maxLengthElem = document.querySelector('.max-length')

const inputMaxLength = +inputElem.getAttribute("maxlength");


inputElem.addEventListener('keyup', () => {
  maxLengthElem.textContent = inputMaxLength -  inputElem.value.length
})