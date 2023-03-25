const $ = (id) => document.getElementById(id);

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
empForm = document.querySelector("#addForm");
empTable = document.querySelector("#employees");
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
count = 0;

// ADD EMPLOYEE
empForm.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();

  // GET THE VALUES FROM THE TEXT BOXES
  empId = $("id").value;
  empName = $("name").value;
  ext = $("extension").value;
  email = $("email").value;
  dept = $("department").value;

  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

  let row = empTable.insertRow();

  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  let cellID = row.insertCell();
  let cellName = row.insertCell();
  let cellExt = row.insertCell();
  let cellEmail = row.insertCell();
  let cellDept = row.insertCell();
  let cellDelete = row.insertCell();

  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  cellID.appendChild(document.createTextNode(empId));
  cellName.appendChild(document.createTextNode(empName));
  cellExt.appendChild(document.createTextNode(ext));
  cellEmail.appendChild(document.createTextNode(email));
  cellDept.appendChild(document.createTextNode(dept));

  // CREATE THE DELETE BUTTON
  cellDelete.className = "btn btn-danger btn-sm float-right";
  cellDelete.appendChild(document.createTextNode("X"));

  empTable.appendChild(row);

  // RESET THE FORM
  empForm.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  $("id").focus();

  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  $("empCount").value = `(${++count})`;
});

// DELETE EMPLOYEE

empTable.addEventListener("click", (e) => {
  console.log(e.target.parentElement.rowIndex);
  if (e.target.parentElement.rowIndex != 0) {
    let empId = e.target.parentElement.cells[0].innerText;
    let empName = e.target.parentElement.cells[1].innerText;
    if (confirm(`Do you want to delete employee \n ID: ${empId} Name: ${empName}`)) {
      empTable.deleteRow(e.target.parentNode.rowIndex);
      $("empCount").value = `(${--count})`;
    }
  }
});
