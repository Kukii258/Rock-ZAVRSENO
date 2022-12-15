let player = 0;
let computer;

/*function playerPick(){
    let choose = prompt("What do you choose? ");
    if(choose == 'rock'){
        player=1;
    }else if(choose=='paper'){
        player=2;
    }else if(choose=='skare'){
        player=3;
    }else{
        return Error;
    }
    return player;
    }
*/

function computerPick(){
    return computer = Math.floor(Math.random() * 3)+1;
}

function decider(player, computer){
    let rez = "Error";
    switch(player){
        case 1:
            rez = computer == 1 ? "Its draw" : computer == 2 ? "You lost" : computer == 3 ? "You win": "b";
            break;
        case 2:
            rez = computer == 2 ? "Its draw" : computer == 3 ? "You lost" : computer == 1 ? "You win": "b";
            break;    
        case 3:
            rez = computer == 3 ? "Its draw" : computer == 1 ? "You lost" : computer == 2 ? "You win": "b";
            break;
        }
        return rez;
}

//decider(playerPick(),computerPick())

const luka = document.querySelector('.player');
const playerImg = document.querySelector('.playerImg');
const result = document.querySelector('.results');
const computerImg = document.querySelector('.computerImg')
const paper = document.querySelector('.playerImg :nth-child(1)')
const skare = document.querySelector('.playerImg :nth-child(2)')
const rock = document.querySelector('.playerImg :nth-child(3)')
const Cpaper = document.querySelector('.computerImg :nth-child(1)')
const Cskare = document.querySelector('.computerImg :nth-child(2)')
const Crock = document.querySelector('.computerImg :nth-child(3)')
const question = document.querySelector('.computerImg :nth-child(4');

luka.addEventListener('click', function(e){
    if(e.target.tagName == 'SPAN'){
       if(e.target.className == 'rock'){
        player = 1;
        
        result.textContent = 'Result';
        rock.classList = 'Pimg';
        paper.classList = 'no';
        skare.classList = 'no';

        Cskare.classList = 'no';
        Crock.classList = 'no';
        Cpaper.classList = 'no';

        question.classList = 'Qimg'

       }else if(e.target.className == 'paper'){
        player = 2;
        
        result.textContent = 'Result';
        rock.classList = 'no';
        paper.classList = 'Pimg';
        skare.classList = 'no';

        Cskare.classList = 'no';
        Crock.classList = 'no';
        Cpaper.classList = 'no';

        question.classList = 'Qimg'

       }else if(e.target.className == 'skare'){
        player = 3;
        
        result.textContent = 'Result';
        rock.classList = 'no';
        paper.classList = 'no';
        skare.classList = 'Pimg';

        Cskare.classList = 'no';
        Crock.classList = 'no';
        Cpaper.classList = 'no';

        question.classList = 'Qimg'

       }
    }   
});

result.addEventListener('click', function(e){
    computer = computerPick();

    result.textContent = decider(player,computer);
    
    question.classList = 'no'

    if(computer == 1){
        Crock.classList = 'Cimg';
        Cpaper.classList = 'no';
        Cskare.classList = 'no';
    }else if(computer == 2){
        Cpaper.classList = 'Cimg';
        Crock.classList = 'no';
        Cskare.classList = 'no';
    }else if(computer == 3){
        Cskare.classList = 'Cimg';
        Crock.classList = 'no';
        Cpaper.classList = 'no';
    }

})