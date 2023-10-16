/*Título quem somos*/

function titu(a){
    if(a==1){
    document.getElementById("deepgarden").value="Quem somos";
}
    if(a==2 ){
    document.getElementById("deepgarden").value="Deep Garden";
}
}

/*Fim quem somos*/

/*Tela serviços*/
var volta = [7];
function servbtn(ide){
    if(volta[ide]!=1){
    document.getElementById(ide).style.transform="rotate(90deg)"
    document.getElementById(ide+10).style.display="block"
    volta[ide]=1;
    }
    else{
    document.getElementById(ide).style.transform="rotate(0deg)"
    document.getElementById(ide+10).style.display="none"
    volta[ide]=0;
    }
}
/*Fim tela serviços*/
var visibilidade = true;
function mapa() { 

    if (visibilidade) {
        document.getElementById("maps").style.display = "none";
        visibilidade = false;
    } else {
        document.getElementById("maps").style.display = "block";
        visibilidade = true;
    }
}