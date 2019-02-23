const initialLoad = function () {
  const newMountainform = document.querySelector('#add-mountain-form');
  // newItemform.textContent = "Welcome";
  // newItemform.classList.add('hidden');
  newMountainform.addEventListener('submit', handleNewMountainFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
}

const handleNewMountainFormSubmit = function (event) {
  event.preventDefault();
  const mountainListItem = createMountainListItem(event.target);
  const mountainList = document.querySelector('#mountain-list');
  mountainList.appendChild(mountainListItem);

  event.target.reset();
}


const createMountainListItem = function (form) {
  const mountainListItem = createMountainElement();

  // add details to the list item box
  addMountainName(form, mountainListItem);
  addMountainHeight(form, mountainListItem);
  addMountainType(form, mountainListItem);
  addClimbedStatus(form, mountainListItem);

  return mountainListItem;
}

const createMountainElement = function() {
  const mountainListItem = document.createElement('li');
  mountainListItem.classList.add('mountain-list-item');
  return mountainListItem;
}

const addMountainName = function(form, mountainListItem) {
  const mountain = document.createElement('h3');
  mountain.textContent = form.mountain.value;
    mountainListItem.appendChild(mountain);
  // return mountain;
}

const addMountainHeight = function(form, mountainListItem){
  const height = document.createElement('h4');
  height.textContent = form.height.value;
  mountainListItem.appendChild(height);
}

const addMountainType = function(form, mountainListItem) {
  const category = document.createElement('h5');
  category.textContent = form.category.value;
  mountainListItem.appendChild(category);
}

const addClimbedStatus = function(form, mountainListItem) {
  let climbStatus = document.createElement('h6');
  climbStatus.textContent = form.climb_status.value;
  climbStatus = getClimbStatus(climbStatus);
  mountainListItem.appendChild(climbStatus);
}

const getClimbStatus = function(climbStatus)  {
  if (climbStatus.textContent == 0)
    {climbStatus.textContent = 'Climbed';
  }else {
    climbStatus.textContent = 'To Climb';
  }
  return climbStatus;
}

const handleDeleteAllClick = function (event) {
  const mountainList = document.querySelector('#mountain-list');
  mountainList.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', initialLoad)
