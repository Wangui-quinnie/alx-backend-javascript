interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

let table = document.createElement('table');

for (let i = 0; i < studentsList.length; i++) {
  let row = table.insertRow();
  let name = row.insertCell();
  let location = row.insertCell();
  name.innerHTML = studentsList[i].firstName;
  location.innerHTML = studentsList[i].location;
}

document.body.appendChild(table);
