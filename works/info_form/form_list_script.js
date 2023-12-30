document.addEventListener('DOMContentLoaded', function () {
    const infoForm = document.getElementById('info_form');
    const fullNameInput = document.getElementById('full_name');
    const idInput = document.getElementById('id');
    const infoList = document.getElementById('info_list');

    infoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const full_name = fullNameInput.value;
        const id = idInput.value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>${full_name}</div>
            <div>${id}</div>
            <button onclick="deleteItem(this)">DELETE</button>
        `;
        infoList.appendChild(listItem);

        fullNameInput.value = '';
        idInput.value = '';
    });
});

function deleteItem(item) {
    item.parentElement.remove();
}