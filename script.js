const input = document.querySelector('.input')
const keys = document.querySelectorAll('button')

let text = ''

const symbols = [' ']
for (const key of keys) {
    let symbol = ''
    symbol = key.textContent
    symbols.push(symbol)
}


document.addEventListener('keydown', e => {
    for (let i = 0; i < symbols.length; i++) {
        if (e.key.toUpperCase() == symbols[i]) {

            text += e.key
            input.textContent = text
        }
    }
    if (e.key == 'Backspace') {
        text = text.slice(0, -1)
        input.textContent = text
    }
})




