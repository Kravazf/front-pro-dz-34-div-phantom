const wrapDiv = document.createElement('div');
wrapDiv.setAttribute('id', 'wrapDiv');
document.body.append(wrapDiv);

const inputElement = document.createElement('input');
wrapDiv.appendChild(inputElement);

const sideDiv = document.createElement('div');
sideDiv.setAttribute('id', 'sideDiv');
wrapDiv.appendChild(sideDiv);
sideDiv.innerText = 'Wotsup?';

inputElement.addEventListener('mouseover', () => {
  sideDiv.style.display = 'block';
});

inputElement.addEventListener('mouseout', () => {
  sideDiv.style.display = 'none';
});

