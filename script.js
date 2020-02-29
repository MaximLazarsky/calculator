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
    } return res
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

const display = document.querySelector(".display")
let symbol = document.querySelectorAll(".symbol")
document.addEventListener("keydown", event => {
    console.log(event.keyCode)
    const { keyCode } = event
    // switch (keyCode) {
    //     case 49: display.innerText += "1"
    //     case 50: display.innerText += "2"
    //     case 51: display.innerText += "3"
    //     case 52: display.innerText += "4"
    //     case 53: display.innerText += "5"
    //     case 54: display.innerText += "6" записывать даные в масив
    //     case 55: display.innerText += "7"
    //     case 56: display.innerText += "8"
    //     case 57: display.innerText += "9"
    //     case 48: display.innerText += "0"
    //     case 189: display.innerText += "-"
    //         addArrElementsClass(symbol, "secondAct")
    //     case 187: display.innerText = calculate(display.innerText) сделать проверку на длину масива если больше 3
    //         removeArrElementsClass(symbol, "secondAct")
    // }
    if (keyCode === 49) {
        display.innerText += "1"
    }
    if (keyCode === 50) {
        display.innerText += "2"
    }
    if (keyCode === 51) {
        display.innerText += "3"
    }
    if (keyCode === 52) {
        display.innerText += "4"
    }
    if (keyCode === 53) {
        display.innerText += "5"
    }
    if (keyCode === 54) {
        display.innerText += "6"
    }
    if (keyCode === 55) {
        display.innerText += "7"
    }
    if (keyCode === 56) {
        display.innerText += "8"
    }
    if (keyCode === 57) {
        display.innerText += "9"
    }
    if (keyCode === 48) {
        display.innerText += "0"
    }
    if (keyCode === 189) {
        display.innerText += "-"
        addArrElementsClass(symbol, "secondAct")
    }
    if (keyCode === 187) {
        display.innerText = calculate(display.innerText)
        removeArrElementsClass(symbol, "secondAct")
    }
})
getCalculationMouseManager()