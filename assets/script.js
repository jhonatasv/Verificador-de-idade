// verificar.addEventListener('click', function verificar(){
//     let data = new Date()
//     let ano = data.getFullYear()
//     let birthday = document.querySelector('#birthday').value
//     let idade = ano - Number(birthday)
//     let result = document.querySelector('#result')
    
//     //validando se (ano é maior do que o ano atual) e se o (capom está vazio)

//     if(birthday > ano || birthday.length == 0) { 
//         result.innerHTML = alert(`[Erro], Verifique os Dados`)
//         result.innerHTML = ``
//     } else {
//         let sexo = document.getElementsByName('fsexo')
//         let genero = ''

//         if(sexo[0].checked) {
//             genero = 'Homen'
//         } else if (sexo[1].checked) {
//             genero = 'Mulher'
//         }
//         result.innerHTML = `<p>Detectamos uma pessoa de ${idade} do sexo ${genero}</p>`

//     }

// })

verificar.addEventListener('click', function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let birthday = document.querySelector('#birthday').value
    let result = document.querySelector('#result')
    
    //validando se (ano é maior do que o ano atual) e se o (capom está vazio)
    
    if(birthday > ano || birthday.length == 0) { 
        result.innerHTML = alert(`[Erro], Verifique os Dados`)
        result.innerHTML = `<p>Ops.. você esqueceu de Preenche o Ano de Nascimento</p>`

    } else {
        let sexo = document.getElementsByName('fsexo')
        let idade = ano - Number(birthday)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked) {
            genero = 'Masculino'

            if (idade >= 0 && idade < 2) { //0 a 2
                img.setAttribute('src', '/assets/img/bebe.m.jpg')
            } else if (idade < 12) { // 3 a 11
                img.setAttribute('src', '/assets/img/crianca.m.jpg' )
            } else if (idade < 24) { // 12 a 24
                img.setAttribute('src', '/assets/img/adolescente.m.jpg')
            } else if (idade <= 59) { // 25 a 59
                img.setAttribute('src', 'assets/img/adulto.m.png')
            } else if (idade >= 60){ // 60
                img.setAttribute('src', '/assets/img/idoso.m.jpg')
            }
        } else if (sexo[1].checked) { {}
            genero = 'Mulher'
        } else if (idade >= 0 && idade < 2) {
            //crinça
        }

        result.innerHTML = `<p>Detectamos uma pessoa de ${idade} do sexo ${genero}</p>`
        result.appendChild(img)
        document.querySelector('#foto').style.margin = '15px'
        result.style.textAlign = 'center'
    }

})
