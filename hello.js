const elements = document.getElementsByClassName("radio-input")

Array.from(elements).forEach((element) => {
    element.addEventListener("change",() => {
        Array.from(elements).map((innerElement) => {
            if(innerElement.checked && innerElement.id !== element.id ) {
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
