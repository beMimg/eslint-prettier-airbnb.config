const copyBtns = document.querySelectorAll('.copy-btn');

function copyText(htmlElement) {
  const elementText = htmlElement.innerText;
  const inputElement = document.createElement('input');
  inputElement.setAttribute('value', elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  inputElement.parentNode.removeChild(inputElement);
}

copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener('click', (e) => {
    const text = e.target.parentElement.previousElementSibling;
    copyText(text);
  });
});
