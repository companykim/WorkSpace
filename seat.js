var memNum = prompt("입장객은 몇 명인가요?");
var memNum = prompt("한 줄에 몇명씩 앉습니까?");

if (memNum % colNum === 0) 
    rowNum = parseInt(memNum / colNum);
else 
    rowNum = parseInt(memNum / colNum) + 1;

document.write("모두 " + row)