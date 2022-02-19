let destaques = document.querySelector('#destaques')

let r = 0

setInterval(function() {
    r = r+100

    if(r === 100){
        destaques.src="imagens/banner/destaques2.jpg"
    }

    if(r === 200){
        destaques.src="imagens/banner/destaques3.jpg"
    }

    if(r === 300){
        destaques.src="imagens/banner/destaques1.jpg"
        r = 0
    }
  }, 3000);