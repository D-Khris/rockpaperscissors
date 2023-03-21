let allasnagy = [0,0];

function getComputerChoise() {
    let tomb = ["rock", "paper", "sciccors"];
    let valaszt = tomb[Math.floor(Math.random() * 3)];
    return valaszt;
}


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
    console.log(`A playRound fv-ben lévő érték: ${allas}`)
    return allas;
}

function endGame() {
    console.log("Vége a játéknak");
    document.querySelector('.ko').style.visibility = 'hidden';
    document.querySelector('.papir').style.visibility = 'hidden';
    document.querySelector('.ollo').style.visibility = 'hidden';
}

function game() {
        
    let allasnagy2 = [];
    let jatekospont = 0;
    let gepipont = 0;
    const vegeredmeny = document.querySelector('.vegeredmeny');

    document.querySelector('.ko').addEventListener('click', () => {
        allasnagy2 = playRound('rock');
        console.log(`Kint: ${allasnagy2}`);
        console.log(`Eseménykezelő: ${allasnagy2}`);
        console.log(typeof (allasnagy2));
        jatekospont = jatekospont + allasnagy2[0];
        gepipont = gepipont + allasnagy2[1];
        document.querySelector('.reszeredmeny').textContent = `Eredmeny állása --> Játékos:${jatekospont} : Gép:${gepipont}`;

        if ((jatekospont > gepipont) && (jatekospont + gepipont == 5)) {
            vegeredmeny.textContent = "GRATULÁKOK!!!!";
            endGame();
        } else if ((gepipont > jatekospont) && (jatekospont + gepipont == 5)) {
            vegeredmeny.textContent = "VESZTETTEL :((((";
            endGame();
        } else if ((gepipont == jatekospont) && (jatekospont + gepipont == 5)) {
            vegeredmeny.textContent = "DÖNTETTLEN!!!!!";
            endGame();
        }
    });

    document.querySelector('.papir').addEventListener('click', () => {
        allasnagy2 = playRound('paper');
        console.log(`Kint: ${allasnagy2}`);
        console.log(`Eseménykezelő: ${allasnagy2}`);
        console.log(typeof (allasnagy2));
        jatekospont = jatekospont + allasnagy2[0];
        gepipont = gepipont + allasnagy2[1];
        document.querySelector('.reszeredmeny').textContent = `Eredmeny állása --> Játékos:${jatekospont} : Gép:${gepipont}`;
    
        if ((jatekospont > gepipont) && (jatekospont + gepipont == 5)) {
            vegeredmeny.textContent = "GRATULÁKOK!!!!";
            endGame();
        } else if ((gepipont > jatekospont) && (jatekospont + gepipont == 5)) {
            vegeredmeny.textContent = "VESZTETTEL :((((";
            endGame();
        } else if ((gepipont == jatekospont) && (jatekospont + gepipont == 5)) {
            vegeredmeny.textContent = "DÖNTETTLEN!!!!!";
            endGame();
        }
    });

    document.querySelector('.ollo').addEventListener('click', () => {
        allasnagy2 = playRound('sciccors');
        console.log(`Kint: ${allasnagy2}`);
        console.log(`Eseménykezelő: ${allasnagy2}`);
        console.log(typeof (allasnagy2));
        jatekospont = jatekospont + allasnagy2[0];
        gepipont = gepipont + allasnagy2[1];
        document.querySelector('.reszeredmeny').textContent = `Eredmeny állása --> Játékos:${jatekospont} : Gép:${gepipont}`;
    
        if ((jatekospont > gepipont) && (jatekospont + gepipont == 5)) {
            vegeredmeny.textContent = "GRATULÁKOK!!!!";
            endGame();
        } else if ((gepipont > jatekospont) && (jatekospont + gepipont == 5)) {
            vegeredmeny.textContent = "VESZTETTEL :((((";
            endGame();
        } else if ((gepipont == jatekospont) && (jatekospont + gepipont == 5)) {
            vegeredmeny.textContent = "DÖNTETTLEN!!!!!";
            endGame();
        }
    });


}

game();