//add listener first number
document.getElementById('n1').addEventListener('input', getValue);

//add listener second number
document.getElementById('n2').addEventListener('input', getValue);

//get change from operator
document.querySelector('select').addEventListener('change', changeOp);

//starts the operation variables
let n1Value;
let n2Value;

//get operator value
let op = document.querySelector('option').value;
//get button to operate
let calc = document.getElementById('calc');

//assigns the value to each variable
function getValue (evt) {
    if (evt.target.id == 'n1') {
        n1Value = Number(this.value);
    } else {
        n2Value = Number(this.value);
    }
};

//perform operator switch
function changeOp () {
    var option = this.selectedOptions[0];
    op = option.value;
};

//performs the operation
calc.addEventListener('click',  () => {
    switch(op) {
        case 'sum':
            let sum = n1Value + n2Value;
            document.getElementById('res').innerHTML = `${sum}`
            break
        case 'sub':
            let sub = n1Value - n2Value;
            document.getElementById('res').innerHTML = `${sub}`
            break
        case 'division':
            let division = n1Value / n2Value;
            document.getElementById('res').innerHTML = `${division}`
            break
        case 'multi':
            let multi = n1Value * n2Value;
            document.getElementById('res').innerHTML = `${multi}`
            break
    }        
})

//call the function with enter key
document.addEventListener('keydown', function(e) {
    if(e.key == "Enter"){
      document.getElementById("calc").click();
    }
});