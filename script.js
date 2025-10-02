// To-Do List Application
// Wait for the DOM to fully load before running the script

// To-Do List Application with Local Storage Persistence
document.addEventListener('DOMContentLoaded', function () {
	// Select DOM elements
	const addButton = document.getElementById('add-task');
	const taskInput = document.getElementById('task-input');
	const taskList = document.getElementById('task-list');

	// Load tasks from Local Storage and populate the list
	function loadTasks() {
		const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
		storedTasks.forEach(taskText => addTask(taskText, false)); // false: don't save again
	}

	// Function to add a new task to the list
	function addTask(taskText, save = true) {
		// If called from button/Enter, get input value
		if (typeof taskText !== 'string') {
			taskText = taskInput.value.trim();
		}
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
			// Remove from DOM
			taskList.removeChild(li);
			// Remove from Local Storage
			let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
			storedTasks = storedTasks.filter(t => t !== taskText);
			localStorage.setItem('tasks', JSON.stringify(storedTasks));
		};
		// Append button to list item, then to list
		li.appendChild(removeBtn);
		taskList.appendChild(li);
		// Save to Local Storage if needed
		if (save) {
			const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
			storedTasks.push(taskText);
			localStorage.setItem('tasks', JSON.stringify(storedTasks));
		}
		// Clear input field if added from input
		if (save) {
			taskInput.value = "";
		}
	}

	// Add task on button click
	addButton.addEventListener('click', function () {
		addTask();
	});

	// Add task on Enter key press
	taskInput.addEventListener('keypress', function (event) {
		if (event.key === 'Enter') {
			addTask();
		}
	});

	// Load tasks from Local Storage on page load
	loadTasks();
});
