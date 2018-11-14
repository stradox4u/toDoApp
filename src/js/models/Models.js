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
    
}

// Add the input to data structure


