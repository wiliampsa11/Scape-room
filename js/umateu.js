//pagina4
function val_1() {
    var a = document.getElementById('val-1').value
    if (a == 'cogito ergo sum') {
        return true
    } else {
        alert('No parece suceder nada')
        return false
    }
}

//pagina5
function val_2() {
    var a = document.getElementById('val-2').value
    if (a == '121') {
        return true
    } else {
        alert('No es la combinación adecuada')
        return false
    }
}
//pagina6
function val_3() {
    var a = document.getElementById('val-3').value
    if (a == '2021') {
        return true
    } else {
        alert('Los hombres cerdo se rien al verte fallar')
        return false
    }
}
//pagina7
function val_4() {
    var a = document.getElementById('val-4').value
    if (a == 'noveno circulo') {
        return true
    } else if (a == 'Noveno circulo') {
        return true
    } else if (a == 'noveno círculo') {
        return true
    } else if (a == 'Noveno Círculo') {
        return true
    } else if (a == 'traicion') {
        return true
    } else if (a == 'traición') {
        return true
    } else {
        alert('Virgilio no se inmuta y el frío te consume poco a poco')
        return false
    }
}