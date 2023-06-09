var n = []

function createLists() {
    var inputValue = document.getElementById("addNew").value
    if (inputValue === '') {
        alert("შეიყვანეთ ტექსტი!")
    } else {
        inputText = document.getElementById('addNew').value
        n.push(inputText)
        document.querySelector('#lists ol').innerHTML += "<li>" + inputText + "</li>"
    }
    document.getElementById("addNew").value = ""
}