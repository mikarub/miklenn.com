function myFunction(){
  var x = document.getElementById('myLinks');
  if(x.className === "menu"){
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
