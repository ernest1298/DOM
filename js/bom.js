var arr = [];
function bom() {

  var variable = document.getElementById('favchap').value;
  arr.push(variable);
  document.getElementById('favchap').value = ""; 

//   for (var i = 0; i < arr.length; i++) {
//     // document.getElementById("list").innerHTML = arr[i];
    console.log(arr)
//   }

document.getElementById("list").innerHTML = arr.join("<br/>")




  


    

}