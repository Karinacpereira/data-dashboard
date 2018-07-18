/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
// console.log(data);

$(function () {
  $('.dropdown-toggle').dropdown();
}); 

function loadCoders(sede, ano) {

  var listCoders = document.getElementById("list-coders");
  listCoders.innerHTML = "";
  // for (turma in data[sede]) {
  //     console.log(data[sede]);
  //     console.log(data[sede][ano]);
      for (i in data[sede][ano]["students"]) {
        var img = document.createElement("img");
        img.src = data[sede][ano]["students"][i]["photo"];
        listCoders.appendChild(img);
      }
    // }
};
