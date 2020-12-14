var priceContainer = document.getElementById('box');

var kilometers = parseInt(prompt('Quanti kilometri devi percorrere?'));

console.log('Il tizio deve percorrere ' + kilometers + ' kilometri');

var age = parseInt(prompt('Quanti anni hai?'));

console.log('Il tizio ha ' + age + ' anni');

var kilometersRate = 0.21;

var totalPrice = kilometers * kilometersRate;



if(isNaN(kilometers) || isNaN(age)){
  alert('L\'età e i kilometri devono essere un numero');
}else if(age < 18){
  totalPrice = (totalPrice * 20) / 100;
  alert('Il prezzo da pagare è ' + totalPrice);
}else if(age >= 65){
  totalPrice = (totalPrice * 40) / 100;
  alert('Il prezzo da pagare è ' + totalPrice);
}else{
  alert('Il prezzo da pagare è ' + totalPrice);
}
