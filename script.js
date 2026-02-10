const c = 2.9978e8;
function calculateRelaKeneEne() {
    let v= parseFloat(document.getElementById('input-velocity').value);
    let m= parseFloat(document.getElementById('input-mass').value);
    let result= (m*(c**2))/((1/(1-((v**2)/(c**2)))**(0.5));
    
    let output=`The relativistic kenetic energy is ${result}`;
    document.getElementById("rke-result").innerText = output;

}
