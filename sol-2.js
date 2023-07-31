var num1 = prompt("비교할 첫번째 숫자: ");
var num2 = prompt("비교할 두번째 숫자: ");

if (num1 > num2) {
    alert(`${num1}(이)가 ${num2}보다 큽니다.`);
} else if(num1 === num2) {
    alert(`${num1}와 ${num2}가 같습니다.`);
} else {
    alert(`${num1}(이)가 ${num2}보다 작습니다.`);
}