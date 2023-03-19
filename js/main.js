// creating variables
const debt = document.querySelector('#debt');
let minWage = 6700;
let commission;
const collectTypeInp = document.querySelectorAll('.collectType');
const property = document.querySelector('#property');
const currency = document.querySelector('#currency');
const charge = document.querySelector('#charge');
const formDebt = document.querySelector('.form__debt');
const formDebtorType = document.querySelector('.form__debtorType');
const company = document.querySelector('#company');
const person = document.querySelector('#person');
const bill = document.querySelector('#bill');
const name = document.querySelector('#name');
const address = document.querySelector('#address');

// commission calculation when entering the amount
debt.addEventListener('input', calcDebt);

function calcDebt() {
    collectTypeInp.forEach((el) => {
        if (el.checked == true && el.id == "property" && debt.value > 0) {
            if ((debt.value * 0.02) <= 10 * minWage) {
                commission = (debt.value * 0.02).toFixed(2);
            } else if ((debt.value * 0.02) > 10 * minWage) {
                commission = 10 * minWage + ' грн';
            }
            charge.innerText = commission;
        }
    })
}

//switching - property / non-property
currency.addEventListener('change', toggleForm);
property.addEventListener('change', toggleForm);

function toggleForm() {
    formDebtorType.classList.toggle('hide');
    formDebt.classList.toggle('hide');
    charge.innerText = '';
    debt.value = '';
}

company.addEventListener('change', function () {
    charge.innerText = 2 * minWage + ' грн';
})
person.addEventListener('change', function () {
    charge.innerText = minWage + ' грн';
})



// creating a receipt by click
bill.addEventListener('click', createBill);
document.body.addEventListener('keydown', pressKeyEnter);

function createBill() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('debt', debt.value);
    localStorage.setItem('charge', commission);
}
// creating a receipt by pressing the enter key
function pressKeyEnter(el) {
    if (el.keyCode == 13) {
        bill.click();
    }
}
