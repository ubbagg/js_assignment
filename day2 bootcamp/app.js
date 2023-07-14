
function check(){
    let age = document.getElementById('age').value;
    if (age>=18){
        document.getElementById('result').innerText = "You are eligible to vote." ;
    }
    else{
        document.getElementById('result').innerText = "You are not eligible to vote." ;
    }
}

function run(){
    let digit = document.getElementById('digit').value;
    let table = " ";

    for(let i=1; i<11; i++){
        table += digit + ' x ' + i + ' = ' + digit*i + '\n'; 
    }

    document.getElementById('table').innerText=table;

}


function convert(){
    let amount = document.getElementById('amount').value;
    document.getElementById('conversion').innerText=amount + '$ is equals to '+ amount*74.5 + ' rupees.';

}

