let campoIdade;
let campoTerror;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoTerror = createCheckbox("Gosta de terror?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("blue");
  let idade = campoIdade.value();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeAventura);

  fill(color("black"));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeTerror, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 20) {
      return "It a coisa 2";
    } else {
      
      if (idade >= 12) {
        if(gostaDeTerror || gostaDeAventura) {
          return "Assasino a preço fixo";          
        } else{
         return "Annabele";
        }
      } else {
        if (gostaDeTerror) {
          return "Telefone preto";
        } else {
          return "Velozes e furiosos 10";
        }
      }
    }
  } else {
    if (gostaDeTerror) {
      return "Homem aranha: no aranhaverso";
    } else {
      return "Jumanji";
    }
  }
}
