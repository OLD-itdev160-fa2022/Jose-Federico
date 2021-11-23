function get(element){
    return document.getElementById(element);
}

function openModal(){
    let modal = get('modal-dialog');
    let backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal(){
    let title = get('edit-title-text');
    let text = get('edit-content-text');
    let modal = get('modal-dialog');
    let backdrop = get('modal-backdrop');

    title.value = '';
    text.value = '';

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent(){
    let title = get('edit-title-text');
    let text = get('edit-content-text');
    let content = get('display-content');

    let newTitle = document.createElement('h2');
    let newTitleText = document.createTextNode(title.value);
    let newContent = document.createElement('p');
    let newContentText = document.createTextNode(text.value);

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

window.addEventListener('load', function() {
    let newButton = get('new-button');
    let cancelButton = get('cancel-button');
    let saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);

});