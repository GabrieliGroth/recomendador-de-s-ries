let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(900, 600);
  createElement("h2", "Recomendador de series");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("#9C27B0");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(78, 0, 116));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 14) {
    if (idade >= 16) {
      return "sobrenatural";
    } else {
      if (idade >= 14) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "sombrs e ossos";          
        } else{
         return "diario de um vampiro";
        }
      } else {
        if (gostaDeFantasia) {
          return "os originais";
        } else {
          return "os jovens titans";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "manual de assasinato para boas garotas";
    } else {
      return "grey's anatomy";
    }
  }
}