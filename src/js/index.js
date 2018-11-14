// Global Controller
import { DOMElements, userInput, clearField, focusField, showItems, showDate } from './views/Views';
import todoItem from './models/Models';
import { date } from './models/Models';

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
    console.log(allItems);
};

// Add event listener for add button
DOMElements.addButton.addEventListener('click', () => {
    addActions();
});

document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        addActions();
    }
});




