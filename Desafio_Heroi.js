let nome = "Marcos"
let xp = 9000
let nivel = null

if (xp > 1000 && xp <= 2000){
    nivel = "Bronze"
}
else if (xp > 2000 && xp <= 5000){
    nivel = "Prata"
}
else if (xp > 5000 && xp <= 7000){
    nivel = "Ouro"
}
else if (xp > 7000 && xp <= 8000){
    nivel = "Platina"
}
else if (xp > 8000 && xp <= 9000){
    nivel = "Ascendente"
}
else if (xp > 9000 && xp <= 10000){
    nivel = "Imortal"
}
else if (xp > 10000) {
    nivel = "Radiante"
}
else {
    nivel = "Ferro"
}

console.log(`O heroi ${nome} tem ${xp} de experiencia e é nivel ${nivel}`)
