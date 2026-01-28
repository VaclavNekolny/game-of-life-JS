const runButton = document.getElementById('run');
const input = document.querySelector('input');
const textBar = document.getElementById('text-bar');

const grid = document.querySelector('.grid');

const colorPicker = document.getElementById('color-picker');
let color = [180, 50, 50];
const hue = document.getElementById('hue');
const saturation = document.getElementById('saturation');
const lightness = document.getElementById('lightness');
const cellRadiusSlider = document.getElementById('cell-radius')

const arrow = document.getElementById('arrow');

let isDarkMode = false;
let isMagicOn = false;

const GRID_COL = 40;
const GRID_ROW = 25;
document.documentElement.style.setProperty('--grid-col', GRID_COL);
document.documentElement.style.setProperty('--grid-row', GRID_ROW);

let pointer = [4, 5];
let selectedCell;
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

function clearGrid() {
  document.querySelectorAll('.cell').forEach((cell) => {
    cell.classList.remove('full');
    if (isMagicOn) {
      cell.removeAttribute('style');
    }
  });
}

function magic(slide = false) {
  if (!isMagicOn) {
    document.querySelectorAll('.full').forEach((cell) => {
      cell.style.backgroundColor = getRandomColor();
    });
    isMagicOn = true;
  } else {
    document.querySelectorAll('.full').forEach((cell) => {
      cell.removeAttribute('style');
    });
    isMagicOn = false;
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

  colorPicker.style.borderColor = currentColor;
  color = [+hue.value, +saturation.value, +lightness.value];
  document.documentElement.style.setProperty('--color', currentColor);
  document.documentElement.style.setProperty(
    '--color-dark',
    `hsla(${hue.value}, 80%, 20%)`,
  );
}

function getRandomColor() {
  let [h, s, l] = color;
  h = h - 4 + Math.round(Math.random() * 8);
  s = s - 15 + Math.round(Math.random() * 30);
  l = l - 15 + Math.round(Math.random() * 30);
  console.log(h, s, l);
  return `hsl(${h},${s}%,${l}%)`;
}

function handleKeypress(e) {
  // Render screen
  if (e.code == 'Space') {
    textBar.classList.add('show');
    // Needs delay becaus input was hidden
    setTimeout(() => {
      input.focus();
    }, 100);
  }
  if (e.key === 'Escape') {
    if (textBar.classList.contains('show')) {
      textBar.classList.remove('show');
      clearInput();
    } else {
      deselectCell();
    }
  }
  if (e.key === 't') {
    growSetup();
  }
  allowDrawing();
}

function allowDrawing() {
  grid.addEventListener('click', (e) => {
    if (e.target.classList.contains('cell')) {
      e.target.classList.toggle('full');
      if (isMagicOn) {
        if (e.target.classList.contains('full')) {
          e.target.style.backgroundColor = getRandomColor();
        } else {
          e.target.removeAttribute('style');
        }
      }
    }
    pointer = [e.target.getAttribute('y'), e.target.getAttribute('x')];
  });

  grid.addEventListener('pointerover', (e) => {
    if (e.target.classList.contains('cell') && e.buttons > 0) {
      e.target.classList.toggle('full');
      if (isMagicOn) {
        if (e.target.classList.contains('full')) {
          e.target.style.backgroundColor = getRandomColor();
        } else {
          e.target.removeAttribute('style');
        }
      }
    }
  });
}

async function renderWordFromInput(e) {
  e.preventDefault();
  if (!input.value) {
    console.error('Input text, please!');
    return;
  }

  const wordArray = input.value.split('');
  for (letter of wordArray) {
    renderBitmapLetter(letter);
  }
  deselectCell();
  // selectCell(pointer);
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

function clearInput() {
  setTimeout(() => {
    input.value = '';
  }, 300);
}

function handleRightClick(e) {
  e.preventDefault();
  const x = +e.target.getAttribute('x');
  const y = +e.target.getAttribute('y');

  console.log(x, y);

  if (e.target.classList.contains('cell')) {
    if (!selectedCell) {
      selectCell([x, y]);
    } else if (selectedCell == e.target) {
      deselectCell();
    } else {
      deselectCell();
      selectCell([x, y]);
    }
  }
}

function selectCell([x, y]) {
  const cell = document.querySelector(`div[x="${x}"][y="${y}"]`);
  cell.classList.add('selected');
  selectedCell = cell;
}

function growSetup() {
  if (colorPicker.classList.contains('grow')) {
    colorPicker.classList.remove('grow');
    setArrowDown();
  } else {
    colorPicker.classList.add('grow');
    setArrowUp();
  }
}

function setArrowDown() {
  setTimeout(() => {
    arrow.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>';
  }, 200);
}
function setArrowUp() {
  setTimeout(() => {
    arrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z"/></svg>`;
  }, 200);
}

function deselectCell() {
  if (selectedCell) {
    selectedCell.classList.remove('selected');
    selectedCell = null;
  }
}

function setCellRadius(e) {
  document.documentElement.style.setProperty('--cell-border-radius', `${e.target.value}px`);
}

function serMaximumCellRadius(n) {
  const cell = document.querySelector('.cell')
  const maxRadius = cell.offsetHeight / 2;
  cellRadiusSlider.setAttribute('max', maxRadius)
} 

document.addEventListener('keydown', handleKeypress);
runButton.addEventListener('click', renderWordFromInput);
document.querySelectorAll('.slider').forEach((slider) => {
  slider.addEventListener('input', getColor);
});
document.getElementById('mode').addEventListener('click', switchMode);
document.getElementById('clear').addEventListener('click', clearGrid);
document.getElementById('magic').addEventListener('click', magic);
arrow.addEventListener('click', growSetup);
grid.addEventListener('contextmenu', handleRightClick);
cellRadiusSlider.addEventListener('input', setCellRadius)

document.addEventListener('DOMContentLoaded', () => {
  allowDrawing();
  setArrowDown();
  
  serMaximumCellRadius(1)
})