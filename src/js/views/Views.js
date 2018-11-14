import todoItem from '../models/Models';
import { allItems } from '../index';


export const DOMElements = {
    addButton: document.querySelector('.add-button'),
    input: document.querySelector('.item-input'),
    itemList: document.querySelector('.items-list'),
    date: document.querySelector('.date')
};

// Show Date on UI
export const showDate = (date) => DOMElements.date.innerHTML = date;

// Read User Input & export to other modules
export const userInput = () => DOMElements.input.value;

// Clear input field after pressing add button
export const clearField = () => DOMElements.input.value = '';

// Focus on Text Field
export const focusField = () => DOMElements.input.focus();

// Function to show input on user interface
export const showItems = (item) => {
    let markup = `<li class="item list-group-item">
<div class="row container">
    <div class="col-8">
        <p>${item}</p>
    </div>
    <div class="col">
    <button class="done-item btn btn-primary">Done</button>
</div>
    <div class="col"><button type="button" class="btn btn-danger delete-item">Delete</button>
    </div>
</div>
</li>`;
    DOMElements.itemList.insertAdjacentHTML('beforeend', markup);
};


// Cross out done items



// Remove deleted items from UI