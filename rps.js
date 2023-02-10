function getComputerChoise() {
    let tomb = ["rock", "paper", "sciccors"];
    let valaszt = tomb[Math.floor(Math.random() * 3)];
    return valaszt;
}

function getPlayerSelection() {
    let jatekosValaszt = prompt("Add meg a tippedet (rock, paper vagy sciccors:)");
    return jatekosValaszt.toLowerCase();
}

function playRound(){
    let machine = getComputerChoise();
    let player = getPlayerSelection();
    let allas = [0,0]
    console.log(machine);
    console.log(player);
    if(machine == player){
        console.log(`Senki sem nyert!`);

    }else if((player == "rock") && (machine == "sciccors")){
        console.log("Gratulalok nyertel!");
        allas[0]++;
    }else if((player == "paper") && (machine == "rock")){
        console.log("Gratulalok nyertel!");
        allas[0]++;
    }else if((player == "sciccors") && (machine == "paper")){
        console.log("Gratulalok nyertel!");
        allas[0]++;
    }else {
        console.log("Vesztettel!");
        allas[1]++;
    }
    return allas;
}

function game() {
    let jatekospont = 0;
    let gepipont = 0;
    let allasnagy = [0, 0];
    for (let i = 0; i < 5; i++) {
        allasnagy = playRound();
        jatekospont = jatekospont + allasnagy[0];
        gepipont = gepipont + allasnagy[1];
        console.log(`Eredmeny állása --> Játékos:${jatekospont} : Gép:${gepipont}`);
    }
    if (jatekospont > gepipont) {
        console.log("GRATULÁKOK!!!!")
    } else if (gepipont > jatekospont) {
        console.log("VESZTETTEL :((((")
    } else {
        console.log("DÖNTETTLEN!!!!!")
    }
}

game();