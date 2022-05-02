verificar.addEventListener('click', function verificar(){
    const data = new Date()
    let ano = data.getFullYear()
    let birthday = document.querySelector('#birthday').value
    let result = document.querySelector('#result')
    
    
    if(birthday > ano){ 
        result.innerHTML = alert(`[Erro], Verifique os Dados`)
        result.innerHTML = `<p>Você veio do futuro? Verifique a Data de Nascimento</p>`
   
    } else if ( birthday.length == 0) {
        result.innerHTML = `<p>Ops.. você esqueceu de Preenche o Ano de Nascimento</p>`
   
    } else {
        let sexo = document.getElementsByName('fsexo')
        let idade = ano - Number(birthday)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2) { 
                img.setAttribute('src', '/assets/img/bebe.m.jpg')
            } else if(idade < 12) {
                img.setAttribute('src', '/assets/img/crianca.m.jpg')
            } else if(idade < 24) {
                img.setAttribute('src', '/assets/img/adolescente.m.jpg')
            } else if(idade <= 59) {
                img.setAttribute('src', '/assets/img/adulto.m.png')
            } else {
                img.setAttribute('src', '/assets/img/idoso.m.jpg')
            }

        } else if(sexo[1]) {
            genero ='Mulher'

            if(idade >= 0 && idade < 2) {
                img.setAttribute('src', '/assets/img/bebe.f.jpg')
            } else if(idade < 12) {
                img.setAttribute('src', '/assets/img/crianca.f.jpg')
            } else if(idade < 24) {
                img.setAttribute('src', '/assets/img/adolescente.f.jpg')
            } else if(idade <= 59) {
                img.setAttribute('src', '/assets/img/adulto.f.jpg')
            } else {
                img.setAttribute('src', '/assets/img/idosa.f.jpg')
            }
 
        }

        result.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p>`
        result.appendChild(img)
        result.style.textAlign = 'center'
        document.querySelector('#foto').style.margin = '15px'
    }
})
