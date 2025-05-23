const canvas = document.getElementById('bgcre');
const ctx = canvas.getContext('2d');

const steamImg = new Image();
steamImg.src = 'Steam.png';

const euImg = new Image();
euImg.src = 'eu.png';

let steamPos = {}; // guardar posição e tamanho da steam no canvas para clique

function resizeCanvas() {
  const menu = document.querySelector('.menu2');
  const menuHeight = menu.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const availableHeight = windowHeight - menuHeight - 20;

  let width = windowWidth;
  let height = width * 3 / 4;

  if (height > availableHeight) {
    height = availableHeight;
    width = height * 4 / 3;
  }

  canvas.width = width;
  canvas.height = height;

  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Fundo preto
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Borda branca
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'white';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Define tamanhos para as imagens e textos
  const euWidth = canvas.width * 0.3;
  const euHeight = euWidth;
  const steamSize = canvas.height * 0.1;

  // Posições
  const centerX = canvas.width / 2;

  // Desenha foto em cima do texto
  if (euImg.complete) {
    const euX = centerX - euWidth / 2;
    const euY = canvas.height * 0.15;
    ctx.drawImage(euImg, euX, euY, euWidth, euHeight);
  } else {
    euImg.onload = () => draw();
  }

  // Texto abaixo da foto
  ctx.fillStyle = 'white';
  ctx.font = `${Math.floor(canvas.height / 25)}px Comic Sans MS`;
  ctx.textAlign = 'center';

  const textoY1 = canvas.height * 0.15 + euHeight + 40;
  const textoY2 = textoY1 + 40;

  ctx.fillText('Murilo Caetano da Silva    RA:22.125.020-2', centerX, textoY1);
  ctx.fillText('Aluno de Ciência da Computação', centerX, textoY2);

  // Steam embaixo do texto, centralizado
  if (steamImg.complete) {
    const steamX = centerX - steamSize / 2;
    const steamY = textoY2 + 30;
    ctx.drawImage(steamImg, steamX, steamY, steamSize, steamSize);

    // Salva a área da steam para detectar clique
    steamPos = {
      x: steamX,
      y: steamY,
      width: steamSize,
      height: steamSize
    };
  } else {
    steamImg.onload = () => draw();
  }
}

// Detectar clique na steam
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  if (
    clickX >= steamPos.x &&
    clickX <= steamPos.x + steamPos.width &&
    clickY >= steamPos.y &&
    clickY <= steamPos.y + steamPos.height
  ) {
    window.open('https://steamcommunity.com/profiles/76561198811274208/', '_blank');
  }
});

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', resizeCanvas);
// Navegação
function Menu() {
  window.location.assign('1Menu.html');
}
function Tutorial() {
  window.location.assign('1Tutorial.html');
}
function Start() {
    window.location.assign('1Start.html')
}