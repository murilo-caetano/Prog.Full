// esse codigo é quase igual ao jsStart.js
// a diferença é que o jogador não toma dano
let campo = document.getElementById('campo');
let ctx = campo.getContext('2d');



const botao = new Image();
botao.src = 'fight.png';

const bola = new Image();
bola.src = 'ball.png';

const Bone = new Image();
Bone.src = 'bone.png';

let xf = 120;
let yf = 300;

const imagem = new Image();
imagem.src = 'alma.png';

let x = 200;
let y = 200;
const vel = 5;
const teclas = {};

let hp_jogador = {
  x: 200,
  y: 25
};

// Lista de ataques de bola de fogo
let ataques = [];
// Lista de ataques com osso
let ataquesArea = [];

imagem.onload = () => {
  desenhar();
};

document.addEventListener('keydown', (pressionada) => {
  teclas[pressionada.key] = true;
});
document.addEventListener('keyup', (livre) => {
  delete teclas[livre.key];
});
// função para movimentar o jogador
function atualizarPosicao() {
  if (teclas['ArrowUp'] && y - vel >= 0) y -= vel;
  if (teclas['ArrowDown'] && y + vel + 40 <= 400) y += vel;
  if (teclas['ArrowLeft'] && x - vel >= 0) x -= vel;
  if (teclas['ArrowRight'] && x + vel + 40 <= 400) x += vel;
}

function causarDano(dano) {
  hp_jogador.x = Math.max(0, hp_jogador.x - dano);
  atualizarHPJogador();
  if (hp_jogador.x <= 0) {
    window.location.href = 'derrota.html';
  }
}

function atualizarHPJogador() {
  
  if (!canvasJogador) return;
  
  ctx_jogador.clearRect(0, 0, canvasJogador.width, canvasJogador.height);
  ctx_jogador.fillStyle = 'yellow';
  ctx_jogador.fillRect(0, 0, hp_jogador.x, hp_jogador.y);
}

// Cria ataques da bola de fogo em posições aleatórias 
function criarAtaqueAleatorio() {
  let lado = Math.floor(Math.random() * 4);
  let ataque = {
    x: 0,
    y: 0,
    largura: 30,
    altura: 30,
    velocidade: 2,
    ativo: true,
    dx: 0,
    dy: 0,
  };

  switch (lado) {
    case 0:
      ataque.x = Math.random() * 400;
      ataque.y = 0;
      break;
    case 1:
      ataque.x = Math.random() * 400;
      ataque.y = 400;
      break;
    case 2:
      ataque.x = 0;
      ataque.y = Math.random() * 400;
      break;
    case 3:
      ataque.x = 400;
      ataque.y = Math.random() * 400;
      break;
  }

  let distX = x + 20 - ataque.x;
  let distY = y + 20 - ataque.y;
  let mag = Math.sqrt(distX * distX + distY * distY);
  ataque.dx = (distX / mag) * ataque.velocidade;
  ataque.dy = (distY / mag) * ataque.velocidade;

  ataques.push(ataque);
}

// Atualiza a lógica e desenha tudo no canvas
function desenhar() {
  ctx.clearRect(0, 0, 400, 400);
  atualizarPosicao();

  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 5;
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 400);
  ctx.lineTo(400, 400);
  ctx.lineTo(400, 0);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.closePath();

  ctx.drawImage(botao, xf, yf, 150, 75);
  ctx.drawImage(imagem, x, y, 40, 40);

  // Hitbox do jogador (um pouco menor que a imagem)
  let hitboxJogador = {
    x: x + 10,
    y: y + 15,
    largura: 20,
    altura: 25
  };

  // Atualiza e desenha ataques bola vermelha
  let larguraBola = 30;
  let alturaBola = 30;

  for (let i = ataques.length - 1; i >= 0; i--) {
    let a = ataques[i];
    if (a.ativo) {
      a.x += a.dx;
      a.y += a.dy;

      let bolaX = a.x - 15;
      let bolaY = a.y - 15;

      ctx.drawImage(bola, bolaX, bolaY, larguraBola, alturaBola);

      // Colisão com jogador
      if (
        bolaX + larguraBola > hitboxJogador.x &&
        bolaX < hitboxJogador.x + hitboxJogador.largura &&
        bolaY + alturaBola > hitboxJogador.y &&
        bolaY < hitboxJogador.y + hitboxJogador.altura
      ) {
        causarDano(0);
        a.ativo = false;
      }

      // Remove ataque fora da tela
      if (a.x < -10 || a.x > 410 || a.y < -10 || a.y > 410) {
        a.ativo = false;
      }
    } else {
      ataques.splice(i, 1);
    }
  }

  // Atualiza e desenha ataques com osso
  for (let i = ataquesArea.length - 1; i >= 0; i--) {
    let a = ataquesArea[i];
    if (a.ativo) {
      a.y -= a.velocidade;

      let larguraOsso = 200;
      let alturaOsso = 20;

      let ossoX = a.x - larguraOsso / 2;
      let ossoY = a.y - alturaOsso / 2;

      ctx.drawImage(Bone, ossoX, ossoY, larguraOsso, alturaOsso);

      let hitboxOsso = {
        x: ossoX,
        y: ossoY,
        largura: larguraOsso,
        altura: alturaOsso
      };

      // Colisão com jogador
      if (
        hitboxJogador.x + hitboxJogador.largura > hitboxOsso.x &&
        hitboxJogador.x < hitboxOsso.x + hitboxOsso.largura &&
        hitboxJogador.y + hitboxJogador.altura > hitboxOsso.y &&
        hitboxJogador.y < hitboxOsso.y + hitboxOsso.altura
      ) {
        causarDano(0);
        a.ativo = false;
      }
    } else {
      ataquesArea.splice(i, 1);
    }
  }

  atualizarHPJogador();

  requestAnimationFrame(desenhar);
}

// Spawn dos ataques com osso a cada 3 segundos
setInterval(() => {
  let ataqueArea = {
    x: Math.random() * 200 + 100,
    y: 400,
    largura: 200,
    altura: 20,
    velocidade: 1.5,
    ativo: true
  };
  ataquesArea.push(ataqueArea);
}, 3000);

// Spawn dos ataques de bola de fogo a cada 750ms
setInterval(criarAtaqueAleatorio, 750);
// redireciona o jogador para as outras paginas
function creditos() {
  window.location.assign('1Creditos.html');
}
function Menu() {
  window.location.assign('1Menu.html');
}
function Start() {
  window.location.assign('1Start.html');
}