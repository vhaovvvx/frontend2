const renderElement = document.getElementById("myUL");
let completed = undefined;
const todoApi = "http://localhost:3000/todo";
const createBtn = document.querySelector(".addBtn");

function todoList() {
  return fetch(todoApi).then((res) => res.json());
}

start = () => {
  clickHandler();
  todoList();
};

start();

let todoLists = "";
let i = 0;

function clickHandler() {
  todoList()
    .then((todolists) => {
      todolists.forEach((todo) => {
        todoLists = `
                  <li class="todo-items" id=todo-items-${todo.id} value=${todo.id}>
                    ${todo.userId} ${todo.id} ${todo.title} <b>${todo.completed}</b>
                    <span class="edit" id="edit" onclick=handleEditItem(${todo.id})>Edit</span>
                    <span class="close" onclick=handleDeleteItem(${todo.id})>X</span>
                  </li>
                  `;
        renderElement.innerHTML += todoLists;
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();
}

renderElement.addEventListener("click", function (e) {
  const id = e.target.value;
  e.preventDefault();
  var checked = e.target.classList.toggle("checked");
  if (checked == true) {
    completed = false;
  } else if (checked == false) {
    completed = true;
  }
  let optionss = {
    method: "PATCH",
    body: JSON.stringify({
      completed: completed,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch(todoApi + "/" + id, optionss)
    .then((res) => res.json())
    .then((a) => {
      // location.reload();
    });
});

function handleDeleteItem(id) {
  var options = {
    method: "DELETE",
    Headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch(todoApi + "/" + id, options)
    .then((res) => res.json())
    .then(() => {
      let deletee = document.querySelector("#todo-items-" + id);
      deletee.remove();
    });
}

function creatElement(data) {
  var optionss = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch(todoApi, optionss)
    .then((res) => res.json())
    .then((elementsAdd) => {
      const dataArrNew = [];
      dataArrNew.push(elementsAdd);
      location.reload();
      // clickHandler(todolists);
    });
}

function handleCreate() {
  createBtn.onclick = function () {
    let name = document.querySelector('input[name="name"]').value;

    var data = {
      title: name,
      userId: "",
      id: "",
      completed: "",
    };
    let changDefault = document.querySelector("#myInput");
    console.log(changDefault);
    changDefault.value = "";
    creatElement(data);
  };
}
handleCreate();

function handleEditItem(id) {
  let editButtons = prompt("Enter content Edit");
  let optionss = {
    method: "PATCH",
    body: JSON.stringify({
      title: editButtons,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch(todoApi + "/" + id, optionss)
    .then((res) => res.json())
    .then(() => location.reload());
}
