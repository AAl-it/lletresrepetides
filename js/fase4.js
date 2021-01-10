function fase4() {

    var nom = "ALBERT ALCANTARA";
    var nomTaula = nom.split("");
    var numeroTaula=[];
    
    for (var i = 0; i < nomTaula.length; i++) {
        numeroTaula[i]=numeroTaula.length+0;
        };
    
    for (var i = 0; i < nomTaula.length; i++) {
        document.write(numeroTaula[i]+' : '+nomTaula[i]+'<br/>');
        };
    }
    
    