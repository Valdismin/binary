window.pageNumber = 1
window.assetImage = "tesla"
const time = 3800;
const step = 16;

const elements = document.getElementsByClassName("radio-input")
const elementsWrappers = document.getElementsByClassName("radio-input-wrapper")

Array.from(elementsWrappers).forEach((element) => {
    const closestButton = element.parentElement.parentElement.nextElementSibling.children[0]
    element.addEventListener("click", () => {
        const radioElement = element.firstElementChild
        Array.from(elements).map((innerElement) => {
            if (innerElement.checked && innerElement.id !== radioElement.id) {
                innerElement.checked = false
                const selectedElement = innerElement.closest('.radio-input-wrapper')
                selectedElement.style.cssText = ''
            }
            return
        })
        radioElement.checked = true
        closestButton.disabled = false
        element.style.cssText = 'border:1px solid #5142E2;background-color:#E8E6FF'
    })
})


const buttonElements = document.getElementsByClassName("next-button")
const pageLayouts = document.getElementsByClassName("page")
const lastPage = document.getElementById("11")

Array.from(buttonElements).forEach((buttonElement) => {
    const closestRadioButtons = buttonElement.parentElement.previousElementSibling.children[2]?.children
    let checkedArray = !!closestRadioButtons && Array.from(closestRadioButtons).map((radio) => {
        return radio.checked === true
    })
    if(!!checkedArray.length && checkedArray.every((elem) => elem === false)) {
        buttonElement.disabled = true
    }
    buttonElement.addEventListener("click", () => {
        window.pageNumber++
        Array.from(pageLayouts).map(page => {
            if (window.pageNumber === Number(page.id)) {
                page.style.display = 'flex'
                if (window.pageNumber === 10) {
                    outNum(8752)
                    setTimeout(() => {
                        page.style.display = 'none'
                        lastPage.style.display = "flex"
                    }, 5000)
                }
            } else {
                page.style.display = 'none'
            }
        })
    })
})


const dropdowns = document.getElementsByClassName("period-dropdown-wrapper")
Array.from(dropdowns).forEach((dropdownButton) => {
    dropdownButton.addEventListener("click", (e) => {
        const selectedElement = dropdownButton.lastElementChild
        e.stopPropagation()
        if(selectedElement.style.display === 'block') {
            selectedElement.style.display = 'none'
            return
        }
        selectedElement.style.display = 'block'
    })
})

window.addEventListener('click', function(e){
    if (document.getElementById('root').contains(e.target)){
        Array.from(dropdowns).forEach((dropdownButton) => {
            const selectedElement = dropdownButton.lastElementChild
            selectedElement.style.display = 'none'
        })
    }
})


const dropdownOptions = document.getElementsByClassName("dropdown-option")
Array.from(dropdownOptions).forEach((dropdownOption) => {
    dropdownOption.addEventListener("click", () => {
        const text = dropdownOption.innerHTML
        const dropdownParent = dropdownOption.parentElement.previousElementSibling.children[0]

        dropdownParent.innerHTML = text
    })
})


Array.from(elements).filter((element) => ['google','gold','tesla','nike'].includes(element.id)).forEach((element) => {
    element.parentElement.addEventListener('click',() => {
        window.assetImage = element.id
        const squareImage = document.getElementById('squareImage')
        squareImage.src = `../assets/images/${window.assetImage}.png`
        if(element.id === "nike") {
            squareImage.width = 30
            squareImage.height = 15
        }
        if(element.id === "gold") {
            squareImage.width = 35
            squareImage.height = 25
        }
    })
})

function outNum(num) {
    let balanceElement = document.querySelector('#common-balance')
    let profitElement = document.querySelector('#profit')
    let n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
        n = n + step;
        if (n >= num) {
            clearInterval(interval);
        }
        balanceElement.innerHTML = n;
        profitElement.innerHTML = n;
    }, t);
}



