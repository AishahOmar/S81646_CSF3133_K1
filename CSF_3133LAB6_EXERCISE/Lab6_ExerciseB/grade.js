// Error 1 (grade.html, Line 9): Missing 'return' in onsubmit="return checkMark()", causing the form to reload the page and erase the result.
// Error 2 (grade.html, Line 17): 'showtable()' had wrong capitalization; changed to 'showTable()' to match the JS function name.
// Error 3 (grade.html, Line 19): Script src pointed to 'grades.js' instead of 'grade.js'.
// Error 4 (grade.js, Line 5): Used single '=' (assignment) instead of '===' (comparison) in 'if (name = "")'.
// Error 5 (grade.js, Line 9): Misspelled 'isNan()' instead of 'isNaN()'.
// Error 6 (grade.js, Line 14): Used '&&' (AND) instead of '||' (OR) in 'mark < 0 || mark > 100'.
// Error 7 (grade.js, Line 28): Misspelled 'getElementByID' with a capital D instead of 'getElementById'.
// Error 8 (grade.js, Line 30): Used British spelling 'style.colour' instead of 'style.color'.
// Error 9 (grade.js, Line 31): 'return true;' submitted the form and cleared the page; changed to 'return false;'.
// Error 10 (grade.js, Line 38): Loop started at 'i = 1' instead of 'i = 0', skipping the first grade (A).
// Error 11 (grade.js, Line 42): Misspelled 'innerHtml' instead of 'innerHTML'.

// Function to validate input and calculate the student's grade
function checkMark() {
    let name = document.forms["gradeForm"]["name"].value.trim();
    let mark = document.forms["gradeForm"]["mark"].value.trim();

    // Check if name is empty
    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Extension: Check if mark field is empty
    if (mark === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check if mark is not a number
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = parseInt(mark);

    // Check if mark is outside 0 to 100
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Determine grade and set text colour according to grade
    let grade;
    let gradeColor;

    if (mark >= 80) {
        grade = "A";
        gradeColor = "green";
    } else if (mark >= 65) {
        grade = "B";
        gradeColor = "green";
    } else if (mark >= 50) {
        grade = "C";
        gradeColor = "orange";
    } else {
        grade = "F";
        gradeColor = "red";
    }

    // Display the grade result and apply colour
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = name + " got grade " + grade;
    resultElement.style.color = gradeColor;

    // Extension: Display the date and time the grade was checked
    document.getElementById("checkedTime").innerHTML = "Checked on: " + new Date();

    // Return false to stop the form from refreshing the page
    return false;
}

// Extension: Generate a random whole number from 0 to 100 into the mark field
function generateRandomMark() {
    let randomMark = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = randomMark;
}

// Function to display all four grades in a table
function showTable() {
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];
    let tableHTML = "<table><tr><th>Grade</th><th>Mark Range</th></tr>";

    // Fixed loop to start at index 0 so Grade A is shown
    for (let i = 0; i < grades.length; i++) {
        tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
    }

    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
}
