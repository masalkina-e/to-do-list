let username = prompt("Введите свое имя: ")
let count = 0
let myTitle = document.getElementById("title")

if (username) {

myTitle.innerHTML = "Ваш список дел," + " " + username
} else {
  myTitle.innerHTML = "Список дел анонимного пользователя"
}
            
function addTask() {

count = count + 1
let myInput = document.getElementById("input")
let task = input.value
let myList = document.getElementById("list")
let myError = document.getElementById("error")

if (count > 5) {
myError.innerHTML = "Можно ввести только 5 дел!"
return
} 

myList.innerHTML = myList.innerHTML + "<li>" + task + "</li>"
input.value = "" 
}