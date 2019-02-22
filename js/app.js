const initialiseContent = function () {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
}

document.addEventListener('DOMContentLoaded', initialiseContent)

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();
  const mountainListItem = createMountainListItem(event.target);
  const mountainList = document.querySelector('#mountain-list');
  mountainList.appendChild(mountainListItem);

  event.target.reset();
}

const createMountainListItem = function (form) {
  const mountainListItem = document.createElement('li');
  mountainListItem.classList.add('mountain-list-item');

  const mountain = document.createElement('h3');
  mountain.textContent = form.mountain.value;
  mountainListItem.appendChild(mountain);

  const height = document.createElement('h4');
  height.textContent = form.height.value;
  mountainListItem.appendChild(height);

  const category = document.createElement('h5');
  category.textContent = form.category.value;
  mountainListItem.appendChild(category);

  return mountainListItem;
}

const handleDeleteAllClick = function (event) {
  const mountainList = document.querySelector('#mountain-list');
  mountainList.innerHTML = '';
}
