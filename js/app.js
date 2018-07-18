
// A porcentagem de alunas desistentes
// O número de alunas que excedem a meta de pontos, em média, de todos os sprints realizados. O objetivo dos pontos é 70% do total de pontos em HSE e em tecnologia.
// A porcentagem que representa os dados anteriores em relação ao total de alunas.
// O Net Promoter Score (NPS) médio dos sprints realizados. O NPS é calculado com base no levantamento que as estudantes respondem em relação à recomendação que dariam da Laboratoria, sob a seguinte fórmula:
//
// [Promoters] = [Respostas 9 ou 10] / [Total respostas] * 100
// [Passive] = [Respostas 7 a 8] / [Total Respostas] * 100
// [Detractors] = [Respostas entre 1 e 6] / [Total Respostas] * 100
//
// [NPS] = [Promoters] - [Detractors]
// A quantidade e porcentagem que representa o total de alunas que excedem a meta de pontos técnicos em média e sprint.
//
// O valor e a porcentagem que representam o número total de alunas que excedem a meta de pontos de HSE, em média, e por sprint.
// O percentual de alunas satisfeitas com a experiência da Laboratoria.
// A pontuação média das professoras.
// A pontuação média das mestres Jedi.
/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

$(function () {
  $('.dropdown-toggle').dropdown();
});

function numberOfCoders(){
  var codersActive = 0;
  var div = document.createElement("div");
  var listCoders = document.getElementById("coders");

  for(site in data){
    div.innerHTML += '<p>Sede '+ site +'</p>';
    for(labClass in data[site]){
      div.innerHTML += '<p>Turma '+ labClass +'</p>';
      for(i in data[site][labClass]["students"]){
        if(data[site][labClass]["students"][i]["active"]){
          codersActive++
        };
      };
      div.innerHTML += '<p>Total de alunas ativas '+ codersActive +'</p>';
      codersActive = 0
    };
  };
  listCoders.appendChild(div);
};


// A porcentagem de alunas desistentes
function codersDropOut(){

  var codersInactive = 0;
  var codersTotal = 0;
  var codersPercent = 0;
  var div = document.createElement("div");
  var listCoders = document.getElementById("coders");

  for(site in data){
    div.innerHTML += '<p>Sede '+ site +'</p>';
    for(labClass in data[site]){
      div.innerHTML += '<p>Turma '+ labClass +'</p>';
      for(i in data[site][labClass]["students"]){
        if(! data[site][labClass]["students"][i]["active"]){
          codersInactive++
        };
        codersTotal++
      };
      codersPercent = (codersInactive/codersTotal)*100;
      div.innerHTML += '<p>Percentual '+ Math.round(codersPercent) +'%</p>';
    };
  };
  listCoders.appendChild(div);
};


function loadCoders(site, labClass ) {

  var listCoders = document.getElementById("list-coders");
  listCoders.innerHTML = "";
  // for (turma in data[sede]) {
  //     console.log(data[sede]);
  //     console.log(data[sede][ano]);
      for (i in data[site][labClass]["students"]) {
        var img = document.createElement("img");
        img.src = data[site][labClass]["students"][i]["photo"];
        listCoders.appendChild(img);
      };
};
