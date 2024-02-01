document.addEventListener('DOMContentLoaded', () => {
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
    let currentIndex = 0;
    let currentRotation = 0;
    const width = 10;
    let score = 0;
    let lines = 0;
    let timerId;
    let nextRandom = 0;
    const colors = [
        'url(images/blue_block.png)',
        'url(images/pink_block.png)',
        'url(images/purple_block.png)',
        'url(images/peach_block.png)',
        'url(images/yellow_block.png)'
    ];

    function createGrid() {
        let grid = document.querySelector('.grid');
        for (let i = 0; i < GRID_SIZE; i++) {
            let gridElement = document.createElement('div');
            grid.appendChild(gridElement);
        }

        for (let i = 0; i < GRID_WIDTH; i++) {
            let gridElement = document.createElement('div');
            gridElement.setAttribute('class', 'block3');
            grid.appendChild(gridElement);
        }

        let previousGrid = document.querySelector('.previous-grid');
        for (let i = 0; i < 16; i++) {
            let gridElement = document.createElement('div');
            previousGrid.appendChild(gridElement);
        }
        return grid;
    }

    function control(e) {
        if (e.keyCode === 39)
            moveright();
        else if (e.keyCode === 38)
            rotate();
        else if (e.keyCode === 37)
            moveleft();
        else if (e.keyCode === 40)
            moveDown();
    }

    document.addEventListener('keydown', control);

    const lTetromino = [
        [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, 2],
        [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2],
        [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2],
        [GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2]
    ];

    const zTetromino = [
        [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
        [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
        [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
        [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
    ];

    const tTetromino = [
        
    ]
})