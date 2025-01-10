// dichiarazione variabili
// variabile img
const luce = document.getElementById("luce")
// variabile bottone
const bottone = document.querySelector(".bottone")

console.log(luce)

// quando clicco sul bottone la lampadina si accende
bottone.addEventListener("click", luceAccesa)


// Funzioni
function luceAccesa() {
    return luce.src= "./img/yellow_lamp.png"
}

