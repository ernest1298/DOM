var arr = [];
var display = [];
var final_display = "";
function bom() {
  
  var final_display = "";
  var variable = document.getElementById('favchap').value;
  arr.push(variable);
  document.getElementById('favchap').value = ""; 
 
 
for (var i = 0; i < arr.length; i++){
    display[i] = `<div><p>${arr[i]} <button onclick="del()" class="delete" id = "out${i}">X</button></p></div>`; 
};



final_display=display.join('');

document.getElementById("list").innerHTML = final_display;

}

function del() {
    check = true;
    var i=0;
     while(check){
        if (event.target.id == "out"+i){
            check = false;
        }
        else{
        i++;}
     }

     index = i;
     display.splice(index,1);
     console.log(index);
     final_display=display.join('');
     document.getElementById("list").innerHTML = final_display;


     

  
}