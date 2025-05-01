// Function to add a new class reminder
function addReminder() {
    const reminderInput = document.getElementById('reminderInput');
    const reminderList = document.getElementById('reminderList');

    if (reminderInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = reminderInput.value;

        // Add a delete button for each reminder
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.onclick = function () {
            reminderList.removeChild(listItem);
        };

        listItem.appendChild(deleteBtn);
        reminderList.appendChild(listItem);

        // Clear the input field
        reminderInput.value = '';
    } else {
        alert('Please enter a reminder!');
    }
}
