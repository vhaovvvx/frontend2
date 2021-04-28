const todoApi = "https://jsonplaceholder.typicode.com/todos";

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
let selectedId = undefined;

function clickHandler() {
  todoList().then((todolists) => {
    todolists.forEach((todo) => {
      todoLists = `
                <li class="todo-items" id=todo-items-${todo.id} data-id=${todo.id}>
                ${todo.userId} ${todo.id} ${todo.title} <b>${todo.completed}</b>    <span class="close" onclick=handleDeleteItem(${todo.id})>X</span>
                </li>
                `;
      document.getElementById("myUL").innerHTML += todoLists;
    });

    const liElement = document.querySelectorAll("li");
    liElement.forEach((lielm) => {
      lielm.addEventListener("click", function (e) {
        e.target.classList.toggle("checked");
        // console.log(selectedId);
        // const selectedUser = todolists.find((todo) => todo.id == selectedId);
        // console.log(selectedUser);
      });
    });
  });
}

function handleDeleteItem(id) {
  var options = {
    method: "DELETE",
    Headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  fetch(todoApi + "/" + id, options)
    .then((res) => res.json())
    .then((todo) => {
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
      let liHtmls = "";
      liHtmls += `<li class="todo-items">
      ${elementsAdd.name} ${elementsAdd.id}
      </li>`;
      document.getElementById("myUL").innerHTML += liHtmls;
    });
}

function handleCreate() {
  let createBtn = document.querySelector(".addBtn");
  createBtn.onclick = function () {
    let name = document.querySelector('input[name="name"]').value;
    var data = {
      name: name,
    };

    creatElement(data);
  };
}
handleCreate();
