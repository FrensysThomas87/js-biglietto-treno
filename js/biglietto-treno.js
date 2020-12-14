var priceContainer = document.getElementById('box');

var kilometers = prompt('Quanti kilometri devi percorrere?');


console.log('Il tizio deve percorrere ' + kilometers + ' kilometri');

var age = prompt('Quanti anni hai?');


console.log('Il tizio ha ' + age + ' anni');

var kilometersRate = 0.21;

var totalPrice = kilometers * kilometersRate;



if(isNaN(kilometers) || isNaN(age)){
  alert('L\'età e i kilometri devono essere un numero');
  priceContainer.innerText = 'Devi inserire un numero sia in kilometri che in età';
}else if(age < 18){
  kilometers = parseInt(kilometers);
  age = parseInt(age);
  console.log(typeof age);
  totalPrice = totalPrice - (totalPrice / 100) * 20;
  alert('Il prezzo da pagare è ' + totalPrice);
  priceContainer.innerText = 'Il prezzo da pagare è ' + totalPrice;
}else if(age >= 65){
  parseInt(kilometers);
  parseInt(age);
  totalPrice = totalPrice - (totalPrice / 100) * 40;
  alert('Il prezzo da pagare è ' + totalPrice);
  priceContainer.innerText = 'Il prezzo da pagare è ' + totalPrice;
}else{
  parseInt(kilometers);
  parseInt(age);
  alert('Il prezzo da pagare è ' + totalPrice);
  priceContainer.innerText = 'Il prezzo da pagare è ' + totalPrice;
}
