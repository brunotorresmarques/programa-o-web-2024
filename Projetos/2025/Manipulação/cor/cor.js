let body = document.getElementById("body")

let tema = "Claro"


function mudarCor(){
    if(tema == "Claro"){
        body.style.backgroundColor = "black"
        body.style.color = "white"
        tema = "Escuro" 
    }
    else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
        tema = "Claro"
    }
    
}
