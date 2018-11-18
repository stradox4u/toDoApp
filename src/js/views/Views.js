import todoItem from '../models/Models';
import { allItems } from '../index';
import { data } from '../models/Models';


export const DOMElements = {
    addButton: document.querySelector('.add-button'),
    input: document.querySelector('.item-input'),
    itemList: document.querySelector('.items-list'),
    date: document.querySelector('.date'),
    listItems: document.querySelector('.todo-items')
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
    data();
    let markup = `<li id="item-${data().indexOf(item)}" class="item list-group-item">
<div class="row container">
    <div class="col-10">
        <p>${item}</p>
    </div>
    <div class="col btns">
    <button type="button" id="done-${data().indexOf(item)}" class="done-item btn btn-primary">Done</button>
    <button type="button" id="delete-${data().indexOf(item)}" class="btn btn-danger delete-item">Delete</button>
    </div>
</div>
</li>`;
    DOMElements.itemList.insertAdjacentHTML('beforeend', markup);
    // console.log(markup);
};

// Cross out done items
//const strikeThrough = `<style>text-decoration: line-through</style>`; (didn't work)

export const crossOut = (event) => {
    let eventTarget = event.target.parentNode.parentNode.children[0].children[0];
    let item = eventTarget.innerHTML;
    data();
    if (event.target.id === `done-${data().indexOf(item)}`) {
        event.target.parentNode.parentNode.children[0].children[0].style="text-decoration:line-through";
        //console.log(event.target.id);
    }
    
    };

// Remove deleted items from UI
export const deleteUI = (event) => {
    data();
    let target = event.target.parentNode.parentNode.parentNode;
    let item = event.target.parentNode.parentNode.children[0].children[0].innerHTML;
    if (event.target.id === `delete-${data().indexOf(item)}`) {
        target.parentNode.removeChild(target);
    //console.log(item);
    }
};
