function getComputerChoise(){
    let tomb = ["rock","paper","sciccors"];
    let valaszt = tomb[Math.floor(Math.random() * 3)];
    return valaszt;
}

function getPlayerSelection(){
    let jatekosValaszt = prompt("Add meg a tippedet (rock, paper vagy sciccors:)");
    return jatekosValaszt.toLowerCase();
}

function playRound(){
    let machine = getComputerChoise();
    let player = getPlayerSelection();
    console.log(machine);
    console.log(player);
    if(machine == player){
        console.log(`Senki sem nyert!`);

    }else if((player == "rock") && (machine == "sciccors")){
        console.log("Gratulalok nyertel!");
    }else if((player == "paper") && (machine == "rock")){
        console.log("Gratulalok nyertel!");
    }else if((player == "sciccors") && (machine == "paper")){
        console.log("Gratulalok nyertel!");
    }else {
        console.log("Vesztettel!");
    }

}

playRound();