function verificar() {
	var data = new Date()
	var ano = data.getFullYear()
	var Fano = document.getElementById('txtano')
	var res = document.querySelector('div#res')

	/*VALIDANDO OS DADOS: SE O VALOR INSERIDO NO CAMPO ANO DE NASCIMENTO FOR IGUAL A ZERO OU
	SE O VALOR INSERIDO NO CAMPO ANO DE NASCIMENTO FOR MAIOR DO QUE O ANO ATUAL, SERÁ EXIBIDA
	UM ALERTA*/
	if (Fano.value.length == 0 || Number(Fano.value) > ano) {
		window.alert('[ERRO] Verifique os dados e tente novamente!')
	} else{
		var fsex = document.getElementsByName('radsex')
		var idade = ano - Number(Fano.value)
		var genero = ''
		var img = document.createElement('img') //VARIÁVEL QUE GUARDA UM OBJETO IMAGEM
		img.setAttribute('id', 'foto') //ATRIBUINDO O ID FOTO PARA A IMAGEM
		img.style.padding = '15px' //APLICANDO ESTILO PADDING NA IMAGEM

		/*SE O PRIMEIRO ITEM DO OBJETO CHAMADO fsex ESTIVER "CHECK", OU SEJA, SELECIONADO
		ESSA PARTE SERÁ EXECUTADA*/
		if (fsex[0].checked) {
			genero = 'Homem'
			if (idade >=0 && idade < 3) {
				//Bebê
				img.setAttribute('src', 'bebe.png')
			} else if (idade < 14) {
				//Criança
				img.setAttribute('src', 'crianca_menino.png')
			}
			else if (idade < 21) {
				//Jovem
				img.setAttribute('src', 'jovem_homem.png')
			} else if (idade < 50) {
				//Adulto
				img.setAttribute('src', 'adulto_homem.png')
			} else {
				//Idoso
				img.setAttribute('src', 'velho_homem.png')
			}

			/*SE O SEGUNDO ELEMENTO DO OBJETO fsex ESTIVER "CHECK", ENTÃO ESSA PARTE DO CÓDIGO 
			SERÁ EXECUTADA*/
		} else if (fsex[1].checked) {
			genero = 'Mulher'
			if (idade >=0 && idade < 3) {
				//Bebê
				img.setAttribute('src', 'bebe.png')
			} else if (idade < 14) {
				//Criança
				img.setAttribute('src', 'crianca_menina.png')
			}
			else if (idade < 21) {
				//Jovem
				img.setAttribute('src', 'jovem_mulher.png')
			} else if (idade < 50) {
				//Adulto
				img.setAttribute('src', 'adulto_mulher.png')
			} else {
				//Idoso
				img.setAttribute('src', 'velho_mulher.png')
			}		
		}
		res.style.textAlign = 'center'
		res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
		res.appendChild(img)
	}
}
