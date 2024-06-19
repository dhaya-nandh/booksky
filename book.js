var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup")
//add button
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})
//cancel
var cancel = document.getElementById("cancel")

cancel.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})
//add element
var constainer = document.querySelector(".constainer")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var bookdescription = document.getElementById("book-description")
//add element
addbook.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-constainer")
    div.innerHTML = `<h3>${booktitle.value}</h3>
<h5>${bookauthor.value}</h5>
<p>${bookdescription.value}</p>
<button onclick="del(event)">delete</button>`
    constainer.appendChild(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})
//del
function del(event) {
    event.target.parentElement.remove()
}