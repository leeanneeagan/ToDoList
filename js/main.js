/*was able to write base code 
and each peice  of the Written code
When it didn’t work or I hit a bug (error, mistake, or unexpected behavior).
Figured out what’s wrong and what i was doing incorrectly and got an explaination
and fixed it with ChatGpt debugging help*/
//commented out code I wrote that was bugged and errors 

// let addItem = document.getElementById("addItem");
// let addBtn = document.getElementById("addBtn");
// let toDoList = document.getElementById("placeToPutItem");

// document.getElementById('addItem').onclick = addItem
// document.getElementById('addBtn').onclick = addBtn
// document.getElementById('placeToPutItem').onclick = placeToPutItem
// document.getElementById('delete').onclick = deleteBtn



let addItem = document.getElementById("addItem");
let addBtn = document.getElementById("addBtn");
let toDoList = document.getElementById("placeToPutItem");




// function addItem() {
//   let itemText = document.getElementById("addItem").value;

//   if (itemText !== "") {
//     let li = document.createElement("li");
//     li.textContent = itemText;
//     }


addBtn.addEventListener("click", () => {
    let itemText = addItem.value;

    if (itemText.trim() === "") return; // prevent empty items

    let li = document.createElement("li");
    li.textContent = itemText;
}
// function deleteBtnFunction(li) {
//   let deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "X";

//   deleteBtn.addEventListener("click", function () {
//     li.remove();
//   });

//   return deleteBtn;

    
    // delete btn *ran through ChatGpt to learn mistakes and fix
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "10px";
  

    li.appendChild(deleteBtn);
    toDoList.appendChild(li);

  
    li.addEventListener("click", () => {
        li.style.textDecoration =
            li.style.textDecoration === "line-through" ? "none" : "line-through";
    });

   
    addItem.value = "";
});
