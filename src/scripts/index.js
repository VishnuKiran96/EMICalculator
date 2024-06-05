function changeRange(){
    document.getElementById('txtPrice').value = parseInt(document.getElementById('rangePrice').value);
    document.getElementById('txtYear').value = parseInt(document.getElementById('rangeYear').value);
    document.getElementById('txtInterest').value = parseFloat(document.getElementById('rangeInterest').value);
}
function changeInput(){
    document.getElementById('rangePrice').value = parseInt(document.getElementById('txtPrice').value);
    document.getElementById('rangeYear').value = parseInt(document.getElementById('txtYear').value);
    document.getElementById('rangeInterest').value = parseFloat(document.getElementById('txtInterest').value)
}
function calculateEmi(){
    var P = parseInt(document.getElementById('rangePrice').value);
    var N =  parseInt(document.getElementById('rangeYear').value) * 12;
    var R = parseFloat(document.getElementById('rangeInterest').value)/12/100;
    var Numerator = P * R * (Math.pow(1+R, N));
    var Denominator = (Math.pow(1+R, N)) - 1;
    var Emi = parseInt( Numerator / Denominator) ;
    var EmiString = Emi.toLocaleString('en-in',{style:"currency", currency:"INR"});
    document.getElementById('emi').innerHTML = "<h3>Your Monthly EMI will be <b>"+ EmiString +"</b> per month, for " + N +" months</h2>";
}