// backup storage
const state = {
    taskList: [],
};
  
// DOM Operations
const taskModal = document.querySelector(".task__modal__body");
const taskContents = document.querySelector(".task__contents");
    
// Template for the card on screen
const htmlTaskContent = ({ id, title, description, type, url }) => `
    <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class='card shadow-sm task__card'>
      
        <div class='card-header d-flex justify-content-end task__card__header'>
            <button type='button' class='btn btn-outline-primary mr-2' name=${id} onclick="editTask.apply(this, arguments)">
                <i class='fas fa-pencil-alt name=${id}'></i>
            </button>
            <button type='button' class='btn btn-outline-danger mr-2' name=${id} onclick="deleteTask.apply(this, arguments)">
                <i class='fas fa-trash-alt name=${id}' ></i>
            </button>
        </div>
        <div class='card-body'>
            ${
                url
                    ? `<img width='100%' src=${url} alt='Card Image' class='card-img-top md-3 rounded-lg' />`
                    : `<img width='100%' src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-157679608-1658432659.jpg" alt='Card Image' class='card-img-top md-3 rounded-lg' />`
            }
            <h4 class='card-title task__card__title'>${title}</h4>
            <p class='description trim-3-lines text-muted'>${description}</p>
            <div class='tags text-white d-flex flex-wrap'>
                <span class='badge bg-primary m-1'>${type}</span>
            </div>
        </div>
        <div class='card-footer'>
            <button type='button' class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask" onclick='openTask.apply(this, arguments)' id=${id}>Open Task</button>
        </div>
      </div>
    </div>
  `;
  
//Modal body when we click on open task
const htmlModalContent = ({ id, title, description, url }) => {
    const date = new Date(parseInt(id));
    return `
        <div id=${id}>
            ${
                url
                    ? `<img width='100%' src=${url} alt='Card Image' class='card-img-top md-3 rounded-lg' />`
                    : `<img width='100%' src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-157679608-1658432659.jpg" alt='Card Image' class='card-img-top md-3 rounded-lg' />`
            }
            <strong class='text-muted text-sm'>Created on: ${date.toDateString()}</strong>
            <h2 class='my-3'>${title}</h2>
            <p class='text-muted'>${description}</p>
        </div>
    `;
  };
  
//json to string for local storage
const updateLocalStorage = () => {
    localStorage.setItem(
        "tasky",
        JSON.stringify({
        tasks: state.taskList,
      })
    );
};
  
  
const loadInitialData = () => {
    const localStorageCopy = JSON.parse(localStorage.tasky);
  
    if (localStorageCopy) state.taskList = localStorageCopy.tasks;
  
    state.taskList.map((cardDate) => {
        taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate));
    });
};
  
  
// Load Initial Data
//string to json for rendering cards on screen when we reload site
//local storage -> browser storage not pc storage
const handleSubmit = (event) => {
   
    const id = `${Date.now()}`;
    const input = {
        url: document.getElementById("imageUrl").value,
        title: document.getElementById("taskTitle").value,
        type: document.getElementById("tags").value,
        description: document.getElementById("taskDescription").value,
    };
    if (input.title === "" || input.type === "" || input.description === "") {
        return alert("Please fill all the necessary fiels :-)");
    }
  
    taskContents.insertAdjacentHTML(
        "beforeend",
        htmlTaskContent({ ...input, id })
    );
    state.taskList.push({ ...input, id });
  
    updateLocalStorage();
  };
  
//open task
const openTask = (e) => {
    if (!e) e = window.event;
  
    const getTask = state.taskList.find(({ id }) => id === e.target.id);
    taskModal.innerHTML = htmlModalContent(getTask);
};
  
// delete task
const deleteTask = (e) => {
    if (!e) e = window.event;
  
    const targetId = e.target.id;
    
    const type = e.target.tagName;
    
    const removeTask = state.taskList.filter(({ id }) => id !== targetId);

  
    if (type === "BUTTON") {
        return e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
            e.target.parentNode.parentNode.parentNode
        );
    } else if (type === "I") {
        return e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
            e.target.parentNode.parentNode.parentNode.parentNode
        );
    }

    updateLocalStorage();
  };
  
// edit task
const editTask = (e) => {
    if (!e) e = window.event;
  
    const targetId = e.target.id;
    const type = e.target.tagName;
  
    let parentNode;
    let taskTitle;
    let taskDescription;
    let taskType;
    let submitButton;
  
    if (type === "BUTTON") {
        parentNode = e.target.parentNode.parentNode;
    } else {
        parentNode = e.target.parentNode.parentNode.parentNode;
    }
  
  
    taskTitle = parentNode.childNodes[3].childNodes[3];
    taskDescription = parentNode.childNodes[3].childNodes[5];
    taskType = parentNode.childNodes[3].childNodes[7].childNodes[1];
    submitButton = parentNode.childNodes[5].childNodes[1];

  
    taskTitle.setAttribute("contenteditable", "true");
    taskDescription.setAttribute("contenteditable", "true");
    taskType.setAttribute("contenteditable", "true");
  
    submitButton.setAttribute("onclick", "saveEdit.apply(this, arguments)");
    submitButton.removeAttribute("data-bs-toggle");
    submitButton.removeAttribute("data-bs-target");
    submitButton.innerHTML = "Save Changes";
  };
  
  // save edit
  const saveEdit = (e) => {
    if (!e) e = window.event;
  
    const targetId = e.target.id;
    const parentNode = e.target.parentNode.parentNode;
  
    const taskTitle = parentNode.childNodes[3].childNodes[3];
    const taskDescription = parentNode.childNodes[3].childNodes[5];
    const taskType = parentNode.childNodes[3].childNodes[7].childNodes[1];
    const submitButton = parentNode.childNodes[5].childNodes[1];
  
    const updateData = {
      taskTitle: taskTitle.innerHTML,
      taskDescription: taskDescription.innerHTML,
      taskType: taskType.innerHTML,
    };
    let stateCopy = state.taskList;
  
    stateCopy = stateCopy.map((task) =>
      task.id === targetId
        ? {
            id: task.id,
            title: updateData.taskTitle,
            description: updateData.taskDescription,
            type: updateData.taskType,
            url: task.url,
          }
        : task
    );

    state.taskList = stateCopy;
    updateLocalStorage();
  
    taskTitle.setAttribute("contenteditable", "false");
    taskDescription.setAttribute("contenteditable", "false");
    taskType.setAttribute("contenteditable", "false");
  
    submitButton.setAttribute("onclick", "openTask.apply(this, arguments)");
    submitButton.setAttribute("data-bs-toggle", "modal");
    submitButton.setAttribute("data-bs-target", "#showTask");
    submitButton.innerHTML = "Open Task";
  };
  
  // search
  const searchTask = (e) => {
    if (!e) e = window.event;
  
    while (taskContents.firstChild) {
      taskContents.removeChild(taskContents.firstChild);
    }
    const resultData = state.taskList.filter(({ title }) =>
      title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    resultData.map(
      (cardData) =>
        taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardData))
    );
  };
