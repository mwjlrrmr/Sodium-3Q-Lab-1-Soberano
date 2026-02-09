const c = 2.9978e8;
function calculateRelaKeneEne() {
    let v= parseFloat(document.getElementById('input-velocity').value);
    let m= parseFloat(document.getElementById('input-mass').value);
    let one = m*(c**2);
    let two= (v**2)/(c**2);
    let result= one /((1/(1-two))**(0.5));
    
    let output=`The relativistic kenetic energy is ${result}`;
    document.getElementById("rke-result").innerText = output;
}