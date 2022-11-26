// CAMPO MINATO


// bottone
const buttonGrill = document.getElementById("but-grill");
// contenitore griglia
const grill = document.getElementById("grill");


// creare Griglia e farla comparire solo al Click del button
buttonGrill.addEventListener("click",
    function(){

        // click cell
        let clickCell = true;

        // array num normal cell
        const normCellArr = [];
        console.log(normCellArr);
        
        let h2Red = document.querySelector("h2");
        let h2Green = document.querySelector(".h2-green");
        let h3 = document.getElementById("h3");
        h2Red.innerHTML = "";
        h3.innerHTML = "";
        document.getElementById("bomb-red").style.color = "black";
        
        // svuota grill (per non farne aggiungere una ad ogni click)
        grill.innerHTML = '';

        // Generare 10 numeri casuali nel range 1-100: le Bombe
        const bombArr = [];
        while (bombArr.length < 10){
            // num random 1-100
            let randomNum = randomNumFun(1, 100);
            console.log("Random num bomb:", randomNum);
        
            // discrimino
            if (!bombArr.includes(randomNum)){
                bombArr.push(randomNum);
            }
        }
        console.log("Bomb array:", bombArr);
        

        // creare griglia 100 Celle
        for (let i = 1; i <= 100; i++){
            let cell = grillFun("div", "cell");
            grill.append(cell);
            

            // quando user clicca una cella, questa si colora di rosso se è bomba, altrimenti di azzurro
            cell.addEventListener("click",
                function(){
                    
                    // controllare se è true o no. Se true c'è evento, altrimenti no
                    if (clickCell === true){
                        // num cell cliccata
                        cell.innerHTML = i;
                        console.log("Cell num:", i);
                        let h2Green = document.querySelector(".h2-green");

                        if (bombArr.includes(i)){
                            cell.innerHTML = `<i class="fa-solid fa-bomb">`;
                            cell.classList.add("cell-bomb");
                            clickCell = false; //assegna false a let clickCell, quindi non ci potrà più essere l'evento post click
                            console.log("Hai trovato una bomba, hai perso!");
                            h2Red.innerHTML = "Hai trovato una bomba, hai perso!";
                            h2Red.style.color = "red";
                            document.getElementById("bomb-red").style.color = "red";
                            h3.innerHTML = "Punteggio: " + normCellArr.length + "/100";
                        } else if (!bombArr.includes(i) && !normCellArr.includes(i)) {
                            normCellArr.push(i);
                            cell.innerHTML = `<i class="fa-brands fa-pagelines"></i>`;
                            cell.classList.add("cell-normal");
                            clickCell = true;
                        }

                        if (!bombArr.includes(i) && normCellArr.includes(i)) {
                            cell.innerHTML = `<i class="fa-brands fa-pagelines"></i>`;
                            cell.classList.add("cell-normal");
                        }

                        // raggiunto num max possibile di numeri normali, partita finita
                        if (normCellArr.length === 100 - 10){
                            clickCell = false;
                            console.log("Non hai trovato bombe, hai vinto!");
                            h2Green.innerHTML = "Non hai trovato bombe, hai vinto!";
                            h3.innerHTML = "Punteggio: " + normCellArr.length + "/100";
                        }

                        console.log("Score:", normCellArr.length);
                    }
                }
            )
        }
    }
)


// Fun crea griglia 
function grillFun(elementFun, classFun){
    const elementF = document.createElement(elementFun);
    elementF.classList.add(classFun);

    return elementF;
} 

// Fun crea num random 
function randomNumFun(numMinFun, numMaxFun){
    let randomF = Math.floor(Math.random()*(numMaxFun - numMinFun + 1) + numMinFun);

    return randomF;
}
