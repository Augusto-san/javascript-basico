function tabuada() {
	var num = Number(document.getElementById('idNumero').value)
	var tab = document.getElementById("selTabuada")
	var texto = ""
	var i = 0

	if (num.length == "") {
		window.alert("Por favor, digite um número!")
	} else {
		tab.innerHTML = ""
		while(i <= 10){
			var item = document.createElement('option')
			item.text = `${num} x ${i} = ${num*i}`
			item.value = `tab${i}`
			//texto +=  num + " x " + i + "<br>"
			
			tab.appendChild(item)
			//document.getElementById("divSeletor").innerHTML = texto
			i++
		}

	}

}