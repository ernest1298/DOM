var arr = [];
function bom() {
  
  var final_display = "";
  var variable = document.getElementById('favchap').value;
  arr.push(variable);
  document.getElementById('favchap').value = ""; 
var display = []; 
 
for (var i = 0; i < arr.length; i++){
    display[i] = `<div><p>${arr[i]} <button class="delete">X</button></p></div>`; 
};

final_display=display.join('');

document.getElementById("list").innerHTML = final_display;
}