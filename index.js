let addButton = document.getElementById("add-button");
let clearButton = document.getElementById("clear-button");
let input = document.getElementById("input");
let todoContainer = document.getElementById("todo-container");

let regExp = new RegExp(/\w/g);

addButton.onclick = () => {
	if (input.value.length == 0 || !regExp.test(input.value)) {
		alert("Please type your Task");
	} else {
		todoContainer.innerHTML += `
        <div class="task">
            <p>
                ${input.value}
            </p>
            <button class="delete-button">
                X
            </button>
        </div>
    `;
		localStorage.setItem("todos", JSON.stringify(todoContainer.innerHTML));
	}

	let tasks = document.querySelectorAll(".delete-button");

	for (let i = 0; i < tasks.length; i++) {
		tasks[i].onclick = () => {
			tasks[i].parentNode.remove();
		};
	}
};

clearButton.onclick = () => {
	localStorage.clear();
	console.log("clear");
};

todoContainer.innerHTML = JSON.parse(localStorage.getItem("todos"));
