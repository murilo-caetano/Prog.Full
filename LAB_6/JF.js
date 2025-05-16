let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let imagem = {
    x: 150,
    y: 150,
    raio: 30,
    img: new Image(),
    desenho: function(){
        this.img.src = 'GOati.png'
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect (0,0,300,300)
    imagem.desenho();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    if (x_mouse<30){
        x_mouse=0+30
    }
    if (x_mouse>270){
        x_mouse = 300-30
    }
    if (y_mouse<30){
        y_mouse = 0+30
    }
    if (y_mouse>270){
        y_mouse = 300-30
    }

    console.log(x_mouse,y_mouse);
    imagem.x = (x_mouse -30);
    imagem.y = (y_mouse -30);
   

        
        
})