var priceContainer = document.getElementById('box');

var casual = Math.floor(Math.random() * 6) + 1;

var numeroScelto = parseInt(prompt('Quale numero uscirà ? Scegli un numero da 1 a 6, se il numero scelto corrisponde con il numero uscito nei dadi otterrai uno sconto del 50%!!!'));

console.log(casual);

var startingPrice = 100;

if(isNaN(numeroScelto)){
  alert('Devi inserire un numero!!!!');
}else if(casual!== numeroScelto){
  alert('Mi dispiace hai perso niente sconto!!')
  priceContainer.innerText = 'Mi dispiace hai perso niente sconto!!'
}else{
  startingPrice = startingPrice - (100 / 100) * 50;
  alert('Complimenti hai vinto hai ottenuto lo sconto del 50%!!!! il prezzo da pagare è ' + startingPrice);
  priceContainer.innerText = 'Complimenti hai vinto hai ottenuto lo sconto del 50%!!!!, il prezzo da pagare è ' + startingPrice;
}
