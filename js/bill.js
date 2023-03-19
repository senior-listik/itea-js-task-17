// creating variables
const name = document.querySelector('#fio2');
const address = document.querySelector('#address');
const sum = document.querySelector('#sum3');
const commission = document.querySelector('#commission');

// registering data from Local Storage in the corresponding cells of the receipt
name.innerHTML = `<b>${localStorage.name}</b>`;
address.innerHTML = `<b>${localStorage.address}</b>`;
sum.innerHTML = `<b>${localStorage.debt} грн.</b>`;
commission.innerHTML += `<b> ${localStorage.charge} грн.</b>`