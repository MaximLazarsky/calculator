function calculate(targetObj) {
    let res
    if (targetObj.symbol === "+") {
        res = targetObj.firstNumber + targetObj.secondNumber
    } else if (targetObj.symbol === "-") {
        res = targetObj.firstNumber - targetObj.secondNumber
    } else if (targetObj.symbol === "*") {
        res = targetObj.firstNumber * targetObj.secondNumber
    } else if (targetObj.symbol === "/") {
        res = targetObj.firstNumber / targetObj.secondNumber
    } return res
}

function getCalculationEvent(eventValue) {
    if (eventValue === "=") {
        firstDisplay.innerText = calculate(targetObj)
        targetObj.firstNumber = +firstDisplay.innerText
        secondDisplay.innerText = ""
        symbolDisplay.innerText = ""
        targetObj.symbol = ""
    } else if (eventValue === "+" || eventValue === "-" || eventValue === "*" || eventValue === "/") {
        if (targetObj.symbol) {
            firstDisplay.innerText = calculate(targetObj)
            targetObj.firstNumber = +firstDisplay.innerText
            secondDisplay.innerText = ""
            symbolDisplay.innerText = `${eventValue}`
        }
        symbolDisplay.innerText = eventValue
        targetObj.symbol = symbolDisplay.innerText
    } else if (targetObj.symbol) {
        secondDisplay.innerText += eventValue
        targetObj.secondNumber = +secondDisplay.innerText
    } else if (eventValue === "C") {
        secondDisplay.innerText = ""
        symbolDisplay.innerText = ""
        firstDisplay.innerText = ""
    } else {
        firstDisplay.innerText += eventValue
        targetObj.firstNumber = +firstDisplay.innerText
    }
}

function mouseManager() {
    const keyboard = document.querySelector(".keyboard")
    keyboard.addEventListener("click", event => {
        getCalculationEvent(event.target.innerText)
    })
}

let targetObj = new Object()
const display = document.querySelector(".display")
const firstDisplay = document.createElement("div")
const secondDisplay = document.createElement("div")
const symbolDisplay = document.createElement("div")
display.appendChild(firstDisplay)
display.appendChild(symbolDisplay)
display.appendChild(secondDisplay)
mouseManager()
document.addEventListener("keydown", event => {
    getCalculationEvent(event.key)
})


