function resizeCanvas() {
  const canvas = document.getElementById('fundo');
  const context = canvas.getContext('2d');
  const menuHeight = document.querySelector('.menu1').offsetHeight;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight - menuHeight;

  const aspectRatio = 4 / 3;

  let newWidth = windowWidth;
  let newHeight = newWidth / aspectRatio;

  if (newHeight > windowHeight) {
      newHeight = windowHeight;
      newWidth = newHeight * aspectRatio;
  }

  // Define o tamanho visual via CSS
  canvas.style.width = `${newWidth}px`;
  canvas.style.height = `${newHeight}px`;

  // Ajusta a resolução interna para corresponder ao tamanho real * DPI do dispositivo
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(newWidth * scale);
  canvas.height = Math.floor(newHeight * scale);

  // Ajusta a escala no contexto para ficar nítido
  context.setTransform(scale, 0, 0, scale, 0, 0);

  // Limpa e redesenha fundo preto (ou o que quiser)
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Você vai precisar redesenhar as linhas e a imagem aqui, porque
  // redimensionar o canvas limpa o conteúdo desenhado.
  drawCanvasContent(context, canvas.width, canvas.height);
}

function drawCanvasContent(ctx, width, height) {
  // Desenha bordas e grade escaladas

  ctx.lineWidth = 5;
  ctx.strokeStyle = 'Green';

  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(width,0);
  ctx.lineTo(width,height);
  ctx.lineTo(0,height);
  ctx.closePath();
  ctx.stroke();

  // Ajustando a grade para 4 partes horizontais (200,400,600...)
  // Como o tamanho mudou, você pode adaptar proporcionalmente
  const cols = 6; // exemplo
  const colWidth = width / cols;
  
  ctx.beginPath();
  for(let i = 1; i < cols; i++) {
    ctx.moveTo(i * colWidth, 0);
    ctx.lineTo(i * colWidth, height);
  }
  // Linha horizontal no meio
  ctx.moveTo(0, height/2);
  ctx.lineTo(width, height/2);
  ctx.stroke();
  ctx.closePath();

  // Desenhar a imagem escalada (exemplo, centralizada)
  const FEI = new Image();
  FEI.src = 'UNDERFEI.png';
  FEI.onload = () => {
    // Ajusta a largura e altura proporcionalmente, pode mudar conforme preferir
    const imgWidth = width * 0.8;
    const imgHeight = imgWidth * (FEI.height / FEI.width);
    const imgX = (width - imgWidth) / 2;
    const imgY = (height - imgHeight) / 2;
    ctx.drawImage(FEI, imgX, imgY, imgWidth, imgHeight);
  }
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', resizeCanvas);


// direciona o jogador para outras paginas
function creditos(){
    window.location.assign('1Creditos.html')
}
function Tutorial(){
    window.location.assign('1Tutorial.html')
}
