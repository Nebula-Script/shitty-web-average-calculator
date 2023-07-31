let counter = 0
let board = document.querySelector(".nums")
numlist = []

function sendMessage(){
	let input = document.querySelector(".input_messages");
	let text = document.createElement("p");
	text.innerText = input.value;
	board.append(text);
	numlist.push(input.value)
}

let end = document.querySelector(".final")
let sum = 0

function calculateAvg(){
	for (let i=0; i < numlist.length; i++){
		sum += parseFloat(numlist[i]);
	}
	let result = sum / numlist.length
	end.append("A média é: ",result)
}

let botaoMedia = document.querySelector(".avg");
botaoMedia.addEventListener("click",calculateAvg)

let botaoEnviar = document.querySelector(".enviar");
botaoEnviar.addEventListener("click",()=>sendMessage());