
const container = document.getElementById("container")
console.log(container);

container.addEventListener("click", (e) => {
    if ( e.target.className === "remove-button") {
        e.target.parentElement.remove()
    }
})

