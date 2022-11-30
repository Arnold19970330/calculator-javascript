const result = document.querySelector('.result')
const button = document.querySelectorAll('.button')
const res = document.querySelector('.res')

let buttons = Array.from(button)

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case '=':
            result.innerText = eval(result.innerText);
            break;
            case 'DEL':
                result.innerText = ' ';
                break;
            case 'C':
            result.innerText = result.innerText.slice(0,-1)
            break;
            default:
                result.innerText += e.target.innerText;
        }
    })
})