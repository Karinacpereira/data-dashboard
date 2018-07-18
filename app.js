

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

/*
* Funcionalidad de tu producto
*/

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

// $(function () {
//   $('.dropdown-toggle').dropdown();
// });

var listCoders = document.getElementById("coders");

//Alunas por sede e turma
function numberOfCoders(site){
  var codersActive = 0;
  var div = document.createElement("div");

  div.innerHTML += "<h3>Sede "+ site +"</p>";
  for(labClass in data[site]){
    div.innerHTML += "<h3>Turma "+ labClass +"</p>";
    for(i in data[site][labClass]["students"]){
      if(data[site][labClass]["students"][i]["active"]){
        codersActive++
      };
    };
    div.innerHTML += "<h2>Total de alunas ativas" + codersActive +"</p>";
    codersActive = 0
  };
  listCoders.appendChild(div);
}


// Porcentagem de alunas desistentes
function codersDropOut(site){

  var codersInactive = 0;
  var codersTotal = 0;
  var codersPercent = 0;
  var div = document.createElement("div");

  div.innerHTML += "<h3>Sede"+ site +"</p>";
  for(labClass in data[site]){
    div.innerHTML += "<h3>Sede"+ labClass +"</p>";
    for(i in data[site][labClass]["students"]){
      if(! data[site][labClass]["students"][i]["active"]){
        codersInactive++
      };
      codersTotal++
    };
    codersPercent = (codersInactive/codersTotal)*100;
    div.classList = "div-content";
    div.className = "container"
    div.innerHTML += "<h2>Percentual" + Math.round(codersPercent) +"%</p>";
  };
  listCoders.appendChild(div);
}

// O número de alunas que excedem a meta de pontos, em média, de todos os sprints realizados.
//O objetivo dos pontos é 70% do total de pontos em HSE e em tecnologia.
var tecGrade = 1800 * 70 / 100;
var hseGrade = 1200 * 70 / 100;

// A pontuação média das professoras
function gradeTeacher(site){

  var teacherScore = 0;
  var numSprint = 0;

  for (var series in data[site]){
    for (var i in data[site][series]['ratings']){
      numSprint += 1;
      teacherScore += data[site][series]['ratings'][i]['teacher'];
    }
  }

  var mediaGradeTeacher = (teacherScore / numSprint).toFixed(2);
  var gradeTeacherMenu = document.createElement('div');
  gradeTeacherMenu.classList = "div-content";
  gradeTeacherMenu.innerHTML += "<h2 class="container-fluid">" + mediaGradeTeacher + "</p>";
  gradeTeacherMenu.innerHTML += "<p> Média dos Professores da Sede: "+site+"</p>";
  listCoders.appendChild(gradeTeacherMenu);
  numSprint = 0;
  teacherScore = 0;
  numSprint = 0;
  mediaGradeTeacher = 0;

}
// A pontuação média das mestres Jedi
function gradeJedis(site){

  var jediScore = 0;
  var numSprint = 0;

  for (var series in data[site]){
    for (var i in data[site][series]['ratings']){
      numSprint += 1;
      jediScore += data[site][series]['ratings'][i]['jedi'];
    }

    var mediaGradeJedi = (jediScore / numSprint).toFixed(2);
    var gradeJediMenu = document.createElement('div');
    gradeJediMenu.classList = "div-content";
    gradeJediMenu.innerHTML += "<h2 class="container-fluid">" + mediaGradeJedi + "</p>";
    gradeJediMenu.innerHTML += "<p> Média dos Jedis da Sede: "+site+"</p>";
    listCoders.appendChild(gradeJediMenu);
    numSprint = 0;
    jediScore = 0;
    numSprint = 0;
    mediaGradeJedi = 0;
  }
}


// O número de alunas que excedem a meta de pontos, em média, de todos os sprints realizados.
// O objetivo dos pontos é 70% do total de pontos em HSE e em tecnologia.


//Perfis das alunas por sede e turma
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
  }
  // }
};
