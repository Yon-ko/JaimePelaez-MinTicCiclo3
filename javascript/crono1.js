let minutos=0;
let segundos=0;
let mile=0;
let crono=0;
var registro=[""];
let conte=0;

function iniciarConteo(bandera){
    if(bandera==1 && conte==0){
        conte=1;
        crono=setInterval(proceso, 16.66666666)

            function proceso(){
                mile++;
                if(mile==60){
                    segundos++;
                    mile=0;
                }
                if(segundos==60){
                    minutos++;
                    segundos=0;
                }
                if(minutos==60){
                    minutos=0;
                }
            document.getElementById("parrafo").innerHTML=minutos +":"+ segundos +":"+ mile;    
            }
        }else if (bandera==0){
            clearInterval(crono);
            conte=0;
        }else if(bandera==2){
            clearInterval(crono);
            conte=0;
            let historial = minutos +":"+ segundos +":"+ mile;
            registro.push(historial);
            registro.push("<br>");
            minutos=0;
            segundos=0;
            mile=0;
            document.getElementById("parrafo").innerHTML= minutos +":"+ segundos +":"+ mile;
            document.getElementById("historial").innerHTML=registro;
        }
    }