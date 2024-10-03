let campoIdade;
let campoFantasia;
let campoAventura;

function setup(){
  createCanvas(800, 400);
  createElement("h2", "Recomendador de series");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostoDeFantasia, gostaDeAventura);
  
  fill(color(76, 0, 115));
  textAling(CENTER, CENTER);
  textSize(38);
  text(recomendacoa, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura)
{
  if (idade )