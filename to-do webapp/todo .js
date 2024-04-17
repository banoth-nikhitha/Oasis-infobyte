const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');
    const taskCountDisplay = document.getElementById('task-count');
    const tasks = [];
  
    function addTask() {
      const taskInput = document.getElementById('task-input');
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        const task = {
          text: taskText,
          addedAt: new Date(),
          completed: false,
          completedAt: null
        };
  
        tasks.push(task);
        renderTask(task);
        taskInput.value = '';
        updateTaskCount();
      }
    }
  
    function renderTask(task) {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      if (task.completed) {
        taskItem.classList.add('completed');
      }
  
      const actions = document.createElement('div');
      actions.classList.add('actions');
  
      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.classList.add('complete-checkbox');
      completeCheckbox.checked = task.completed;
      completeCheckbox.onchange = function() {
        task.completed = !task.completed;
        task.completedAt = task.completed ? new Date() : null;
        renderTasks();
        updateTaskCount();
      };
  
      const editButton = document.createElement('button');
      editButton.innerHTML = '&#9998;';
      editButton.classList.add('edit-btn');
      editButton.onclick = function() {
        const newText = prompt('Enter new text:', task.text);
        if (newText !== null) {
          task.text = newText.trim();
          renderTasks();
        }
      };
  
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '&#128465;';
      deleteButton.classList.add('delete-btn');
      deleteButton.onclick = function() {
        if (confirm('Are you sure you want to delete this task?')) {
          tasks.splice(tasks.indexOf(task), 1);
          renderTasks();
          updateTaskCount();
        }
      };
  
      actions.appendChild(completeCheckbox);
      actions.appendChild(editButton);
      actions.appendChild(deleteButton);
  
      taskItem.innerHTML = `
        <span>${task.text}</span>
        <span>${task.completed ? task.completedAt.toLocaleString() : task.addedAt.toLocaleString()}</span>
      `;
      taskItem.appendChild(actions);
  
      if (task.completed) {
        completedTasksList.appendChild(taskItem);
      } else {
        pendingTasksList.appendChild(taskItem);
      }
    }
  
    function renderTasks() {
      pendingTasksList.innerHTML = '';
      completedTasksList.innerHTML = '';
      tasks.forEach(task => renderTask(task));
    }
  
    function updateTaskCount() {
      const today = new Date();
      const todayTasks = tasks.filter(task => task.addedAt.toDateString() === today.toDateString());
      taskCountDisplay.textContent = `You have ${todayTasks.length} task(s) for today.`;
    }
  
    // You can preload some tasks here
    // tasks.push({ text: 'Example Task 1', addedAt: new Date(), completed: false, completedAt: null });
    // tasks.push({ text: 'Example Task 2', addedAt: new Date(), completed: true, completedAt: new Date() });
  
    renderTasks();
    updateTaskCount();
