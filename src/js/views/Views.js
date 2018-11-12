export const item = prompt('Enter to-do Item Here');

const itemList = document.querySelector('.items-list');
export const addItem = (item) => {
    const markup = `
    <li class="item list-group-item">
        <div class="row">
            <div class="col">
                <p>${item}</p>
        </div>
            <div class="col">
            <button class="done-item btn btn-primary btn-primary btn-lg">Done</button>
        </div>
            <div class="col"><button type="button" class="btn btn-danger btn-lg delete-item">Delete</button>
            </div>
        </div>
    </li>
    `;
    itemList.insertAdjacentHTML("beforeend", markup);
}