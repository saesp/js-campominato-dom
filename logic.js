// CAMPO MINATO


// bottone
const buttonGrill = document.getElementById("but-grill");
// contenitore griglia
const grill = document.getElementById("grill");
// Click cell
let clickCell = true;
// Array num normal cell
const normCellArr = [];
console.log(normCellArr);

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
            

            // quando user clicca una cella, questa si colora di rosso se è bomba, altrimenti di azzurro
            cell.addEventListener("click",
                function(){
                    // controllare se è true o no. Se true c'è evento, altrimenti no
                    if (clickCell === true){

                        // num cell cliccata
                        console.log("Cell num:", i);

                        if (bombArr.includes(i)){
                            cell.classList.add("cell-bomb");
                            clickCell = false; //assegna false a let clickCell, quindi non ci potrà più essere l'evento post click
                            console.log("Hai trovato una bomba, hai preso!");
                        } else {
                            cell.classList.add("cell-normal");
                            clickCell = true; //riassegna false a let clickCell, quindi ci potrà essere ancora l'evento post click
                            normCellArr.push(i);
                        }

                        // raggiunto num max possibile di numeri normali, partita finita
                        if (normCellArr.length === 100 - 16){
                            clickCell = false;
                            console.log("Non hai trovato bombe, hai vinto!");
                        }

                        // comunicare il punteggio, cioè num volte che user ha cliccato una cella che non era bomba
                        console.log("Punteggio:", normCellArr.length);
                    }
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
