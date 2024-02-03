const createBtn = document.querySelector(".create-btn");
createBtn.addEventListener("click", showModal);
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector(".form");
let incre = 1;

function increId() {
  return incre++;
}

const tbody = document.querySelector(".tbody");

function toggleModal() {
  modal.classList.toggle("hide-modal");
  modal.classList.toggle("show-modal");
}

function showModal() {
  toggleModal();
}

function closeModal() {
  toggleModal();
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
  form.reset();
  toggleModal();
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
  const editForm = document.querySelector("#edit-form");
  const closeEditBtn = document.querySelector(".close-btn-edit");
  const editModal = document.querySelector(".edit-modal");
  editBtn.addEventListener("click", (e) => {
    editModal.classList.remove("hide-modal");
    closeEditBtn.addEventListener("click", () => {
      editModal.classList.add("hide-modal");
    });
  });
  const editEmployeeName = document.querySelector("#editEmployeeName");
  const editGender = document.querySelector("#editGender");
  const editRole = document.querySelector("#editRole");
  const editDateOfJoining = document.querySelector("#editDateOfJoining");
  editEmployeeName.value = employeeDetails.Name;
  editGender.value = employeeDetails.gender;
  editRole.value = employeeDetails.role;
  editDateOfJoining.value = employeeDetails.doj;
  console.log(editEmployeeName);
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedValues = {
      Name: editEmployeeName.value,
      gender: editGender.value,
      role: editRole.value,
      doj: editDateOfJoining.value,
    };
    row.cells[0].textContent = updatedValues.Name;
    row.cells[1].textContent = updatedValues.gender;
    row.cells[2].textContent = updatedValues.role;
    row.cells[3].textContent = updatedValues.doj;
    console.log(updatedValues);
    editModal.classList.add("hide-modal");
  });
}

function deleteData(e) {
  const deleteButton = e.target;
  const td = deleteButton.parentNode;
  const tr = td.parentNode;
  tr.remove();
}

// Edit functionality
