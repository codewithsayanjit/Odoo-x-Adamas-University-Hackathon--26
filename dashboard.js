let employees = [
  { id: "EMP001", name: "Amrick Choudhury", email: "amrick@example.com", role: "EMPLOYEE" },
  { id: "EMP002", name: "John Doe", email: "john@example.com", role: "MANAGER" },
  { id: "EMP003", name: "Sara Khan", email: "sara@example.com", role: "HR" }
];

function loadEmployees(data) {
  const table = document.getElementById("employeeTable");
  table.innerHTML = "";

  data.forEach(emp => {
    const row = `
      <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.role}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

function updateStats() {
  document.getElementById("totalEmployees").innerText = employees.length;
}

function initDashboard() {
  loadEmployees(employees);
  updateStats();
}

initDashboard();