function addSomething(){
    let a = document.getElementByld('inputA').value;
    let b = documnet.getElementByld('inputB').value;
    document.getElementById('valueA').innerHTML = a;
    document.getElementById('valueB').innerHTML = b;
    document.getElementById('valueC').innerHTML = Number(a) + Number(b);
}

function whatTimeIsIt(){
    alert(new Date());
}