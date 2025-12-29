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
    let result = "";
    students.forEach(s => {
        let status = s.grade >= 50 ? "ناجح" : "ساقط";
        result += `${s.name} : ${s.grade} - ${status}<br>`;
    });
    document.getElementById("output").innerHTML = result;
}


function filterByGrade() {
    let minGrade = Number(document.getElementById("filterGrade").value);

    let filtered = students.filter(s => s.grade >= minGrade);

    display(filtered);
}


function showPassed() {
    let passed = students.filter(s => s.grade >= 50);
    display(passed);
}


function showFailed() {
    let failed = students.filter(s => s.grade < 50);
    display(failed);
}


function display(arr) {
    if (arr.length === 0) {
        document.getElementById("output").innerHTML = "لا توجد نتائج";
        return;
    }

    let result = "";
    arr.forEach(s => {
        result += `${s.name} : ${s.grade}<br>`;
    });

    document.getElementById("output").innerHTML = result;
}
