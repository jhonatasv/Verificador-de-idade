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
    let idade = ano - Number(birthday)
    let result = document.querySelector('#result')
    
    //validando se (ano é maior do que o ano atual) e se o (capom está vazio)

    if(birthday > ano || birthday.length == 0) { 
        result.innerHTML = alert(`[Erro], Verifique os Dados`)
        result.innerHTML = ``
    } else {
        let sexo = document.getElementsByName('fsexo')
        let genero = ''

        if(sexo[0].checked) {
            genero = 'Homen'
        } else if (sexo[1].checked) {
            genero = 'Mulher'
        }
        result.innerHTML = `<p>Detectamos uma pessoa de ${idade} do sexo ${genero}</p>`

    }

})
