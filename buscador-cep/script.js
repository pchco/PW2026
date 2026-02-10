async function searchCep() {
    var cepInput = document.getElementById("cep")
    var status = document.getElementById("status")
    var imgCepOk = document.getElementById("imgCepOk")
    var imgCepErro = document.getElementById("imgCepErro")

    // reset inicial
    status.style.display = "none"
    status.className = ""
    imgCepOk.style.display = "none"
    imgCepErro.style.display = "none"

    if (cepInput.value == "") {
        mostrarStatus("CEP vazio!", "erro")
        imgCepErro.style.display = "block"
        limparInfos()
        return
    }

    if (cepInput.value.length != 8) {
        mostrarStatus("CEP inválido! Digite 8 números.", "erro")
        imgCepErro.style.display = "block"
        limparInfos()
        return
    }

    var infoCep = await fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
    var dados = await infoCep.json()

    if (dados.erro) {
        mostrarStatus("CEP não encontrado!", "erro")
        imgCepErro.style.display = "block"
        limparInfos()
        return
    }

    mostrarStatus("CEP encontrado com sucesso!", "sucesso")

    document.getElementById("rua").innerHTML = dados.logradouro
    document.getElementById("bairro").innerHTML = dados.bairro
    document.getElementById("localidade").innerHTML = dados.localidade
    document.getElementById("estado").innerHTML = dados.estado

    imgCepOk.style.display = "block"
}

function mostrarStatus(texto, tipo) {
    var status = document.getElementById("status")
    status.innerHTML = texto
    status.className = ""
    status.classList.add(tipo)
    status.style.display = "block"
}

function limparInfos() {
    document.getElementById("rua").innerHTML = ""
    document.getElementById("bairro").innerHTML = ""
    document.getElementById("localidade").innerHTML = ""
    document.getElementById("estado").innerHTML = ""
}

function limparCampos() {
    document.getElementById("cep").value = ""
    limparInfos()

    document.getElementById("status").style.display = "none"
    document.getElementById("imgCepOk").style.display = "none"
    document.getElementById("imgCepErro").style.display = "none"
}

