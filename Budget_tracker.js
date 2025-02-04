let amount = document.getElementById("amount");
let cat = document.getElementById("category");
let desc = document.getElementById("desc");
let date = document.getElementById("date");
let body = document.getElementById("body");

function submitbody(event) {
    event.preventDefault();

    if (cat.value === "--Select option--" || amount.value === "" || desc.value === "" || date.value === "") {
        alert("Please fill all fields!");
        return;
    }

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${cat.value}</td>
        <td>${amount.value}</td>
        <td>${desc.value}</td>
        <td>${date.value}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    body.appendChild(row);

    
    cat.value = "--Select option--";
    amount.value = "";
    desc.value = "";
    date.value = "";
}

function deleteRow(button) {
    button.parentElement.parentElement.remove();
}


