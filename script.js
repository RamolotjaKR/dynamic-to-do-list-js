// To-Do List Application
// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
	// Select DOM elements
	const addButton = document.getElementById('add-task');
	const taskInput = document.getElementById('task-input');
	const taskList = document.getElementById('task-list');

	// Function to add a new task to the list
	function addTask() {
		// Get and trim the input value
		const taskText = taskInput.value.trim();
		// Check if input is empty
		if (taskText === "") {
			alert("Please enter a task.");
			return;
		}
		// Create new list item
		const li = document.createElement('li');
		li.textContent = taskText;
		// Create remove button
		const removeBtn = document.createElement('button');
		removeBtn.textContent = "Remove";
		removeBtn.className = 'remove-btn';
		// Remove task when button is clicked
		removeBtn.onclick = function () {
			taskList.removeChild(li);
		};
		// Append button to list item, then to list
		li.appendChild(removeBtn);
		taskList.appendChild(li);
		// Clear input field
		taskInput.value = "";
	}

	// Add task on button click
	addButton.addEventListener('click', addTask);

	// Add task on Enter key press
	taskInput.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			addTask();
		}
	});

	// Optionally, invoke addTask on DOMContentLoaded (for initial data fetch if needed)
	// addTask();
});
