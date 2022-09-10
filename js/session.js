const getElement = (id) => {
    const getId = document.getElementById(id);
    return getId;
}

const handleSubmit = () => {
    const todos = JSON.parse(localStorage.getItem('TODO'));
    const inputField = getElement('todo-text');

    const inputValue = inputField.value;
    inputField.value = '';

    if (!todos) {
        const todoList = [
            {
                title: inputValue,
                completed: false,
            },
        ];
        localStorage.setItem('TODO', JSON.stringify(todoList));
    }
    else {

        const todoList = [
            ...todos,
            {
                title: inputValue,
                completed: false,
            },
        ];
        localStorage.setItem('TODO', JSON.stringify(todoList));
    }
    render();
}

const render = () => {
    const todos = JSON.parse(localStorage.getItem('TODO'));
    const ul = getElement('todo-list');



    ul.innerHTML = '';



    todos.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('py-2')
        li.innerText = item.title;
        ul.appendChild(li);

    })

}
render();


const handleClearAll = () => {
    localStorage.removeItem('TODO');
    render();
}