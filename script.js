// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
    // TODO: Get user input to create and return an array of employee objects

    const employeesArray = [];

    let addmore = true;

    while (addmore) {
        const firstName = prompt("Enter first name:");
        const lastName = prompt("Enter last name:");
        const salary = prompt("Enter salary: $")

        const newEmployee = { firstName, lastName: lastName, salary: parseInt(salary) }; // salary: parseFloat(salary).toFixed(2)
        // firstName is the same as firstName: firstName. It is assigning the key name based on the variable name. firstName alone is the value.

        employeesArray.push(newEmployee);

        addmore = confirm("Do you want to add another employee?");
    }

    console.log(employeesArray);
    return employeesArray;
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
    // TODO: Calculate and display the average salary

    let numberOfEmployees = employeesArray.length;
    let salarysum = 0; //Set it equal to zero to avoid error when trying to add to an undefined.

    for (let i = 0; i < numberOfEmployees; i++) { // note: or could do i <= n-1
        salarysum += employeesArray[i].salary;
    }

    let salaryavg = salarysum / numberOfEmployees;

    console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${salaryavg.toFixed(2)}.`);
    return salaryavg;

}


// Select a random employee
const getRandomEmployee = function (employeesArray) {
    // TODO: Select and display a random employee
    const index = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[index];

    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

}





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];

        const newTableRow = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement("td");
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
}

const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    });

    displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
