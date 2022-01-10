/*window.alert("Minha primeira mensagem!")
window.confirm("Está gostando de JS?")*/

//let nome = window.prompt("Qual é o seu nome?")

//window.alert('Olá, ' + nome) //Veja que o sinal de + serve para concatenar a string com o valor da variável

//comentário de uma linha

/*comentário de mais
de uma linha*/

//document.getElementById("titulo").innerHTML = "Olá, " + nome;

	window.onload = function(){
	//EXERCÍCIO 2
	//https://pt.stackoverflow.com/questions/182797/qual-a-diferen%c3%a7a-entre-document-ready-e-window-onload
	//https://pt.stackoverflow.com/questions/207822/cannot-read-property-addeventlistener-of-null

	var a = window.document.getElementById('area')

	function clicar() {
		a.innerHTML = 'Clicou!'
		a.style.background = 'red'
	}

	function entrar() {
		a.innerHTML = 'Entrou!'
		a.style.background = "blue"
	}

	function sair() {
		a.innerHTML = 'Saiu!'
		a.style.background = 'green'
	}

	a.addEventListener('click', clicar)
	a.addEventListener('mouseenter', entrar)
	a.addEventListener('mouseout', sair)
}

	//EXERCÍCIO 3
	//
	function somar(){
		var num1 = window.document.getElementById('inp-num1')
		var num2 = window.document.getElementById('inp-num2')
		var resultado = window.document.getElementById('resultado')	
		
		var n1 = Number(num1.value)
		var n2 = Number(num2.value)
		var soma =	n1 + n2

		resultado.innerHTML = `O resultado é <strong>${soma}</strong>`
	}

	//EXERCÍCIO 4
	//https://developer.mozilla.org/pt-BR/docs/Web/API/Document/write
	function notifica(){
		var vel = window.document.querySelector('input#inpVelocidade')

		var nVel = Number(vel.value)

		if (nVel > 60) {
			resVelocidade.innerHTML = `Sua velocidade é de ${nVel} Km/h e está acima do permitido.`			
		} else {
			resVelocidade.innerHTML = `Parabéns, sua velocidade é de ${nVel} Km/h e está dentro do limite.`
		}
	}

	//EXERCÍCIO 5
	//https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input
	function verificaNacional(){
		var txtNacional = window.document.querySelector('input#inpNacional')

		if (txtNacional.value == "Brasil" || "brasil") {
			pNacional.innerText = "Brasileiro"
		} else {
			pNacional.innerText = "Xiiih! você não é Brasileiro"
		}
	}

	//EXERCÍCIO 6
	//

	function verDia(){
		var agora = new Date();
		var verDia = agora.getDay();

		switch(verDia){
			case 0:
			window.document.alert("Domingo")
			break

			case 1:
			window.document.alert("Segunda")
			break
		
			case 2:
			window.document.alert("Terça")
			break

			case 3:
			window.document.alert("Quarta")
			break

						case 2:
			ow.document.alert("Quinta")
			break

			case 2:
			window.document.alert("Sexta")
			break

			case 2:
			window.document.alert("Sábado")
			break

	}