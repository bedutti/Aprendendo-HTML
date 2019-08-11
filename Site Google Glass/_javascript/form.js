const estadosBR = retornaEstados();
const listaEstado = window.document.getElementById("cEst")
const campoCidade = window.document.getElementById("cCid")
const dataListaCidades = window.document.getElementById("cidades")

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
