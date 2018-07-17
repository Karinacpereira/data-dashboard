/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

function loadCoders(turma) {
  var sede = "CDMX";
  var listCoders = document.getElementById("alunas-mexico");
  listCoders.innerHTML = "";
  for (turma in data[sede]) {
      for (i in data[sede][turma]["students"]) {
        console.log(data[sede][turma]);
        var img = document.createElement("img");
        img.src = data[sede][turma]["students"][i]["photo"];
        listCoders.appendChild(img);
      }
    }
};
