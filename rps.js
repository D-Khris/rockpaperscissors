function getComputerChoise(){
    let tomb = ["rock","paper","sciccors"];
    let valaszt = tomb[Math.floor(Math.random() * 3)];
    return valaszt;
}

function getPlayerSelection(){
    let jatekosValaszt = prompt("Add meg a tippedet (rock, paper vagy sciccors:)");
    return jatekosValaszt;
}

function playRound(){
    let machine = getComputerChoise();
    let player = getPlayerSelection();
    console.log(machine);
    console.log(player);

}

playRound();