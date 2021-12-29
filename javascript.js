/*window.alert("Minha primeira mensagem!")
window.confirm("Está gostando de JS?")*/

var nome = window.prompt("Qual é o seu nome?")

//window.alert('Olá, ' + nome) //Veja que o sinal de + serve para concatenar a string com o valor da variável

//comentário de uma linha

/*comentário de mais
de uma linha*/

document.getElementById('titulo').innerHTML = "Olá," + nome;

