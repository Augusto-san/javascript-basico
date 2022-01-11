function carregar() {
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	var minutos = data.getMinutes()

	msg.innerHTML = `Agora são  ${hora}:${minutos}`

	if (hora >= 6 && hora < 10) {
		//Bom dia!
		img.src = 'fotoManha.png'
		window.document.body.style.background = '#ffe792'
	} else if(hora >= 10 && hora < 17){
		//Bom dia!
		img.src = 'fotoDia.png'
		window.document.body.style.background = '#69d2cd'
	} else if (hora >= 17 && hora < 19) {
		//Boa tarde!
		img.src = 'fotoTarde.png'
		window.document.body.style.background = '#fb8351'
	} else if (hora >= 19 && hora < 24){
		//Boa noite!
		img.src = 'fotoNoite.png'
		window.document.body.style.background = '#333237'
	} else {
		img.src = 'fotoMadrugada.png'
		window.document.body.style.background = '#2f003f'
	}
}

function AutoRefresh() {
	setTimeout("location.reload(true);",60000);
}