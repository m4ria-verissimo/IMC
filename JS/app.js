function cal(){


    var peso =Number( document.getElementById("peso").value);
    var altura =Number(document.getElementById("altura").value);
    
     if((peso)=="" || (altura) ==""){
        alert("Preencha os campos vazios..");
    }else{
     
    var resul = peso/(altura*altura);
    var imc= resul.toFixed(2);
     document.getElementById("resul").innerHTML="Resultado: " + imc;
    }
} 