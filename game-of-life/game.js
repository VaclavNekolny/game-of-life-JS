const runButton = document.querySelector('button');
const input = document.querySelector('input');
const textBar = document.getElementById('text-bar');

const grid = document.querySelector('.grid');

let color = 'hsl(180, 50%, 50%)';
const hue = document.getElementById('hue');
const saturation = document.getElementById('saturation');
const lightness = document.getElementById('lightness');
let isDarkMode = false;

const GRID_COL = 40;
const GRID_ROW = 20;
document.documentElement.style.setProperty('--grid-col', GRID_COL);
document.documentElement.style.setProperty('--grid-row', GRID_ROW);

let pointer = [4, 5];
drawEmptyGrid(GRID_COL, GRID_ROW);

function drawEmptyGrid(x, y) {
  const grid = document.querySelector('.grid');

  for (let i = 0; i < GRID_COL * GRID_ROW; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.setAttribute('x', (i / GRID_COL).toFixed());
    cell.setAttribute('y', i % GRID_COL);
    grid.appendChild(cell);
  }
}

function getCell(x, y) {
  if (x > GRID_COL - 1 || y > GRID_ROW - 1) {
    throw new Error('out of range');
  }
  return grid.children[y * GRID_COL + x];
}

function getColor() {
  const currentColor = `hsl(${hue.value},${saturation.value}%,${lightness.value}%)`;

  document.getElementById('color-picker').style.borderColor = currentColor;
  color = currentColor;
  document.documentElement.style.setProperty('--color', currentColor);
  document.documentElement.style.setProperty(
    '--color-dark',
    `hsla(${hue.value}, 80%, 20%)`,
  );
}

function handleKeypress(e) {
  console.log(e);
  // Render screen
  if (e.code == 'Space') {
    textBar.classList.toggle('show');
  }
  allowDrawing();
}

function allowDrawing() {
  grid.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
      e.target.classList.toggle('full');
    }
    pointer = [e.target.getAttribute('y'), e.target.getAttribute('x')];
  });

  grid.addEventListener('pointerover', (e) => {
    if (e.target.classList.contains('cell') && e.buttons > 0) {
      e.target.classList.toggle('full');
    }
  });
}

async function renderWordFromInput() {
  if (!input.value) {
    console.error('Input text, please!');
    return;
  }

  const wordArray = input.value.split('');
  for (letter of wordArray) {
    renderBitmapLetter(letter);
  }
}

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

async function renderBitmapLetter(letter) {
  // TODO: refactor -> distinguish fetch from the function
  const font = await fetchAlphabethBitmap();
  const letterBmp = await font[letter];

  console.log('renderBitmapLetter');
  console.log(letterBmp);
  let [x, y] = pointer;

  for (let i = 0; i < letterBmp.length; i++) {
    // convert to binary
    const pixelRow = letterBmp[i].toString(2).padStart(5, '0');
    const rowArray = pixelRow.split('').reverse(); // why I need reverse?
    for (let j = 0; j < rowArray.length; j++) {
      if (rowArray[j] == '1') {
        getCell(+j + +x, +i + +y).classList.add('full');
      }
    }
  }

  // setting new pointer
  pointer[0] = pointer[0] + 6;
}

function switchMode() {
  if (isDarkMode) {
    document.documentElement.style.setProperty(
      '--body-background',
      'hsl(36, 83%, 88%)',
    );
    document.documentElement.style.setProperty(
      '--cell-background',
      'hsl(36, 100%, 90%)',
    );
    document.documentElement.style.setProperty(
      '--cell-border-color',
      'hsla(36, 60%, 80%, 0.5)',
    );
    isDarkMode = false;
  } else {
    document.documentElement.style.setProperty(
      '--body-background',
      'hsl(36, 5%, 10%)',
    );
    document.documentElement.style.setProperty(
      '--cell-background',
      'hsl(36, 10%, 15%)',
    );
    document.documentElement.style.setProperty(
      '--cell-border-color',
      'hsla(36, 7%, 7%, 0.5)',
    );
    isDarkMode = true;
  }
}

document.addEventListener('keypress', handleKeypress);
runButton.addEventListener('click', renderWordFromInput);
document.querySelectorAll('.slider').forEach((slider) => {
  slider.addEventListener('input', getColor);
});
document.getElementById('mode').addEventListener('click', switchMode)

allowDrawing();

// DEPRECATED
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
