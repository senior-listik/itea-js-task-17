const debt = document.querySelector('#debt');
let minWage = 6700;
const collectTypeInp = document.querySelectorAll('.collectType');
const property = document.querySelector('#property');
const currency = document.querySelector('#currency');
const charge = document.querySelector('#charge');
const formDebt = document.querySelector('.form__debt');
const formDebtorType = document.querySelector('.form__debtorType');
const company = document.querySelector('#company');
const person = document.querySelector('#person');

debt.addEventListener('input', calcDebt);

function calcDebt() {
    collectTypeInp.forEach((el) => {
        if (el.checked == true && el.id == "property" && debt.value != NaN) {
            if ((debt.value * 0.02) <= 10 * minWage) {
                charge.innerText = (debt.value * 0.02).toFixed(2);
            } else if ((debt.value * 0.02) > 10 * minWage){
                charge.innerText = 10 * minWage + 'грн';
            }
        }
    })
}

currency.addEventListener('change', toggleForm);

function toggleForm() {
    formDebtorType.classList.toggle('hide');
    formDebt.classList.toggle('hide');
    charge.innerText = '';
    debt.value = '';
}

company.addEventListener('change', function () {
    charge.innerText = 2 * minWage + 'грн';
})
person.addEventListener('change', function () {
    charge.innerText = minWage + 'грн';
})

property.addEventListener('change', toggleForm);