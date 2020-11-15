const app = document.getElementById('app');
const button = document.getElementById('reset');

class Board {

  constructor() {
    this.grid = [
      ['','',''],
      ['','',''],
      ['','','']
    ];
    this.next = 'X';
    this.winner = null;
  }

  updateNext() {
    this.next === 'X' ? this.next = 'O' : this.next = 'X';
  }

  handleClick(e) {
    let row = e.target.getAttribute('data-row');
    let col = e.target.getAttribute('data-col');
    if (this.grid[row][col] === '' && this.winner === null) {
      this.grid[row][col] = this.next;
      this.updateNext();
      this.checkWinConditions();
      this.render();
    }
  }

  checkHorizontalWin() {
    this.grid.forEach(row => {
      if (row[0] === row[1] && row[0] === row[2]) {
        if (row[0] === 'X') {
          this.winner = 'X';
        } else if (row[0] === 'O') {
          this.winner = 'O';
        }
      }
    });
  }

  checkVerticalWin() {
    this.grid.forEach((row, i) => {
      if (this.grid[0][i] === this.grid[1][i] && this.grid[0][i] === this.grid[2][i]) {
        if (this.grid[0][i] === 'X') {
          this.winner = 'X';
        } else if (this.grid[0][i] === 'O') {
          this.winner = 'O';
        }
      }
    });
  }

  checkDiagonalWin() {
    if (this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2]) {
      if (this.grid[0][0] === 'X') {
        this.winner = 'X';
      } else if (this.grid[0][0] === 'O') {
        this.winner = 'O';
      }
    }
    if (this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]) {
      if (this.grid[0][2] === 'X') {
        this.winner = 'X';
      } else if (this.grid[0][2] === 'O') {
        this.winner = 'O';
      }
    }
  }

  checkWinConditions() {
    this.checkHorizontalWin();
    this.checkVerticalWin();
    this.checkDiagonalWin();
    if (this.winner) {
      console.log(`${this.winner} Wins!`)
    }
  }

  reset() {
    this.grid = [
      ['','',''],
      ['','',''],
      ['','','']
    ];
    this.next = 'X';
    this.winner = null;
    this.render();
  }

  render() {
    app.innerHTML = '';
    let board = document.createElement('div');
    board.setAttribute('id', 'board');
    this.grid.forEach((r, i) => {
      let row = document.createElement('div');
      row.setAttribute('class', 'row')
      row.setAttribute('style', 'display: flex;')
      r.forEach((element, j) => {
        let box = document.createElement('div');
        box.setAttribute('class', 'box')
        box.setAttribute('style', 'width: 15px; height: 15px; padding: 50px; border: 1px solid #cccccc;')
        box.setAttribute('data-row', `${i}`)
        box.setAttribute('data-col', `${j}`)
        box.innerHTML = element;
          box.addEventListener('click', (e) => {
            this.handleClick(e);
          })
        row.appendChild(box);
      })
      board.appendChild(row);
    })
    app.appendChild(board);
  }
}


let game = new Board();
game.render();
button.addEventListener('click', () => game.reset());