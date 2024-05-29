const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Get chapters list from localStorage or initialize an empty array
let chaptersArray = getChapterList() || [];

// Function to update localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to get chapters list from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to display a chapter in the list
function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deleteButton);
  list.append(li);

  // Add delete functionality
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
  });
}

// Function to delete a chapter from the list and update localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // remove the ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

// Initialize the list on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Add new chapter to the list
button.addEventListener('click', () => {
  if (input.value !== '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});
