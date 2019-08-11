const estadosBR = retornaEstados();
const listaEstado = window.document.getElementById("cEst")
const campoCidade = window.document.getElementById("cCid")
const dataListaCidades = window.document.getElementById("cidades")
const estadosComCidades = []

estadosBR.forEach(a => {
    listaEstado.innerHTML += "<option >" + a + "</option>"
})
listaEstado.value = ""

function mudaEstado(){
    campoCidade.value = ""
    dataListaCidades.innerHTML = ""
    campoCidade.innerText = "Escolha uma cidade"
    const cidadePeloEstado = retornaCidadesPorEstado(listaEstado.value)
    cidadePeloEstado.forEach(a => {
        dataListaCidades.innerHTML += "<option>" + a + "</option>"
    })
}

function calcTotal(){
    const qtd = window.document.getElementById("cQtd")
    if(Number(qtd.value) > 5) {
        qtd.value = 5
    }
    window.document.getElementById("cTot").value = Number(qtd.value) * 1500
}