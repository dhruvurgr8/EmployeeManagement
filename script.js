const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener("click", showModal);
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector(".form");
const deleteBtn = document.createElement("button");
deleteBtn.className = "deleteBtn";
// deleteBtn.innerHTML = <i class="fa-solid fa-trash"></i>;
let incre = 1;
function increId() {
  return incre++;
}
const tbody = document.querySelector(".tbody");
function toggle() {
  modal.classList.toggle("hide-modal");
  modal.classList.toggle("show-modal");
}
function showModal() {
  toggle();
}
function closeModal() {
  toggle();
}
closeBtn.addEventListener("click", closeModal);
function handleSubmit(e) {
  e.preventDefault();
  const obj = {
    Name: form.employeeName.value,
    gender: form.gender.value,
    role: form.role.value,
    doj: form.dateOfJoining.value,
    id: increId(),
  };
  showData(obj);
  console.log(obj);
  form.reset();
  toggle();
}

form.addEventListener("submit", handleSubmit);

function showData(employeeDetails) {
  const row = document.createElement("tr");
  for (let keys in employeeDetails) {
    const cell = document.createElement("td");
    cell.innerText = employeeDetails[keys];
    row.appendChild(cell);
  }
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  deleteBtn.className = "material-icons";

  deleteBtn.addEventListener("click", deleteData);

  const editBtn = document.createElement("button");
  editBtn.innerText = "edit";
  editBtn.className = "material-icons";
  const options = document.createElement("td");
  options.append(editBtn, deleteBtn);
  row.appendChild(options);

  tbody.appendChild(row);
}
function deleteData(e) {
  const deleteButton = e.target;
  const td = deleteButton.parentNode;
  const tr = td.parentNode;
  tr.remove();
}
