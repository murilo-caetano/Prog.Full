
    
let bgcre =document.getElementById('bgcre')
let ctx = bgcre.getContext('2d')

//desenha um retangulo com borda brnca
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'White';
ctx.moveTo(0,0);
ctx.lineTo(800,0);
ctx.lineTo(800,600);
ctx.lineTo(0,600);
ctx.lineTo(0,0)
ctx.stroke();
ctx.closePath();

// escreve um texto dentro do canvas
ctx.beginPath();
ctx.fillStyle  = 'White';
ctx.font = '20px Comic Sans MS';
ctx.textAlign ='center';
ctx.fillText('Murilo Caetano da Silva    RA:22.125.020-2',500,195);
ctx.closePath();

// escreve um texto dentro do canvas
ctx.beginPath();
ctx.fillStyle  = 'White';
ctx.font = '20px Comic Sans MS';
ctx.textAlign ='center';
ctx.fillText('Aluno de Ciência da Computação',500,225);
ctx.closePath();
//define a imagem
let eu = new Image();
eu.src="eu.png";
// espera a imagem carregar ai desenha ela
eu.onload=()=>{
    ctx.drawImage(eu,30,175,250,250);
}
//redireciona o jogador para as outras paginas
function Menu(){
    window.location.assign('1Menu.html')
}
function Start(){
    window.location.assign('1Start.html')
}
function Tutorial(){
    window.location.assign('1Tutorial.html')
}
