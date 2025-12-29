let students = [];

function addStudent() {
    let name = document.getElementById("studentName").value;
    let grade = Number(document.getElementById("studentGrade").value);

    if (name === "" || isNaN(grade)) {
        alert("من فضلك أدخل البيانات كاملة");
        return;
    }

    students.push({ name, grade });
    showAll();
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
    let filtered = students.filter(s => s.grade >= min);
    display(filtered);
}

function display(arr) {
    let tbody = document.getElementById("output");
    tbody.innerHTML = "";

    arr.forEach(s => {
        let status = s.grade >= 50 ? "ناجح" : "ساقط";
        tbody.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.grade}</td>
                <td>${status}</td>
            </tr>
        `;
    });
}
