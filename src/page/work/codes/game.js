import React from 'react'
import LazyImg from '@c/lazyImg'
import Prism from 'prismjs'
import PopLink from '@c/poplink'
const text = {
  init:`const createGamingBoard = function () {
    // Remove previous gaming board
    const previousBoard = document.querySelector('.board');
    if (previousBoard) {
        previousBoard.remove();
    };

    // Create new gaming board
    root.style.setProperty('--board-height', inputBoardSize + 'vh');    // create gaming board according to css heightx
    const wrap = document.querySelector('.wrap');
    const gamingBoardNode = document.createElement('div');
    gamingBoardNode.setAttribute('class', 'board')
    const insertBeforeThisElement = document.querySelector('audio');
    wrap.insertBefore(gamingBoardNode, insertBeforeThisElement);
};

const createCell = function () {
    const board = document.querySelector('.board');

    // Create gaming cells inside gaming board
    root.style.setProperty('--board-dimension', inputBoardDimensions);
    for (let i = 0; i < inputBoardDimensions * inputBoardDimensions; i++) {
        board.innerHTML += '<div class="cell"></div>'
    };
};`,
    main:`const winConditionStorage = function (shape, inputBoardDimensions) {
        shape.row = {};
        shape.column = {};
        for (let i = 0; i < inputBoardDimensions; i++) {
            shape.row[i] = 0;
            shape.column[i] = 0;
        };
        shape.posDiag = 0;
        shape.negDiag = 0;
    };`,
    winner:`const getScore =function () {
        if (circleFirst) {
            oScore += 1;
            const circleMessage = document.querySelector('.player-o p');
            circleMessage.textContent = oScore;
            winner.textContent = 'O';
        } else {
            xScore += 1;
            const crossMessage = document.querySelector('.player-x p');
            crossMessage.textContent = xScore;
            winner.textContent = 'X';
        };
    };

    const checkRow = function (side, _this) {
        console.log(circle);
        
        side.row[_this.row] += 1;
        for (let i = 0; i < Object.keys(side.row).length; i++) {
            if (side.row[i] === inputBoardDimensions) {
                getScore();
                querySetAnimation('.board', 'disappear');
                querySetAnimation('header h1', 'flyup');
                querySetAnimation('.winning', 'dropdown');
                gameover = true;
            };
        };
    };
    
    const checkColumn = function (side, _this) {
        side.column[_this.column] += 1;
        for (let i = 0; i < Object.keys(side.column).length; i++) {
            if (side.column[i] === inputBoardDimensions) {    // 3 could be changed to variables if needed
                getScore();
                querySetAnimation('.board', 'disappear');
                querySetAnimation('header h1', 'flyup');
                querySetAnimation('.winning', 'dropdown');
                gameover = true;
            };
        };
    };`,
    ai:`rule(count, type) {
    if (count === 6) return 0
    return (
     count === 1 && (type === 1 ? 200 : 210))
     || (count === 2 && (type === 1 ? 400 : 420))
     || (count === 3 && (type === 1 ? 2000 : 2100))
     || (count === 4 && (type === 1 ? 10000 : 20000)
     )
   }
   aiPlay() {
    if (this.win) return
    this.myScore = []
    this.aiScore = []
    this.player = 2
    let counts = 0
    let a = 0
    let b = 0
    for (let i = 0; i < 15; i++) {
     this.myScore[i] = []
     this.aiScore[i] = []
     for (let j = 0; j < 15; j++) {
      this.myScore[i][j] = 0
      this.aiScore[i][j] = 0
     }
    }
    for (let i = 0; i < 15; i++) {
     for (let j = 0; j < 15; j++) {
      if (this.pieces[i][j] === 0) {
       for (let k = 0; k < this.counts; k++) {
        if (this.wins[i][j][k]) {
         this.myScore[i][j] = this.playA[k] ? (this.myScore[i][j] + this.rule(this.playA[k], 1)) : this.myScore[i][j]
         this.aiScore[i][j] = this.playB[k] ? (this.aiScore[i][j] + this.rule(this.playB[k], 2)) : this.aiScore[i][j]
        }
       }
       if (this.myScore[i][j] > counts) counts = this.myScore[i][j], a = i, b = j
       else if (this.myScore[i][j] === counts) if (this.aiScore[i][j] > this.aiScore[a][b]) a = i, b = j
       if (this.aiScore[i][j] > counts) counts = this.aiScore[i][j], a = i, b = j
       else if (this.aiScore[i][j] === counts) if (this.myScore[i][j] > this.myScore[a][b]) a = i, b = j
      }
     }
    }
    console.log(this.playA, this.playB, this.pieces)
    this.pieces._(a, b)
    this.player = 1
   }`
}

const initHtml = Prism.highlight(text.init,Prism.languages.javascript, 'javascript')
const mainHtml = Prism.highlight(text.main,Prism.languages.javascript, 'javascript')
const winnerHtml = Prism.highlight(text.winner,Prism.languages.javascript, 'javascript')
const aiHtml = Prism.highlight(text.ai,Prism.languages.javascript, 'javascript')

export default () => {
    return(
      <article className="work-pop-main work-pop-code">
        <h1>A simple dynamic Tic Tac Toe game</h1>
        <p>A scalable vanilla javascript written game</p>
        <PopLink gitLink={true} href='https://github.com/frankda/tic-tac-toe'/>
        <PopLink gitLink={false} href='https://frankda.github.io/tic-tac-toe/'/>
        <h5>Stacks</h5>
        <ol className="work-list">
            <li><span>HTML5</span></li>
            <li><span>CSS3</span></li>
            <li><span>Vanilla Javascript</span></li>
        </ol>
        <LazyImg w="800px" h="800px" src="/gifs/tic-tac-toe.gif" />
        <h5>Initiate</h5>
        <p>Create gaming board and winning condition check</p>
        <pre className="language-javascript" dangerouslySetInnerHTML={{__html:initHtml}}></pre> 
        <p style={{marginTop:'1.6rem'}}>Store each step to an object according to borad dimension so the winning condition will change according to gaming board dimension</p>
        <pre className="language-javascript" dangerouslySetInnerHTML={{__html:mainHtml}}></pre> 
        <h5>Winning condition check</h5>
        <p style={{marginTop:'1.6rem'}}>Check winning condition for each step, if the length of any lanes is equal to board dimension, the user who make the last step wins.</p>
        <pre className="language-javascript" dangerouslySetInnerHTML={{__html:winnerHtml}}></pre> 
        <p style={{marginTop:'1.6rem'}}>It's a small javascript project, important is how to make the game flexible and change winning condition dynamic. There are still few things can be improved:</p>
        <p>1. Add AI algorithem and it can suit 4x4 or 5x5 gaming board.</p>
        <p>2. If the gaming board dimension is larger than 5x5, the winning condition should follow game gomoku.</p>
      </article>
    )
};