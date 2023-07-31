function sumMulti() {
    let x = parseInt(prompt("a: "));
    let y = parseInt(prompt("b: "));

    if (x == y) {
        console.info(`${x*y}`);
    } else if (x != y) {
        console.info(`${x+y}`);
    }
}