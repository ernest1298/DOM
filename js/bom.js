
function bom() {
  var arr = [];
  var variable = document.getElementById('favchap').value;
  arr.push(variable);
  document.getElementById('favchap').value = ""; 

//   for (var i = 0; i < arr.length; i++) {
//     // document.getElementById("list").innerHTML = arr[i];
    console.log(arr)
//   }
var display = ""; 
for (var i = 0; i < arr.length; i++){
    display += `<p>${arr[i]} <button class="delete">X</button><p>`; 
    document.getElementById("list").innerHTML = display; 
}
 
// document.getElementById("list").innerHTML = display;



  


    

}