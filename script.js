/* const userinput=document.getElementById("registration-form");
const updatetable=document.getElementById("update-table").getElementsByTagName('tbody')[0];
//console.log(userinput);
//console.log(updatetable);
function Adddata(){
    const createrow=document.createElement("tr");
    const dataelement=document.createElement("td");
   const newrow=createrow.append(dataelement);
   console.log(newrow);
   document.body.updatetable.appendChild(newrow);
     */

document.getElementById("registration-form").addEventListener("submit", (e) => {
    e.preventDefault();
    //get individual field value
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;
  /*  const food= (document.querySelectorAll('input[name="food"]'))
   console.log(food) */
   const food=document.querySelectorAll(".foodcheck");
   //console.log(food);
   const fooddata=Array.from(food).filter((checkbox)=>checkbox.checked).map((data)=>data.value).join(',');
   //console.log(fooddata);
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const table = document.getElementById("update-table").getElementsByTagName('tbody')[0];
    const tablerow = table.insertRow();

    const cell1 = tablerow.insertCell(0);
    const cell2 = tablerow.insertCell(1);
    const cell3 = tablerow.insertCell(2);
    const cell4 = tablerow.insertCell(3);
    const cell5 = tablerow.insertCell(4);
    const cell6 = tablerow.insertCell(5);
    const cell7 = tablerow.insertCell(6);
    const cell8 = tablerow.insertCell(7);
    const cell9 = tablerow.insertCell(8);

    cell1.textContent = firstname;
    cell2.textContent = lastname;
    cell3.textContent = email;
    cell4.textContent = address;
    cell5.textContent = pincode;
    cell6.textContent = gender;
    cell7.textContent = fooddata;
    cell8.textContent = state;
    cell9.textContent = country;

    document.getElementById("registration-form").reset();
}) 