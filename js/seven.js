document.getElementById('btn-click').addEventListener('click', function () {
    const inputName = document.getElementById('name');
    const inputValue = inputName.value;

    localStorage.setItem('name', inputValue);
})