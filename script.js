const form = document.getElementById('validacao')
const inputNumber2 = document.getElementById('segundo-numero')
const inputNumber1 = document.getElementById('primeiro-numero')
const p = document.querySelector('p')

function mostrarParagrafo() {
  p.style.display = 'block'
  inputNumber1.value = ""
  inputNumber2.value = ""
}

form.addEventListener('submit', function (e) {
  e.preventDefault()


  if (inputNumber2.value > inputNumber1.value) {
    p.innerHTML = `O valor <b>${inputNumber2.value}</b> se encontrava no campo B - <b>FORMULÁRIO VÁLIDO</b>`
    mostrarParagrafo()
    p.style.backgroundColor = "#658864"
   
  } else if (inputNumber1.value === inputNumber2.value) {
    p.innerHTML = `O valor <b>${inputNumber1.value}</b> é igual ao valor <b>${inputNumber2.value}</b>`
    mostrarParagrafo()
    p.style.backgroundColor = '#8DCBE6'
   
  } else {
    p.innerHTML = `O valor <b>${inputNumber1.value}</b> se encontrava no campo A - <b>FORMULÁRIO INVÁLIDO</b>`
    mostrarParagrafo()
    p.style.backgroundColor = 'red'
    p.style.color = "#fff"
  }
})