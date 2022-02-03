function removePedaco(){
	var pedacos = window.document.getElementById('inpNumero')
	var imgPizza = document.getElementById('img-pizza')
	var QTDpedacos = Number(pedacos.value)

	if (QTDpedacos > 7) {
		window.alert("Você só tem 7 pedações!")
	} else {
		switch(QTDpedacos){

			case 1:
				imgPizza.setAttribute('src', 'pizza-1.png')
			break

			case 2:
				imgPizza.setAttribute('src', 'pizza-2.png')
			break

			case 3:
				imgPizza.setAttribute('src', 'pizza-3.png')
			break

			case 4:
				imgPizza.setAttribute('src', 'pizza-4.png')
			break

			case 5:
				imgPizza.setAttribute('src', 'pizza-5.png')
			break

			case 6:
				imgPizza.setAttribute('src', 'pizza-6.png')
			break

			case 7:
				imgPizza.setAttribute('src', 'pizza-7.png')
			break

			case 8:
				imgPizza.setAttribute('src', '.png')
			break
		}
	}
}