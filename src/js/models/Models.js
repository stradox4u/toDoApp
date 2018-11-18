import { allItems } from '../index';

//Get Correct Date
let dateObj = new Date();
let month = dateObj.getMonth() + 1;
let day = dateObj.getDate();
let year = dateObj.getFullYear();
export const date = `${day} - ${month} - ${year}`;

// Import user input from views module
import { userInput } from '../views/Views';

// Create a data structure/class
export default class todoItem {
    constructor(item) {
        this.item = item;
    }
    
};

// Add the input to data structure
export let data = () => {
    let allData = allItems.map(e => e.item);
    return allData;
}

// Remove deleted items from the data structure
export const deleteItem = (event) => {
    let item = event.target.parentNode.parentNode.children[0].children[0].innerHTML;
    if (event.target.id === `delete-${data().indexOf(item)}`)
    {
        let remData = data().splice((data().indexOf(item)), 1);
        //console.log(data());
    }
    
}