// Initial Set-Up
transitionEffect()


// Functions
function transitionEffect() {
    var but = document.querySelector("button");
    var bod = document.querySelector("body");
    but.onclick = (event) => {
         bod.classList.toggle("transition");
    }
}