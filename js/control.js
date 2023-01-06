let horas = document.getElementById("horas").innerHTML
let minutos = document.getElementById("minutos").innerHTML
let segundos = document.getElementById("segundos").innerHTML
let voltas = 0

let hh = parseInt(horas)
let mm = parseInt(minutos)
let ss = parseInt(segundos)



function comecarParar() {
    let valorBtn = document.getElementById("comecar").innerHTML 
    if (valorBtn == "Começar") {
        timer = setInterval(function() { 
            ss++
            if (ss == 60){
                mm++
                ss = 0
                if (mm == 60) {
                    hh++
                    mm = 0
                }

            }
            if (hh < 10) {
                document.getElementById("horas").innerHTML = `0${hh}`
            }
            else {
                document.getElementById("horas").innerHTML = hh
            }

            if (mm < 10) {
                document.getElementById("minutos").innerHTML = `0${mm}`
            }
            else {
                document.getElementById("minutos").innerHTML = mm
            }
            
            if (ss < 10) {
            document.getElementById("segundos").innerHTML = `0${ss}`
            }
            else {
                document.getElementById("segundos").innerHTML = ss
            }
            
        },1000)
        document.getElementById("comecar").innerHTML = "Parar"
    }
    else {
        document.getElementById("comecar").innerHTML = "Começar"
        
        clearInterval(timer)
    } 
}

function zerar() {

    document.getElementById("horas").innerHTML = "00"
    document.getElementById("minutos").innerHTML = "00"
    document.getElementById("segundos").innerHTML = "00"
    document.getElementById("comecar").innerHTML = "Começar"

    clearInterval(timer)
}


function marcar() {
    voltas++
    if (voltas <10){
        voltasValor = "0"+voltas
    }
    else {
        voltasValor = voltas
    }

    let marcarcoes = document.getElementById("container-2")
    marcarcoes.innerHTML += `<div class="voltas-marcada">
    <div class="valor-marcacoes">
        <p>${voltasValor}</p>
    </div>
    <div class="valor-marcacoes">
        <p>${hh}</p>
    </div>
    <div class="valor-marcacoes">
        <p>${mm}</p>
    </div>
    <div class="valor-marcacoes">
        <p>${ss}</p>
    </div>
</div>  `
}


