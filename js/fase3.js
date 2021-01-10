function fase3() {
var nom = ["A","L","B","E","R","T"];
var numeroTaula=[];

for (var i = 0; i < nom.length; i++) {
	numeroTaula[i] = nom.filter(function(x){ return x == nom[i]; }).length;
	};

for (var i = 0; i < nom.length; i++) {
	document.write(nom[i]+' : '+numeroTaula[i]+'<br/>');
	};
}
