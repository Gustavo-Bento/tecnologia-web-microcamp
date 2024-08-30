function igual() {
    var x = 2
    var y = 2
    let res
    if (x == y) {
        res = "Iguais"
    } else {
        res = "Diferentes"
    }
    document.getElementById("resultado-igual").innerHTML = res
    document.getElementById("confirmado-igual").innerHTML = "Resultado ✔️"
}
function confirmado() {
    document.getElementById("confirmado").innerHTML = "Resultado ✔️"
}
function diferente() {
    var x = 2
    var y = 3
    let res
    if (x != y) {
        res = "Diferentes"
    } else {
        res = "Iguais"
    }
    document.getElementById("resultado-diferente").innerHTML = res
    document.getElementById("confirmado-diferente").innerHTML = "Resultado ✔️"
}
function maior() {
    var x = 4
    var y = 2
    let res
    if (x > y) {
        res = "Maior"
    } else {
        res = "Menor ou igual"
    }
    document.getElementById("resultado-maior").innerHTML = res
    document.getElementById("confirmado-maior").innerHTML = "Resultado ✔️"
}
function menor() {
    var x = 2
    var y = 2
    let res
    if (x < y) {
        res = "Menor"
    } else {
        res = "Maior ou igual"
    }
    document.getElementById("resultado-menor").innerHTML = res
    document.getElementById("confirmado-menor").innerHTML = "Resultado ✔️"
}