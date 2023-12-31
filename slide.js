var radio = document.querySelector('.manualnav')
var cont = 1

document.getElementById('promoum').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('promo'+cont).checked = true    
}
