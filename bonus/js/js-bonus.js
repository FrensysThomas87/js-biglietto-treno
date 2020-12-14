var priceContainer = document.getElementById('box');

var casual = Math.floor(Math.random() * 6) + 1;

var startingPrice = Math.floor(Math.random() * 101);

alert('Il prezzo di partenza è ' + startingPrice);

var numeroScelto = parseInt(prompt('Quale numero uscirà ? Scegli un numero da 1 a 6, se il numero scelto corrisponde con il numero uscito nei dadi otterrai uno sconto del 50%!!!'));




priceContainer.innerText = 'Hai digitato, ' + numeroScelto;

console.log(casual);



// console.log(typeof startingPrice);

if(isNaN(numeroScelto)){
  alert('Devi inserire un numero!!!!');
}else if(casual!== numeroScelto){
  alert('Mi dispiace hai perso niente sconto!!')
  priceContainer.append (' Mi dispiace hai perso niente sconto!!');
}else{
  startingPrice -= (startingPrice / 100) * 50;
  alert('Complimenti hai vinto hai ottenuto lo sconto del 50%!!!! il prezzo da pagare è ' + startingPrice);
  priceContainer.append (' Complimenti hai vinto hai ottenuto lo sconto del 50%!!!!, il prezzo da pagare è ' + startingPrice);
}
