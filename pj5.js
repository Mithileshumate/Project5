var addButton = document.getElementById("add")
var popup1 = document.getElementsByClassName("popup1")[0]
const page1 = document.getElementsByClassName("page1")[0]
const createpage = document.getElementsByClassName("createpage")[0]
const dropZone = document.getElementsByClassName("flex-container")[0]
const popup2 = document.getElementsByClassName("popup2")[0]
var currentElement;
const showNewPopup = (e) => {
    popup2.style.display = "flex";
    currentElement = e
}

const showNewPage = (card) => {
    page1.style.display = "none";
    createpage.append(card);
    createpage.style.display = "block";
}
// card 
const createCard = (heading) => {
    var cardElement = document.createElement("div");
    cardElement.className = "card"
    let h4 = document.createElement("h4")
    h4.innerText = heading
    h4.addEventListener("click", (e) => {
        showNewPage(e.target.parentNode)
    })
    let hr = document.createElement("hr")
    let d = document.createElement("span")
    d.className = "delete material-icons";
    d.innerText = "delete";
    let add = document.createElement("span")
    add.className = "material-icons";
    add.innerText = "add";
    add.addEventListener("click", (e) => {
        showNewPopup(e.target.parentNode)
    })
    d.addEventListener("click", (e) => {
        deleteCard(e)
    })
    cardElement.append(h4);
    cardElement.append(hr);
    cardElement.append(d);
    cardElement.append(add)
    dropZone.append(cardElement);
    popup1.style.display = "none";
}

const addNewItem = () => {
    let newValue = document.getElementById("head1").value
    let div = document.createElement("div")
    div.innerText = newValue
    let button = document.createElement("button")
    button.innerText = "Done"
    button.addEventListener("click", (e) => {
        e.target.style.display = "none";
        e.target.parentNode.style.textDecoration = "line-through";
    })
    div.append(button)
    currentElement.append(div)
    popup2.style.display = "none"
}


addButton.addEventListener("click", () => {
    popup1.style.display = "flex";
})

const deleteCard = (e) => {
    e.target.parentNode.style.display = "none"
}

const addCard = () => {
    let inputValue = document.getElementById("head").value;
    createCard(inputValue)
}