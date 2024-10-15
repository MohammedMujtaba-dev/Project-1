//acessing the input elemnt
let inputBox = document.querySelector("#inputBox");
// Acessing the ul list
let list = document.querySelector("#list");
// Acessing hte button
let button = document.querySelector("#Btn");

///Making a gunction , when button is clicked, it runs
let addItems = () => {
  //Acessing hte value of input with trim for no spaces
  let task = inputBox.value.trim();
  //if user leave it blank alert msg
  if (task === "") {
    alert("Need to add a task");
  } else {
    // creating a li element
    let li = document.createElement("li");
    // gicing value to li element with icons class toogle and delete
    li.innerHTML = `<i class="fa-regular fa-circle toggle"></i><span class="task-text">${task}</span><i class="fa-solid fa-circle-xmark delete"></i>`;

    list.appendChild(li);
    inputBox.value = "";

    li.querySelector(".delete").addEventListener("click", function () {
      li.remove(); // Remove the list item when delete icon is clicked
    });
    li.querySelector(".toggle").addEventListener("click", function () {
      let icon = li.querySelector(".toggle");
      let taskText = li.querySelector(".task-text");

      // Toggle the class between fa-circle and fa-circle-check
      if (icon.classList.contains("fa-circle")) {
        icon.classList.remove("fa-circle");
        icon.classList.add("fa-circle-check");
        taskText.style.textDecoration = "line-through";
        li.style.backgroundColor = "rgba(250, 100, 204, 1)";
      } else {
        icon.classList.remove("fa-circle-check");
        icon.classList.add("fa-circle");
        taskText.style.textDecoration = "none";
        li.style.backgroundColor = "";
      }
    });
  }
};
