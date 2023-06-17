const elements = document.getElementsByClassName("radio-input")

window.pageNumber = 1

Array.from(elements).forEach((element) => {
    element.addEventListener("change", () => {
        Array.from(elements).map((innerElement) => {
            if (innerElement.checked && innerElement.id !== element.id) {
                innerElement.checked = false
                const selectedElement = innerElement.closest('.radio-input-wrapper')
                selectedElement.style.cssText = ''
            }
            return
        })
        const selectedElement = element.closest('.radio-input-wrapper')
        selectedElement.style.cssText += 'border:1px solid #5142E2;background-color:#E8E6FF'
    })
})

const buttonElements = document.getElementsByClassName("next-button")
const pageLayouts = document.getElementsByClassName("page")
const lastPage = document.getElementById("11")

Array.from(buttonElements).forEach((buttonElement) => {
    buttonElement.addEventListener("click", () => {
        window.pageNumber++
        Array.from(pageLayouts).map(page => {
            if (window.pageNumber === Number(page.id)) {
                page.style.display = 'flex'
                if (window.pageNumber === 10) {
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


