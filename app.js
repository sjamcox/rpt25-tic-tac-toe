const app = document.getElementById('app')

class Board {

  constructor() {
    this.grid = [
      ['X','X','X'],
      ['X','X','X'],
      ['X','X','X']
    ];
  }

  render() {
    app.innerHTML = '';
    let board = document.createElement('div');
    board.setAttribute('id', 'board');
    this.grid.forEach((r, i) => {
      let row = document.createElement('div');
      row.setAttribute('class', 'row')
      r.forEach(cell => {
        let box = document.createElement('div');
        box.innerHTML = cell;
        row.appendChild(box);
      })
      board.appendChild(row);
    })
    app.appendChild(board);
  }
}

let game = new Board();
game.render();