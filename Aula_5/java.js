function ale(){
    let x = parseInt(document.getElementById("valor").value)
    if (x <= 10 && x>=0){
    document.getElementById("resultado").innerHTML = "insuficiente"
    }
    else if (x > 10 && x < 15){
    document.getElementById("resultado").innerHTML = "bom"
    }
    else if(x>15)
    document.getElementById("resultado").innerHTML = "muito bom"
    else{
    document.getElementById("resultado").innerHTML = "invalido"
    }
}