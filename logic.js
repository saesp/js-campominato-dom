// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta (1-100): le bombe;
// Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali;

// In seguito l’utente clicca su una cella:
   // se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina
   // altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle;
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe);
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba;



// bottone
const buttonGrill = document.getElementById("but-grill");
// contenitore griglia
const grill = document.getElementById("grill");


// creare Griglia e farla comparire solo al Click del button
buttonGrill.addEventListener("click",
    function(){
        document.body.style.background = "aqua";
        // svuota grill (per non farne aggiungere una ad ogni click)
        grill.innerHTML = '';

        // creare griglia 100 Celle
        for (let i = 1; i <= 100; i++){
            let cell = grillFun("div", "cell");
            grill.append(cell);
            cell.innerHTML = i;
            
            // quando user clicca su una cella, questa si colora di rosso se è bomba, altrimenti di azzurro
            cell.addEventListener("click",
                function(){
                    if (bombArr.includes(i)){
                        cell.classList.add("cell-bomb"); //red
                    } else {
                        cell.classList.add("cell-normal"); //skyblue
                    }
                    
                    // emettere un messaggio in console con il numero della cella cliccata
                    console.log("Cell num:", i);
                }
            )
        }
    }
)


// Generare 16 numeri casuali nel range 1-100: le Bombe
const bombArr = [];

while (bombArr.length < 16){
    // num random 1-100
    let randomNum = randomNumFun(1, 100);
    console.log("Random num bomb:", randomNum);

    // discrimino
    if (!bombArr.includes(randomNum)){
        bombArr.push(randomNum);
    }
}

console.log("Bomb array:", bombArr);



// Grill
function grillFun(elementFun, classFun){
    const elementF = document.createElement(elementFun);
    elementF.classList.add(classFun);

    return elementF;
}

// Random num
function randomNumFun(numMinFun, numMaxFun){
    let randomF = Math.floor(Math.random()*(numMaxFun - numMinFun + 1) + numMinFun);
    //console.log("Num random:", randomF);

    return randomF;
}



