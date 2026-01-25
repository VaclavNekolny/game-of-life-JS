// const display = document.getElementById('display-word');
const runButton = document.querySelector('button');
const input = document.querySelector('input');
const textBar = document.getElementById('text-bar');

const grid = document.querySelector('.grid');

const GRID_W = 60;
const GRID_H = 40;
let pointer = [0, 0];
drawEmptyGrid(GRID_W, GRID_H);
allowDrawing();

function createTable(x, y, fillRandomly) {
  const table = document.createElement('table');
  table.id = 'board';
  for (let i = 0; i < x; i++) {
    const tableRow = document.createElement('tr');

    for (let j = 0; j < y; j++) {
      const cell = document.createElement('td');

      if (fillRandomly && Math.random() > 0.5) {
        cell.classList.add('full');
      }

      tableRow.appendChild(cell);
    }
    table.appendChild(tableRow);
  }
  return table;
}

function drawEmptyGrid(x, y) {
  console.log('empty grid');
  const grid = document.querySelector('.grid');

  for (let i = 0; i < 60 * 40; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    grid.appendChild(cell);
  }
}

function getCell(x, y) {
  if (x > GRID_H - 1 || y > GRID_W - 1) {
    throw new Error('out of range');
  }
  return grid.children[y * GRID_W + x];
}

function handleKeypress(e) {
  console.log(e);
  // Render screen
  if (e.key == 'r') {
    document.body.querySelector('table')?.remove();
    const screenTable = createTable(25, 60, true); // randomly filled table
    document.body.prepend(screenTable);
  } else if (e.code == 'Space') {
    textBar.toggleAttribute('hidden');
  } else if (e.key == 'x') {
    renderBitmapLetter('f', GRID_W, GRID_H);
  } else {
    document.body.querySelector('table')?.remove();
    const screenTable = createTable(25, 60, false); // empty table
    document.body.prepend(screenTable);
  }
  allowDrawing();
}

function allowDrawing() {
  grid.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
      e.target.classList.toggle('full');
    }
  });

  grid.addEventListener('pointerover', (e) => {
    if (e.target.classList.contains('cell') && e.buttons > 0) {
      e.target.classList.toggle('full');
    }
  });
}

document.addEventListener('keypress', handleKeypress);
runButton.addEventListener('click', renderWordFromInput);

async function renderWordFromInput() {
  if (!input.value) {
    console.error('Input text, please!');
    return;
  }

  const wordArray = input.value.split('');
  // console.log(wordArray);

  for (const letter of wordArray) {
    const letterInPixs = await renderBitmapLetter(letter);
    const space = renderSpace();

    display.appendChild(letterInPixs);
    display.appendChild(space);
  }
  allowDrawing();
}

// DEPRECATED
async function fetchAlphabethBitmap() {
  try {
    const res = await fetch('./monogram-bitmap.json');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    font = await res.json();
    return font;
  } catch (error) {
    console.error('Error loading font:', error);
  }
}

async function renderBitmapLetter(letter, x, y) {
  // TODO: refactor -> distinguish fetch from the function
  const font = await fetchAlphabethBitmap();
  const letterBmp = await font[letter];

  console.log('renderBitmapLetter');
  console.log(letterBmp);
  let curPointer = [pointer];
  console.log(curPointer);

  for (let i = 0; i < letterBmp.length; i++) {
    // convert to binary
    const pixelRow = letterBmp[i].toString(2).padStart(5, '0');
    const rowArray = pixelRow.split('');
    for (let j = 0; j < rowArray.length; j++) {
      if (rowArray[j] == '1'){
        getCell(i,j).classList.add("full")
      }
    }
  }
 
  //   rowArray.forEach((pix) => {
  //     const td = document.createElement('td');
  //     if (pix == '1') {
  //       td.classList.add('full');
  //     }
  //     tr.prepend(td);
  //   });
  //   table.appendChild(tr);
  // });
}

function renderSpace() {
  const table = document.createElement('table');
  table.id = 'space';
  for (let i = 0; i < 12; i++) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    table.appendChild(tr);
  }
  return table;
}
