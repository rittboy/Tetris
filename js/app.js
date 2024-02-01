document.addEventListener('DOMContentLoaded', () =>{
    const GRID_WIDTH = 10;
    const GRID_HEIGHT = 20;
    const GRID_SIZE = GRID_WIDTH * GRID_HEIGHT;

    const grid = createGrid();
    let squares = Array.from(grid.querySelectorAll('div'));
    const startBtn = document.querySelector('.button');
    const hamburgerBtn = document.querySelector('.toggler');
    const menu = document.querySelector('.menu');
    const span = document.getElementsByClassName('close')[0];
    const scoreDisplay = document.querySelector('.score-display');
    const linesDisplay = document.querySelector('.lines-score');
    let currentindex = 0;
    let currentRotation = 0;
    const width = 10;
    let score = 0;
    let lines = 0;
    let timerId;
    let nextRandom = 0;
    const color = [
        'url(images/blue_block.png)',
        'url(images/pink_block.png)',
        'url(images/purple_block.png)',
        'url(images/peach_block.png)',
        'url(images/yellow_block.png)'
    ]

    function createGrid(){
        
    }
})