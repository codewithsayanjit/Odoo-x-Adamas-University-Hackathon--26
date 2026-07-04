let employees = JSON.parse(localStorage.getItem("users")) || [];

const tableBody = document.getElementById("employeeTable");
const cardGrid = document.getElementById("cardGrid");

function renderEmployees() {
    tableBody.innerHTML = "";
    cardGrid.innerHTML = "";

    employees.forEach(emp => {

        // TABLE
        tableBody.innerHTML += `
        <tr>
            <td><img src="https://randomuser.me/api/portraits/men/32.jpg" width="40"></td>
            <td>${emp.employeeId}</td>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.role}</td>
            <td><button onclick="deleteEmployee('${emp.email}')">Delete</button></td>
        </tr>
        `;

        // CARD
        cardGrid.innerHTML += `
        <div class="card">
            <h3>${emp.name}</h3>
            <p>${emp.email}</p>
            <span>${emp.role}</span>
        </div>
        `;
    });
}

function deleteEmployee(email) {
    employees = employees.filter(emp => emp.email !== email);
    localStorage.setItem("users", JSON.stringify(employees));
    renderEmployees();
}

renderEmployees();