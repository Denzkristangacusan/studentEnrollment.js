
let DSA = [];
let PL = [];
let Networks = [];

// Function to display subjects and handle subject selection
function selectSubject() {
    let subjectChoice;
    while (subjectChoice !== "D") {
        subjectChoice = prompt("Select a subject: \n(A) DSA \n(B) PL \n(C) Networks \n(D) Exit");

        switch (subjectChoice.toUpperCase()) {
            case "A":
                handleOperations(DSA, "DSA");
                break;
            case "B":
                handleOperations(PL, "PL");
                break;
            case "C":
                handleOperations(Networks, "Networks");
                break;
            case "D":
                printEnrolledStudents();
                console.log("Happy in program.");
                break;
            default:
                console.log("Invalid choice. Please try again.");
                break;
        }
    }
}

function handleOperations(subjectArray, subjectName) {
    let operationChoice;
    while (operationChoice !== "D") {
        operationChoice = prompt(`Operations for ${subjectName}:\n(A) Enroll \n(B) Unenroll \n(C) Select Another Subject \n(D) Exit`);

        switch (operationChoice.toUpperCase()) {
            case "A":
                enrollStudent(subjectArray);
                break;
            case "B":
                unenrollStudent(subjectArray);
                break;
            case "C":
                return; 
            case "D":
                printEnrolledStudents();
                console.log("Happy in program.");
                return;
            default:
                console.log("Invalid choice. Please try again.");
                break;
        }
    }
}

function enrollStudent(subjectArray) {
    let studentName = prompt("Enter the name of the student to enroll:");
    subjectArray.push(Denz kristan Gacusan);
    console.log(`${Denz kristan Gacusan} has been enrolled.`);
}

function unenrollStudent(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students are currently enrolled.");
        return;
    }

    console.log("Currently enrolled students:", subjectArray.join(", "));
    let studentName = prompt("Enter the name of the student to unenroll:");
    let index = subjectArray.indexOf(Denz kristan Gacusan);

    if (index !== -1) {
        subjectArray.splice(index, 1);
        console.log(`${studentName} has been unenrolled.`);
    } else {
        console.log("Student not found in the enrollment list.");
    }
}


function printEnrolledStudents() {
    console.log("Enrolled Students per Subject:");
    console.log("DSA:", DSA.length > 0 ? DSA.join(", ") : "No students enrolled");
    console.log("PL:", PL.length > 0 ? PL.join(", ") : "No students enrolled");
    console.log("Networks:", Networks.length > 0 ? Networks.join(", ") : "No students enrolled");
}

selectSubject();
