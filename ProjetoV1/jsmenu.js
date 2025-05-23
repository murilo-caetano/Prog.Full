//selecionado canva
let fundo =document.getElementById('fundo')
let ctx1 = fundo.getContext('2d')

// define a imagem
const FEI  = new Image();
FEI.src= 'UNDERFEI.png'
//espera a imagem carregar para ai sim desenhala
FEI.onload = () => {
  ctx1.beginPath();
  ctx1.drawImage(FEI, 100, 100, 1000, 150);
  ctx1.closePath();
};



//inserindo linhas ao canva 1200x600 (borda)
ctx1.beginPath();
ctx1.lineWidth = 5;
ctx1.strokeStyle = 'Green';
ctx1.moveTo(0,0);
ctx1.lineTo(1200,0);
ctx1.lineTo(1200,600);
ctx1.lineTo(0,600);
ctx1.lineTo(0,0);
ctx1.stroke();
ctx1.closePath();

//Fazendo a grade
ctx1.beginPath();
ctx1.lineWidth = 5;
ctx1.strokeStyle = 'Green';
ctx1.moveTo(200,0);
ctx1.lineTo(200,600);
ctx1.lineTo(400,600);
ctx1.lineTo(400,0);
ctx1.lineTo(600,0);
ctx1.lineTo(600,600);
ctx1.lineTo(800,600);
ctx1.lineTo(800,0);
ctx1.lineTo(1000,0);
ctx1.lineTo(1000,600);
ctx1.lineTo(1200,600);
ctx1.lineTo(1200,300);
ctx1.lineTo(0,300);
ctx1.stroke();
ctx1.closePath();

// direciona o jogador para outras paginas
function creditos(){
    window.location.assign('1Creditos.html')
}
function Tutorial(){
    window.location.assign('1Tutorial.html')
}
