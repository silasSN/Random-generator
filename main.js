const button = document.querySelector(".choiceButton");
const choice = document.querySelector(".showRandomChoice");
console.log("hello");
button.addEventListener("click", pickRandomChoice);

const list = [
    "A",
    "B"
]

function pickRandomChoice () {
    const randomList = Math.floor(Math.random() * list.length);
    const computerChoice = list[randomList];
    choice.innerHTML = `${computerChoice}`
    console.log("hi");
}