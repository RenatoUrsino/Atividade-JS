    let n1 = Number(prompt("Entre com a 1ª nota:"));
    let n2 = Number(prompt("Entre com a 2ª nota:"));
    let n3 = Number(prompt("Entre com a 3ª nota:"));
    let n4 = Number(prompt("Entre com a 4ª nota:"));
    let media = ((n1 + n2 + n3 + n4) / 4)
    
if (media <= 10.0 && media >= 6.0) {
let aprovado = document.write("Sua média é :", media,  "\n VOCÊ FOI APROVADO ")
}
else {
    let reprovado = document.write("Sua média é :", media,  "\n VOCÊ FOI REPROVADO")
}