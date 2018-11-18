// Global Controller
import { DOMElements, userInput, clearField, focusField, showItems, showDate, crossOut, deleteUI } from './views/Views';
import todoItem from './models/Models';
import { date, data, deleteItem } from './models/Models';

export const allItems = [];

// Show Correct Date
showDate(date);

// Actions to carry out on press of add button/enter key
const addActions = () => {
    const newItem = new todoItem(userInput());
    allItems.push(newItem);
    showItems(newItem.item);
    clearField();
    focusField();
    data();
    
};

// Event listener for add button/Enter key
DOMElements.addButton.addEventListener('click', () => {
    if (userInput() !== '') {
        addActions();
    }
});

document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && userInput() !== '') {
        addActions();
    }
});

// Event listener for done button
// Crosses out item once the button is clicked
DOMElements.itemList.addEventListener('click', crossOut);



// Event listeners for delete button

DOMElements.listItems.addEventListener('click', deleteUI);

DOMElements.itemList.addEventListener('click', deleteItem);
