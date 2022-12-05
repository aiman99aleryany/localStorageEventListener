const STORAGE_KEY = "MODEL";

let model = [];

// Helpers
const qs = (s) => document.querySelector(s);

const createModel = (oldModel, newItem) => [...oldModel, newItem];

// Storage functions
const getLocalStorage = () => JSON.parse(localStorage.getItem(STORAGE_KEY));

const setLocalStorage = (value) => localStorage.setItem(STORAGE_KEY, JSON.stringify(value));

const initLocalStorage = () => getLocalStorage() || setLocalStorage(model);

// MODEL UPDATE
const updateModel = () => {
  model = getLocalStorage();
};

const addBook = (newItem) => {
  model = createModel(model, newItem);
  setLocalStorage(model);
};

// DOM
const inputDOM = qs(".inputDOM");
const buttonDOM = qs(".buttonDOM");
const resultDOM = qs(".resultDOM");

// render
const renderBooks = () => {
  resultDOM.innerHTML = model;
};

// APP
const run = () => {
  initLocalStorage();
  updateModel();
  renderBooks();

  // Event Listeners
  window.addEventListener("storage", () => {
    model = getLocalStorage();
    renderBooks();
  });

  buttonDOM.addEventListener("click", () => {
    addBook(inputDOM.value);
    renderBooks();
    inputDOM.value = "";
  });
};

run();
