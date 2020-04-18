const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo"; // LS: Local Storage

let toDoArr = [];

function deleteToDo(event) {
  // console.log(event.target.parentNode);
  // console.dir(event.target) 으로 먼저 id 값을 누가 가지고 있는지 확인하고 찾음.
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDoArr.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); // 같지 않은 것을 다시 배열로 만든다.
  });
  toDoArr = cleanToDo; // 배열에 다시 넣는다.
  saveToDo(); // 저장
}

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDoArr)); // JSON.stringfy : object -> string
}

function paintToDo(text) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDoArr.length + 1;
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(deleteBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDoArr.push(toDoObj);
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; // 웹페이에서 보면 enter 시 input의 값이 사라진다.
}

function loadToDo() {
  const loadedToDo = localStorage.getItem(TODO_LS);
  if (loadedToDo !== null) {
    const parsedToDo = JSON.parse(loadedToDo);
    parsedToDo.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
