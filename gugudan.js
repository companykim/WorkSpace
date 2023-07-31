function mySum(a, b) {
    return a + b;
}

function mySum(a, b) {
    return a + b;
}

for (let i = 1; i <= 9; i++) {
    document.write("<div>");
        document.writeln("<h3>" + i + "단<br>");
        for (let j = 1; j <= 9; j++) {
            document.writeln(`${i} * ${j} = ${i * j}<br>`);
        }
        document.write("</div>")
    }