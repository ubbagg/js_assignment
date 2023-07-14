// function calculate(){
//     let amount = document.getElementById('amount');
//     let years = document.getElementById('Years');
//     let months = document.getElementById('Months');
//     let IR = document.getElementById('InterestRate');
//     let time = years.value*12 + +months.value;

// }

function calculate(){
    let amount = document.getElementById('amount');
    let years = document.getElementById('Years');
    let months = document.getElementById('Months');
    let IR = document.getElementById('InterestRate');

    let time = years.value*12 + +months.value;
    
    let r = IR.value / 100 / 12;

    let emi = (amount.value * r * Math.pow(1+r, time)) / (Math.pow(1+r, time)-1);
    let Payable_amount = emi* time;
    let Interest_due = Payable_amount - amount.value;

    document.getElementById('EMI').innerText= emi;
    document.getElementById('Payable_amount').innerText= Payable_amount;
    document.getElementById('Interest_due').innerText= Interest_due;



}