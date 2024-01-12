interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Williams",
    lastName: "Akanni",
    age: 24,
    location: "Nigeria"
}

const student2: Student = {
    firstName: "Bot",
    lastName: "Bot",
    age: 0,
    location: "BOt world"
}

const studentsList: Student[] = [student1, student2];

const createTable : HTMLTableElement = document.createElement('table');
const tableHead : HTMLTableSectionElement = document.createElement('thead');

const headerRow: HTMLTableRowElement = document.createElement('tr');
const headerTitle1: HTMLTableCellElement = document.createElement('th');
const headerTitle2: HTMLTableCellElement = document.createElement('th');
headerTitle1.textContent = 'Student'
headerTitle2.textContent = 'Location'

headerRow.appendChild(headerTitle1);
headerRow.appendChild(headerTitle2);

tableHead.appendChild(headerRow);

const tableBody : HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
    const row : HTMLTableRowElement = document.createElement('tr');

    const studentCell : HTMLTableCellElement = document.createElement('td');
    const locationCell : HTMLTableCellElement = document.createElement('td');
    studentCell.textContent = `${student.firstName} ${student.lastName}`;
    locationCell.textContent = student.location;
    row.appendChild(studentCell);
    row.appendChild(locationCell);

    tableBody.appendChild(row);
});

createTable.appendChild(tableHead);
createTable.appendChild(tableBody);

document.body.appendChild(createTable);