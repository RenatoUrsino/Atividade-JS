let op = prompt("Escolha uma operação:\n+ Adição \n- Subtração \n/ Divisão \n* Multiplicação \nR Raiz Quadrada \nP Potência \nsin Seno de ângulo \nMed Media artimética");

if (op === "+") {
    let n1 = Number(prompt("Entre com um numero"));
    let n2 = Number(prompt("Entre com outro número"));
    let s = n1 + n2;
    document.write(s);
}

if (op === "-") {
    let n1 = Number(prompt("Entre com um numero"));
    let n2 = Number(prompt("Entre com outro número"));
    let s = n1 - n2;
    document.write(s);
}

if (op === "/") {
    let n1 = Number(prompt("Entre com um numero"));
    let n2 = Number(prompt("Entre com outro número"));
    let s = n1 / n2;
    document.write(s);
}

if (op === "*") {
    let n1 = Number(prompt("Entre com um numero"));
    let n2 = Number(prompt("Entre com outro número"));
    let s = n1 * n2;
    document.write(s);
}

if (op === "r") {
    let n1 = Number(prompt("Entre com um numero"));
    let s = Math.sqrt(n1);
    document.write(s);
}

if (op === "p") {
    let n1 = Number(prompt("Entre com um numero"));
    let n2 = Number(prompt("Entre com um numero para a Potenciação:"));
    let s = Math.pow(n1,n2);
    document.write(s);
}

if (op === "sin") {
    let n1 = Number(prompt("Entre com um numero"));
    let s = Math.sin(Math.PI / n1);
    document.write(s);
}

if (op === "med") {
    let n1 = Number(prompt("Entre com o 1º numero"));
    let n2 = Number(prompt("Entre com o 2º numero"));
    let n3 = Number(prompt("Entre com o 3º numero"));
    let s = ((n1 + n2 + n3) / 3)
    document.write(s);
}
