// Add Element in the list
let element = document.getElementById("addForm");
element.addEventListener("submit", (e) => {
	e.preventDefault();
	let textArea = document.getElementById("item").value;
	let targetUl = document.getElementById("items");
	let createdLi = document.createElement("li");
	createdLi.className = "list-group-item";
	createdLi.appendChild(document.createTextNode(textArea));
	let createdBtn = document.createElement("button");
	createdBtn.appendChild(document.createTextNode("x"));
	createdBtn.className = "btn btn-danger btn-sm float-right delete";
	createdLi.appendChild(createdBtn);
	targetUl.appendChild(createdLi);
});

// removeLi
let removeElement = document.getElementById("items");
removeElement.addEventListener("click", (e) => {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are u sure want to delete This")) {
			deletedElement = e.target.parentElement;
			removeElement.removeChild(deletedElement);
		}
	}
});

// filter element
let filter = document.getElementById("filter");
filter.addEventListener("keyup", search);
function search(e) {
	let targetText = e.target.value.toLowerCase();
	let targetLi = document.getElementsByTagName("li");
	Array.from(targetLi).forEach((item) => {
		let itemName = item.firstChild.textContent;
		console.log(itemName);
		if (itemName.toLowerCase().indexOf(targetText) != -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}
