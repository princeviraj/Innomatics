
let amount=document.getElementById("amount");
let cat=document.getElementById("category");
let desc=document.getElementById("desc");
let date=document.getElementById("date");
let radio=document.getElementById("radio");
let body=document.getElementById("body");
function submitbody(event){
    event.preventDefault()
    if (cat.value === "--Select option--" || amount.value === "" || desc.value === "" || date.value === "") {
        alert("Please fill all fields!");
        return;
    }
let tbody=document.createElement("tr");
let td2=document.createElement("td");
td2.textContent=cat.value;
tbody.appendChild(td2);
let td1=document.createElement("td");
td1.textContent=amount.value;
tbody.appendChild(td1);
let td3=document.createElement("td");
td3.textContent=desc.value;
tbody.appendChild(td3);
let td4=document.createElement("td");
td4.textContent=date.value;
tbody.appendChild(td4);
let dlt=document.createElement("button");
let td6=document.createElement("td");
dlt.textContent="delete";
dlt.style.color="red";
dlt.style.paddingLeft="25px";
dlt.style.paddingRight="25px";
dlt.style.borderRadius="5px";
dlt.style.cursor = "pointer";
dlt.onclick=function(){
    tbody.remove();
};
td6.appendChild(dlt);
tbody.appendChild(td6);
body.appendChild(tbody);
cat.value = "--Select option--";
amount.value = "";
desc.value = "";
date.value = "";

}
