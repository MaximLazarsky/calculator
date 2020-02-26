function calculate(string) {
    let res
    let targetArr = []
    if (string.includes("+")) {
        targetArr = string.split("+")
        res = +targetArr[0] + +targetArr[1]
    } else if (string.includes("-")) {
        targetArr = string.split("-")
        res = +targetArr[0] - +targetArr[1]
    } else if (string.includes("*")) {
        targetArr = string.split("*")
        res = +targetArr[0] * +targetArr[1]
    } else if (string.includes("/")) {
        targetArr = string.split("/")
        res = +targetArr[0] / +targetArr[1]
    } return res//Math.round(res)
}

function removeArrElementsClass(elementArr, className) {
    for (let i = 0; i < elementArr.length - 1; i++) {
        elementArr[i].classList.remove(`${className}`)
    }
}

function addArrElementsClass(elementArr, className) {
    for (let i = 0; i < elementArr.length - 1; i++) {
        elementArr[i].classList.add(`${className}`)
    }
}

function getCalculationMouseManager() {
    const keyboard = document.querySelector(".keyboard")
    const display = document.querySelector(".display")
    keyboard.addEventListener("click", event => {
        let value = event.target.innerText
        let symbol = document.querySelectorAll(".symbol")
        if (event.target.classList[event.target.classList.length - 1] === "act") {
            display.innerText = calculate(display.innerText)
            removeArrElementsClass(symbol, "secondAct")
        } else if (event.target.classList[event.target.classList.length - 1] === "symbol") {
            display.innerText += value
            addArrElementsClass(symbol, "secondAct")
        } else if (event.target.classList[event.target.classList.length - 1] === "secondAct") {
            display.innerText = calculate(display.innerText) + value
        } else if (event.target.classList[event.target.classList.length - 1] === "refresh") {
            removeArrElementsClass(symbol, "secondAct")
            display.innerText = ""
        } else {
            display.innerText += value
        }
    })

}

getCalculationMouseManager()