let students = [];
let editingIndex = -1; 

function addOrUpdateStudent() {
    let name = document.getElementById("studentName").value.trim();
    let grade = Number(document.getElementById("studentGrade").value);

    if (name === "" || isNaN(grade) || grade < 0 || grade > 100) {
        alert("Please enter a valid name and a score between 0 and 100");
        return;
    }

    if (editingIndex === -1) {
       
        students.push({ name, grade });
    } else {
      
        students[editingIndex] = { name, grade };
        editingIndex = -1;
        document.getElementById("addBtn").textContent = "Add";
    }

    clearInputs();
    showAll();
}

function editStudent(index) {
    let student = students[index];
    document.getElementById("studentName").value = student.name;
    document.getElementById("studentGrade").value = student.grade;
    document.getElementById("addBtn").textContent = "update";
    editingIndex = index;
  
}

function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this student?")) {
        students.splice(index, 1);
        showAll();
    }
}

function clearInputs() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentGrade").value = "";
}

function showAll() {
    display(students);
}

function showPassed() {
    let passed = students.filter(s => s.grade >= 50);
    display(passed);
}

function showFailed() {
    let failed = students.filter(s => s.grade < 50);
    display(failed);
}

function filterByGrade() {
    let min = Number(document.getElementById("filterGrade").value);
    if (isNaN(min)) {
        alert("Enter a correct score");
        return;
    }
    let filtered = students.filter(s => s.grade >= min);
    display(filtered);
}

function display(arr) {
    let tbody = document.getElementById("output");
    tbody.innerHTML = "";

    arr.forEach((s, index) => {
        let status = s.grade >= 50 ? "successful" : "fail";
        let statusClass = s.grade >= 50 ? "text-success" : "text-danger";

        tbody.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.grade}</td>
                <td class="${statusClass}"><strong>${status}</strong></td>
                <td>
                    <button class="btn-edit" onclick="editStudent(${index})">update</button>
                    <button class="btn-delete" onclick="deleteStudent(${index})">delete</button>
                </td>
            </tr>
        `;
    });
}


showAll();