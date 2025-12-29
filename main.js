
let students = ["Ahmed", "Sara", "Omar", "Mona", "Ali"];
let grades = [85, 45, 70, 95, 30];


function showStudents() {
    let result = "";

    for (let i = 0; i < students.length; i++) {
        let status = grades[i] >= 50 ? "ناجح" : "ساقط";
        result += `${students[i]} : ${grades[i]} - ${status}<br>`;
    }

    document.getElementById("output").innerHTML = result;
}


function calculateAverage() {
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }

    let average = sum / grades.length;
    document.getElementById("output").innerHTML =
        `متوسط الدرجات = ${average.toFixed(2)}`;
}

function showMinMax() {
    let max = grades[0];
    let min = grades[0];

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > max) max = grades[i];
        if (grades[i] < min) min = grades[i];
    }

    document.getElementById("output").innerHTML =
        `أعلى درجة = ${max}<br>أقل درجة = ${min}`;
}


function searchStudent() {
    let name = document.getElementById("searchName").value;
    let found = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i].toLowerCase() === name.toLowerCase()) {
            document.getElementById("output").innerHTML =
                `${students[i]} درجته = ${grades[i]}`;
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById("output").innerHTML =
            "الطالب غير موجود";
    }
}
