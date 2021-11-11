// ***** SELECT ITEMS *****
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// ***** EDIT OPTION *****
let editElement;
let editFlag = false;
let editID = "";

// ***** EVENT LISTENERS *****
// Submit Form
form.addEventListener("submit", addItem);

// ***** FUNCTIONS *****
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;

  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    // add Class
    element.classList.add("grocery-item");
    // add ID
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
    // append Child
    list.appendChild(element);
    // display Alert
    displayAlert("item added to the List", "success");
    // show Container
    container.classList.add("show-container");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert("please enter value", danger);
  }
}
// Display Alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // Remove Alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
// set back to default
function setBackToDefault() {
  console.log("set back to default");
}
// ***** LOCAL STORAGE *****
function addToLocalStorage(id, value) {
  console.log("added to local storage");
}
// ***** SETUP ITEMS *****
