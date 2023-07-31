let heading = document.querySelector('#heading');
heading.onclick = function() {
    heading.style.color = "red";
    console.log(5 % 3.3);

    var totPerson = prompt("사람 수: ");
    var colAmount = prompt("줄 크기, 사람 수: ");
    alert(Math.ceil(totPerson/colAmount) + "줄이 필요")
}