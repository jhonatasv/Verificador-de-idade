const data = new Date()
const anoAtual = data.getFullYear()

const inputBirth = document.querySelector('#birthday')
const res = document.querySelector('#result')
const verificar = document.querySelector('#btn')

verificar.addEventListener('click', function verificar() {
    let birthValue = Number(inputBirth.value)
    let idade = anoAtual - birthValue
    
    
    if (birthValue > anoAtual) {
       // alert(`[Erro], Verifique os Dados.`)
        res.innerHTML = `<p class="msg-erro">Um viajante do Tempo? Verifique a Data de Nascimento</p>`
        
    } else if(inputBirth.value.length === 0) {
        res.innerHTML = `<p class="msg-erro">Ops.. Verifique e Preencha o Ano Corretamente.</p>`

    } else if(inputBirth.value.length > 5 || idade > 121) {
       res.innerHTML = `<p class="msg-erro">Ano invalido. Tente Novamente</p>`      
        
    } else {
        let sexo = document.getElementsByName('fsexo')
        let genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 2) {
                img.setAttribute('src', 'assets/img/bebe.m.jpg')
            } else if(idade < 12) {
                img.setAttribute('src', 'assets/img/crianca.m.jpg')
            } else if(idade < 24) {
                img.setAttribute('src', 'assets/img/adolescente.m.jpg')
            } else if(idade <= 59 ) {
                img.setAttribute('src', 'assets/img/adulto.m.png')
            } else {
                img.setAttribute('src', 'assets/img/idoso.m.jpg')
            }

        } else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 2) {
                img.setAttribute('src', 'assets/img/bebe.f.jpg')
            } else if(idade < 12) {
                img.setAttribute('src', 'assets/img/crianca.f.jpg')
            } else if(idade < 24) {
                img.setAttribute('src', 'assets/img/adolescente.f.jpg')
            } else if(idade <= 59) {
                img.setAttribute('src', 'assets/img/adulto.f.jpg')
            } else {
                img.setAttribute('src', 'assets/img/idosa.f.jpg')
            }
        }

        res.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
        res.style.textAlign = 'center'
        document.querySelector('#foto').style.margin = '15px'
    }

})
