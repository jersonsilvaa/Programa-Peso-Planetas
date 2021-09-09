function procesar(){
              
    var peso = document.getElementById('ema').value;
    var planetaS = document.getElementById('planetas').value;

    if(planetaS=="Mercurio"){
     var mercurio = 3.7;

     var resu = (peso * mercurio) / 9.8;

     alert("Tu peso en Mercurio es: "+ resu);
     document.getElementById("miForm").reset();

    }else if(planetaS=="Venus"){
     var venus = 8.9;
     var ressu = (peso * venus) / 9.8;
     alert("Tu peso en Venus es: "+ ressu);
     document.getElementById("miForm").reset();

    }else if(planetaS=="Tierra"){
     var tierra = 9.8;
     var resssu = (peso * tierra) / 9.8;
     alert("Tu peso en la Tierra es: "+ resssu);
     document.getElementById("miForm").reset();

    }else if(planetaS=="Marte"){
     var marte = 3.7;
     var ressssu = (peso * marte) / 9.8;
     alert("Tu peso en Mercurio es: "+ ressssu);
     document.getElementById("miForm").reset();

    }else if(planetaS=="Júpiter"){
     var jupiter = 23.1;
     var ressun = (peso * jupiter) / 9.8;
     alert("Tu peso en Jupiter es: "+ ressun);
     document.getElementById("miForm").reset();

    }else if(planetaS=="Saturno"){
     var saturno = 9.1;
     var ressus = (peso * saturno) / 9.8;
     alert("Tu peso en Saturno es: "+ ressus);
     document.getElementById("miForm").reset();

    }else if(planetaS=="Urano"){
     var urano = 8.7;
     var ressuq = (peso * urano) / 9.8;
     alert("Tu peso en Urano es: "+ ressuq);
     document.getElementById("miForm").reset();

    }else if(planetaS=="Neptuno"){
     var neptuno = 11.2;
     var ressur = (peso * neptuno) / 9.8;
     alert("Tu peso en Mercurio es: "+ ressur);
     document.getElementById("miForm").reset();

    }

     }