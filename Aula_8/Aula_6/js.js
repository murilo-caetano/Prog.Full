
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//Quadrado azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,40,40);
ctx.closePath();

//linha azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(40,40);
ctx.lineTo(150,150);
ctx.stroke();
ctx.closePath();

//Retangulo azul claro
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(0,125,25,50);
ctx.closePath();

//quadrado azul claro
ctx.beginPath();
ctx.lineWidth = 2
ctx.fillStyle = 'aqua'
ctx.fillRect(270,137,30,25)
ctx.closePath();

//Quadrado vermelho
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(260,0,300,40);
ctx.closePath();

//linha vermelha
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(260,40);
ctx.lineTo(150,150);
ctx.stroke();
ctx.closePath();

//linha verde meio
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'limegreen';
ctx.moveTo(0,150);
ctx.lineTo(300,150);
ctx.stroke();
ctx.closePath();

//L amarelo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.moveTo(0,260);
ctx.lineTo(20,260);
ctx.lineTo(20,280);
ctx.lineTo(40,280);
ctx.lineTo(40,300);
ctx.lineTo(0,300);
ctx.lineTo(0,260)
ctx.fill();
ctx.closePath();

//L marrom? preto? sla
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.moveTo(280,260);
ctx.lineTo(300,260);
ctx.lineTo(300,300);
ctx.lineTo(260,300);
ctx.lineTo(260,280);
ctx.lineTo(280,280);
ctx.lineTo(280,260);
ctx.fill();
ctx.closePath();

//linha roxa
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'purple';
ctx.moveTo(150,150)
ctx.lineTo(150,300)
ctx.stroke();
ctx.closePath();

//Quadradinho vermelho
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red'
ctx.fillRect(115,150,35,35);
ctx.closePath();

//arco azul claro
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'limegreen';
ctx.arc(150,300,35,10,20);
ctx.fill();
ctx.stroke();
ctx.closePath();

//circulo amarelo 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'limegreen';
ctx.arc(75,225,15,12,30);
ctx.fill();
ctx.stroke();
ctx.closePath();

//circulo amarelo 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'limegreen';
ctx.arc(225,225,15,1,30);
ctx.fill();
ctx.stroke();
ctx.closePath();

//circulo azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'blue';
ctx.arc(150,115,15,12,30);
ctx.fill();
ctx.stroke();
ctx.closePath();

//arco verde 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'limegreen';
ctx.arc(150,150,60,3*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

//arco verde 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'limegreen';
ctx.arc(150,150,80,3*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

//arco verde 3
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'limegreen';
ctx.arc(150,150,80,1.75*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

//arco verde 4
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'limegreen';
ctx.arc(150,300,55,1.5*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

//arco verde 5
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'limegreen';
ctx.arc(150,300,70,3*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();

let canva = document.getElementById('canva');
let context = canva.getContext('2d');
//cimento
context.beginPath();
context.fillStyle  = 'gray';
context.fillRect(0,210,300,300);
context.closePath();



//cachoeira 1
context.beginPath();
context.fillStyle = '#488cfc';
context.arc(0,210,40,1.5*Math.PI,3*Math.PI);
context.fill();
context.closePath();

//cachoeira 2 
context.beginPath();
context.fillStyle = '#488cfc';
context.arc(120,300,40,1*Math.PI,2*Math.PI);
context.fill();
context.closePath();

//cachoeira 3
context.beginPath();
context.lineWidth = 2;
context.fillStyle = '#488cfc';
context.moveTo(40,210);
context.lineTo(0,210);
context.lineTo(0,300);
context.lineTo(120,300);
context.lineTo(120,260);
context.lineTo(40,260);
context.lineTo(40,210);
context.fill();
context.closePath();

//tronco 1
context.beginPath();
context.fillStyle  =  '#88441c';
context.fillRect(40,175,15,35);
context.closePath();

//folhas 1
context.beginPath();
context.fillStyle = 'green';
context.arc(47.5,160,20,2*Math.PI,4*Math.PI);
context.fill();

//casa base
context.beginPath();
context.fillStyle = '#88441c';
context.fillRect(120,140,70,70);
context.closePath();

//telhado
context.beginPath();
lineWidth  =  2;
context.fillStyle =  'salmon';
context.moveTo(120,140);
context.lineTo(155,105);
context.lineTo(190,140);
context.lineTo(120,140);
context.fill();
context.closePath();

//sol
context.beginPath();
context.fillStyle = 'yellow';
context.arc(220,70,40,2*Math.PI,4*Math.PI);
context.fill();
context.closePath();

//porta
context.beginPath();
context.fillStyle = '#684424';
context.fillRect(148,175,15,35);
context.closePath();

//janela 1 
context.beginPath();
context.fillStyle = 'lightblue';
context.fillRect(128,155,20,20);
context.closePath();

//janela 2
context.beginPath();
context.fillStyle ='lightblue';
context.fillRect(163,155,20,20);
context.closePath();

//tronco 2
context.beginPath();
context.fillStyle =  '#88441c';
context.fillRect(260,220,15,35);
context.closePath();

//folhas 2
context.beginPath();
context.fillStyle = 'green';
context.arc(267.5,205,20,2*Math.PI,4*Math.PI);
context.fill();
context.closePath();267.5,205