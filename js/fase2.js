
function fase2(){

  var nom = ['A','L','B','E',5,'R','T'];

  for (var i=0; i < nom.length; i++) {
if (!isNaN(nom[i])){
  document.write('Els noms de les persones no contenen el número: ');
}
else if (nom[i].search(/[AEIOU]/) === 0){
  document.write('He trobat la VOCAL: ')
}

else {
  document.write('He trobat la CONSONANT: ');
}
document.write(nom[i]+'<br/>');
}
}

