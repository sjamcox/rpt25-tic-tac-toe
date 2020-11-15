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
      row.setAttribute('style', 'display: flex;')
      r.forEach(element => {
        let box = document.createElement('div');
        box.setAttribute('style', 'padding: 20px; border: 1px solid #cccccc;')
        box.innerHTML = element;
        row.appendChild(box);
      })
      board.appendChild(row);
    })
    app.appendChild(board);
  }
}

let game = new Board();
game.render();