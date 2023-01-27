const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    const htmlTemp = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa-sharp fa-solid fa-trash delete"></i>
    </li>`

    list.innerHTML += htmlTemp;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
    }
    addForm.reset();

});


//Delete Todos

list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTD = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo) => {
            return todo.classList.add('filtered');
        });

    Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo) => {
            return todo.classList.remove('filtered');
        });
};


// KeyUp Event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTD(term);
});