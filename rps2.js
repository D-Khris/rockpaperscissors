function getComputerChoise() {
    let tomb = ["rock", "paper", "sciccors"];
    let valaszt = tomb[Math.floor(Math.random() * 3)];
    return valaszt;
}

/* function getPlayerSelection() {
    let jatekosValaszt = prompt("Add meg a tippedet (rock, paper vagy sciccors:)");
    return jatekosValaszt.toLowerCase();
} */

function playRound(valasztas){
    let machine = getComputerChoise();
    let player = valasztas;
    let allas = [0,0]
    const eredmenyTabla = document.querySelector('.eredmeny');
    if(machine == player){
        eredmenyTabla.textContent = `Senki sem nyert! Te tipped: ${player} : Gép tippje: ${machine}`;

    }else if((player == "rock") && (machine == "sciccors")){
        eredmenyTabla.textContent = `Gratulalok nyertel! Te tipped: ${player} : Gép tippje: ${machine}`;
        allas[0]++;
    }else if((player == "paper") && (machine == "rock")){
        eredmenyTabla.textContent = `Gratulalok nyertel! Te tipped: ${player} : Gép tippje: ${machine}`;
        allas[0]++;
    }else if((player == "sciccors") && (machine == "paper")){
        eredmenyTabla.textContent = `Gratulalok nyertel! Te tipped: ${player} : Gép tippje: ${machine}`;
        allas[0]++;
    }else {
        eredmenyTabla.textContent = `Vesztettel! Te tipped: ${player} : Gép tippje: ${machine}`;
        allas[1]++;
    }
    return allas;
}

function game() {
    let jatekospont = 0;
    let gepipont = 0;
    let allasnagy = [0, 0];
    const vegeredmeny = document.querySelector('.vegeredmeny');

for (let i = 0; i < 5; i++){

   allasnagy = document.querySelector('.ko').addEventListener('click', () => {
    let allasnagy = playRound("rock");
    return allasnagy;
    });
   allasnagy = document.querySelector('.papir').addEventListener('click', () => playRound("paper"));
   allasnagy = document.querySelector('.ollo').addEventListener('click', () => playRound("sciccors"));
    
    console.log(allasnagy);
    jatekospont = jatekospont + allasnagy[0];
    gepipont = gepipont + allasnagy[1];
    document.querySelector('.reszeredmeny').textContent = `Eredmeny állása --> Játékos:${jatekospont} : Gép:${gepipont}`;
}
if (jatekospont > gepipont) {
    vegeredmeny.textContent = "GRATULÁKOK!!!!";
} else if (gepipont > jatekospont) {
    vegeredmeny.textContent = "VESZTETTEL :((((";
} else {
    vegeredmeny.textContent = "DÖNTETTLEN!!!!!";
}
 /*   for (let i = 0; i < 5; i++) {
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
    } */
}

game();