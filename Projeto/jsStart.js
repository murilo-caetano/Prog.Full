//pegando o canvas do campo de batalha
let campo = document.getElementById('campo');
let ctx = campo.getContext('2d');
// canvas da barra de vida do jogador
let canvasJogador = document.getElementById('jogador');
let ctx_jogador = canvasJogador.getContext('2d');


//barra de vida amarela
let hp_jogador = {
  x: 200,
  y: 25
};
//barra de vida verde
let hpInimigo = 300;

//guarda as informações dos ataques x, y, velocidade e etc de cada ataque
let ataques = [];
let ataquesArea = [];

let ataqueArea = {
  x: Math.random() * 200 + 100, 
  largura: 200,
  altura: 20,
  velocidade: 1.5,
  ativo: true
};
// definindo  as imagens/sprites do jogo
const botao = new Image();
botao.src = 'fight.png';
//posição do botão fight no campo
let xf = 120;
let yf = 300;
const botao2 = new Image();
botao2.src = 'espera.png';

const imagem = new Image();
imagem.src = 'alma.png';

const Bone = new Image();
Bone.src = 'bone.png';

const bola = new Image();
bola.src = 'ball.png'

//posição do jogador
let x = 200;
let y = 200;
const vel = 5; //quanto o jogador anda
const teclas = {};//guarda tecla precionada pelo jogador


document.addEventListener('keydown', (pressionada) => {// quandp uma tecla for pressionada
  teclas[pressionada.key] = true;//  salva a tecla na constante teclas
});

document.addEventListener('keyup', (livre) => { //acontece quando você solta a tecla
  delete teclas[livre.key];//remove a tecla da contante teclas
});
// fução responsavel por movimentar o jogador
function atualizarPosicao() {
  if (teclas['ArrowUp'] && y - vel >= 0) y -= vel; // se dentro da constante teclas  estiver escrito 'ArrowUp' executa essa parte da função
  if (teclas['ArrowDown'] && y + vel + 40 <= 400) y += vel;
  if (teclas['ArrowLeft'] && x - vel >= 0) x -= vel;
  if (teclas['ArrowRight'] && x + vel + 40 <= 400) x += vel;
}

let ultimoDanoInimigo = 0;//conta o tempo em milissegundos desde a ultima vez que o inimigo foi atacado
let intervaloDanoInimigo = 4000;// define o tempo de espera para atacar o inimigo novamente

//responsavél por diminuir a barra de vida do inimigo
function atualizarHPInimigo() {
  let hpCanvas = document.getElementById('Inimigo');
  let ctxInimigo = hpCanvas.getContext('2d');
  ctxInimigo.clearRect(0, 0, hpCanvas.width, hpCanvas.height);
  ctxInimigo.fillStyle = '#71f009'; // verde
  ctxInimigo.fillRect(0, 0, Math.max(0, hpInimigo), 25);// preenche o retangulo mas sem deixar o valor de x < 0
}
if (// verifica a colição com  o botão
  x + 40 > xf && x < xf + 150 &&
  y + 40 > yf && y < yf + 75
) {
  hpInimigo = Math.max(0, hpInimigo - 1); // diminui 1 o valor do hp
  atualizarHPInimigo(); //atualiza o valor do h´p
}
//espera a imagem carregar e ai executa os codigos abaixo
imagem.onload = () => { 
  ctx_jogador.fillStyle = 'yellow'; // cor da barra de vida do jogador
  ctx_jogador.fillRect(0, 0, hp_jogador.x, hp_jogador.y);//desenha a barra de vida do jogador
  desenhar();// começa a  animação
};
function atualizarHPJogador() {// modifica o canvas 'jogador' que ja foi definido no começo do codigo
  let ctx_jogador = canvasJogador.getContext('2d');
  ctx_jogador.clearRect(0, 0, canvasJogador.width, canvasJogador.height); // limpa o canvas antes de desenhar
  ctx_jogador.fillStyle = 'yellow'; // cor da barra de vida
  ctx_jogador.fillRect(0, 0, Math.max(0, hp_jogador.x), hp_jogador.y); //controi um retangulo amarelo
}

// vai pegar o valor de dano do ataque da bola de fogo e do osso
function causarDano(dano) {
  hp_jogador.x = Math.max(0, hp_jogador.x - dano); //vai reduzir o x do hp do jogador,ou seja, a barra de vida amarela vai diminuir
  atualizarHPJogador();// vai executar essa função  para modificar visualmente a vida do jogador
  
  if (hp_jogador.x <= 0) {// quando o hp do jogador for menor ou igual a 0 joga ele para a página de derrota
    window.location.assign('derrota.html');
  }
}

// vai decidir de onde o ataque 'bola de fogo' vai sair(cima,baixo,direita ou esquerda)
function criarAtaqueAleatorio() {
  let lado = Math.floor(Math.random() * 4);// vai escolher um numero aleatorio de 0 a 3
  let ataque = {
    //dimenções
    x: 0,
    y: 0,
    largura: 30,
    altura:30,
    //o quão rapido ele anda
    velocidade: 2,
    //se ele ta dentro do campo
    ativo: true,
    //direção  do ataque
    dx: 0,
    dy: 0,
  };

  switch (lado) {
    case 0: ataque.x = Math.random() * 400; ataque.y = 0; // se  o numero escolhido for 0 o ataque vem de cima e com x aleatorio dentro dos limites doo campo
    break;// impede de executar o resto dos cases caso o case acima for executado
    case 1: ataque.x = Math.random() * 400; ataque.y = 400; // ataque de baixo com o x aleatorio
    break;
    case 2: ataque.x = 0; ataque.y = Math.random() * 400; // ataque da esquerda com y aleatorio
    break;
    case 3: ataque.x = 400; ataque.y = Math.random() * 400; // ataque da direira com y aleatorio
    break;
  }
  // calcula a direção do ataque lembrando q x e y é a posição do jogador
  let distX = x + 20 - ataque.x;// calcula a distancia horizontal o  +20 serve para centralizar a distancia para o centro do jogador
  let distY = y + 20 - ataque.y;// calcula a distancia vertical
  let Z = Math.sqrt(distX * distX + distY * distY);// calcula o tamanho do  vetor usando Pitagoras
  ataque.dx = (distX / Z) * ataque.velocidade; //calcula o vetor unitário  e  multiplica  pela velocidade para achar o quanto ele tem  que andar em x para alcançar o
  ataque.dy = (distY / Z) * ataque.velocidade;
  ataques.push(ataque);//  joga essas informações para a lista de ataques
}
setInterval(criarAtaqueAleatorio, 500) // a cada 0,5 segundos executa a função criarAtaqueAleatorio novamente
// Spawn do osso a cada 3 segundos 
setInterval(() => {
  let ataqueArea = {
    x: Math.random() * 200 + 100, // spawn centralizado para não sair do campo
    y: 400,
    largura: 200,
    altura: 20,
    velocidade: 3,
    ativo: true
  };
  ataquesArea.push(ataqueArea); // joga todas as informações do ataqueArea para a lista ataquesArea
}, 3000);

;

function desenhar() {
  ctx.clearRect(0, 0, 400, 400);//limpa o campo a cada frame
  atualizarPosicao();
  // desenha a  borda branca em volta do campo
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 5;
  ctx.strokeRect(0, 0, 400, 400);

  const agora = Date.now(); //começa a contar o tempo
  //dependendo se ja tiverem se passado 4 segundos ou 4000 milissegundos desde o ultimo ataque
  if (agora - ultimoDanoInimigo >= intervaloDanoInimigo) { 
    ctx.drawImage(botao, xf, yf, 150, 75); // botão ativo (laranja)
  } else {
    ctx.drawImage(botao2, xf, yf, 150, 75); // botão desativado (cinza)
  }

  //ve se o jogador esta colidindo com  o botão
  if (
    x + 40 > xf && x < xf + 150 &&
    y + 40 > yf && y < yf + 75
  ) {
    if (agora - ultimoDanoInimigo >= intervaloDanoInimigo) { // se o jogador ta colidindo com o botão e ja se pasaaram 4 segundos
  hpInimigo = Math.max(0, hpInimigo - 40);//diminui a barra de vida em 40 é apenas algo visual
  atualizarHPInimigo();
  ultimoDanoInimigo = agora; // reseta o tempo de espera

  if (hpInimigo <= 0) {// quando o hp do inimigo for menor ou igual a 0 redireciona para a pagina da vittória
    window.location.assign('1vitoria.html');
      }
    }
  }
  // cria a hitbox(area em que o jogador toma dano), ela é menor que a imagem do jogador, só pra facilitar
  let hitboxJogador = {
    x: x + 10, // joga a hitbox um pouco para a esquerda
    y: y + 15, // levanta a hitbox
    largura: 20,
    altura: 25
  };

  

  // Ataques da bola de fogo
  //define as dimensões da bola
  let larguraBola = 30;
  let alturaBola = 30;

  for (let i = ataques.length - 1; i >= 0; i--) { // pega as informações da lista ataques
    let a = ataques[i];
    if (a.ativo) {// se o  ataque estiver ativo (dentro do campo)
      // atualiza a posição da bola de fogo
      a.x += a.dx;
      a.y += a.dy;
      //calcula a posição da bola( -15 serve para centralizar)
      let bolaX = a.x - 15; 
      let bolaY = a.y - 15;
      //desenha a bola de fogo
      ctx.drawImage(bola, bolaX, bolaY, larguraBola, alturaBola);

      // detecta se teve colisão com a hitbox do jogador
      if (
        bolaX + larguraBola > hitboxJogador.x &&
        bolaX < hitboxJogador.x + hitboxJogador.largura &&
        bolaY + alturaBola > hitboxJogador.y &&
        bolaY < hitboxJogador.y + hitboxJogador.altura
      ) {
        causarDano(25);// executa a função para dar dano ao jogador
        a.ativo = false; // desativa a bola para que n~]ao  cause dano ao jogador novamente tmbém removendo a imagem da bola
      }
      // se a bola de fogo sair da tela ela é desativada também
      if (a.x < -10 || a.x > 410 || a.y < -10 || a.y > 410) { 
        a.ativo = false;
      }
    }
  }

  // ataques com osso
for (let i = ataquesArea.length - 1; i >= 0; i--) { // pega as informações da lista ataqueArea
  let a = ataquesArea[i];
  if (a.ativo) {// se o ataque ta ativo ele vem subindo a tela
    a.y -= a.velocidade;
    
    // define dimensões do osso
    let larguraOsso = 200;
    let alturaOsso = 20;

    // centraliza o osso
    let ossoX = a.x - 100;
    let ossoY = a.y - 10;
    // desenha o osso
    ctx.drawImage(Bone, ossoX, ossoY, larguraOsso, alturaOsso);
  // cria a hitbox do osso
  let hitboxOsso = {
    x: ossoX,
    y: ossoY,
    largura: larguraOsso,
    altura: alturaOsso
};
    

    // Verifica colisão com a hitbox do jogador
    if (
      hitboxJogador.x + hitboxJogador.largura > hitboxOsso.x &&
      hitboxJogador.x < hitboxOsso.x + hitboxOsso.largura &&
      hitboxJogador.y + hitboxJogador.altura > hitboxOsso.y &&
      hitboxJogador.y < hitboxOsso.y + hitboxOsso.altura
    ) {
      causarDano(40);//executa a função para causar dano ao jogador
      a.ativo = false;// desativa o osso
    }
  }
}
  atualizarHPInimigo();// redesenha a barra de vida do inimigo
  ctx.drawImage(imagem, x, y, 40, 40); //deseja o jogador

  requestAnimationFrame(desenhar);//repete a função desenhar
}



// Botões de navegação para as outras paginas
function creditos() {
  window.location.assign('1Creditos.html');
}
function Tutorial() {
  window.location.assign('1Tutorial.html');
}
function Menu() {
  window.location.assign('1Menu.html');
}