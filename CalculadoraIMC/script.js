var btnCalcular = document.querySelector("#btnCalcular")
var peso = document.querySelector("#peso")
var altura = document.querySelector("#altura")
var res = document.querySelector(".res")
function calcular(event) {
    event.preventDefault()
    console.log(peso.value)
    var pesoValue = peso.value
    var alturaValue = altura.value

    if (pesoValue == 0 || alturaValue == 0) {
        res.innerHTML = "ERRO"
        return
    }

    var IMC = (pesoValue / Math.pow(alturaValue, 2)).toFixed(2)

    if (IMC < 17) {
        res.innerHTML = `<div class="status">
<p>Peso</p>
<p>Altura</p>
<p>IMC</p>
<P>Resultado</P>
</div>
<div class="parametro">
<p>${pesoValue}</p>
<p>${alturaValue}</p>
<p>${IMC}</p>
<p>Muito abaixo do peso </p>
</div>`
    } else if (IMC >= 17 && IMC <= 18.49) {
        res.innerHTML = `<div class="status">
<p>Peso</p>
<p>Altura</p>
<p>IMC</p>
<P>Resultado</P>
</div>
<div class="parametro">
<p>${pesoValue}</p>
<p>${alturaValue}</p>
<p>${IMC}</p>
<p> Abaixo do peso </p>
</div>`
    } else if (IMC >= 18.5 && IMC <= 24.99) {
        res.innerHTML = `<div class="status">
<p>Peso</p>
<p>Altura</p>
<p>IMC</p>
<P>Resultado</P>
</div>
<div class="parametro">
<p>${pesoValue}</p>
<p>${alturaValue}</p>
<p>${IMC}</p>
<p>Peso Normal</p>
</div>`
    } else if (IMC >= 25 && IMC <= 29.99) {
        res.innerHTML = `<div class="status">
    <p>Peso</p>
    <p>Altura</p>
    <p>IMC</p>
    <P>Resultado</P>
    </div>
    <div class="parametro">
    <p>${pesoValue}</p>
    <p>${alturaValue}</p>
    <p>${IMC}</p>
    <p>Acima do Peso</p>
    </div>`
    } else if (IMC >= 30 && IMC <= 34.99) {
        res.innerHTML = `<div class="status">
    <p>Peso</p>
    <p>Altura</p>
    <p>IMC</p>
    <P>Resultado</P>
    </div>
    <div class="parametro">
    <p>${pesoValue}</p>
    <p>${alturaValue}</p>
    <p>${IMC}</p>
    <p>Obesidade 1</p>
    </div>`
    } else if (IMC >= 35. && IMC <= 39.99) {
        res.innerHTML = `<div class="status">
    <p>Peso</p>
    <p>Altura</p>
    <p>IMC</p>
    <P>Resultado</P>
    </div>
    <div class="parametro">
    <p>${pesoValue}</p>
    <p>${alturaValue}</p>
    <p>${IMC}</p>
    <p>Obesidade 2 (severa)</p>
    </div>`
    } else {
        res.innerHTML = `<div class="status">
    <p>Peso</p>
    <p>Altura</p>
    <p>IMC</p>
    <P>Resultado</P>
    </div>
    <div class="parametro">
    <p>${pesoValue}</p>
    <p>${alturaValue}</p>
    <p>${IMC}</p>
    <p>Obesidade 3 (mórbida)</p>
    </div>`
    }
    peso.value = ""
    altura.value = ""
    btnCalcular.value = "Refazer"

}
btnCalcular.addEventListener("click", calcular)