const formulario = document.getElementById('form')
const inputs = document.querySelectorAll('.input')
const obrigatorio = document.querySelectorAll('.texto-obrigatorio')

const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputTel = document.getElementById('tel')
const textArea = document.getElementById('mensagem')

formulario.addEventListener('keyup', function verificarPreenchido(){
    if(inputName.value != '') {
        inputName.classList.add('preenchido')
    } else {
        inputName.classList.remove('preenchido')
    }

    if(inputEmail.value != '') {
        inputEmail.classList.add('preenchido')
    } else {
        inputEmail.classList.remove('preenchido')
    }

    if(inputTel.value != '') {
        inputTel.classList.add('preenchido')
    } else {
        inputTel.classList.remove('preenchido')
    }

    if(textArea.value != '') {
        textArea.classList.add('preenchido')
    } else {
        textArea.classList.remove('preenchido')
    }
    
    return;
})

formulario.addEventListener('keyup', function validarCampoObrigatorio(event){

    let indice = 0

    inputs.forEach(function verificarNovamente(){
        if(inputs[indice].classList.contains('obrigatorio') && inputs[indice].value != '') {
            inputs[indice].classList.remove('obrigatorio')
            obrigatorio[indice].classList.remove('ativo')
            inputs[indice].classList.add('preenchido')
        }
        indice++
    })

    return;
})

formulario.addEventListener('submit', function submit(event){
    event.preventDefault()

    let indice = 0

    inputs.forEach(function(){
        if(inputs[indice].value === '') {
            inputs[indice].classList.add('obrigatorio')
            obrigatorio[indice].classList.add('ativo')
        }
        indice++
    })

    return;
})

