function contaconta() {
	var inicio = Number(document.getElementById('idInicio').value)
	var fimfim = Number(document.getElementById('idFim').value)
	var passo = Number(document.getElementById('idPasso').value)
	let textoSaida = ""


	//validando os inputs
	if (inicio < 0 || fimfim <= inicio || passo < 0 || passo >= fimfim) {
		document.getElementById("divContadora").innerHTML = "<strong>Regras</strong> <br>📌Inicio deve ser maior que 0 <br> 📌Fim deve ser maior que Início <br> 📌Passo deve ser menor que Fim"
	} else if(passo == "" || passo >= 0){
		
		if (passo == 0) {passo = 1}

			for(let i = inicio; i < fimfim; i+=passo){
				textoSaida += "👉" + i + "<br>"
			}

		//alterando a div para exibir o resultado do for
		document.getElementById("divContadora").innerHTML = textoSaida

		//alterando o texto do parágrafo "preparando contagem..."
		//EMOJIS https://www.kirupa.com/html5/emoji.htm 
		//https://emojipedia.org/
		document.getElementById("Ppreparando").innerHTML = "😉Contando:" //+ String.fromCodePoint(0x26A0)

	}

}