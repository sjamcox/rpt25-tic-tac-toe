const app = document.getElementById('app')

class Board {

  constructor() {
    this.grid = [
      ['','',''],
      ['','',''],
      ['','','']
    ];
    this.next = 'X'
  }

  updateNext() {
    this.next === 'X' ? this.next = 'O' : this.next = 'X';
  }

  handleClick(e) {
    e.target.innerText = this.next;
    this.updateNext();
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
        box.setAttribute('class', 'box')
        box.setAttribute('style', 'padding: 20px; border: 1px solid #cccccc;')
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