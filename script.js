var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = null;
var btn = null;

function inputLength() {
	return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
	ul.appendChild(li);
	li.appendChild(document.createTextNode(input.value + "  "));
	li.addEventListener("click", doneToggle)
	li.appendChild(document.createElement("button")).textContent= "x";
	li.setAttribute("style", "width: fit-content");
	li.firstElementChild.addEventListener("click", deleteItem);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneToggle(event) {
	event.target.classList.toggle("done");
}

function deleteItem(){
	this.parentNode.remove()
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

