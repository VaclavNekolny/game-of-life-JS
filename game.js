const initGrid = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
];
const grid = document.querySelector('.grid');
let gridObject = [];
const glass = document.getElementById('gray-glass');

let gameRunId;
let cursorBlinkingId;
let pointerOutBlocked = false;

const colorPicker = document.getElementById('color-picker');
let color = [180, 50, 50];
const hue = document.getElementById('hue');
const saturation = document.getElementById('saturation');
const lightness = document.getElementById('lightness');
const cellRadiusSlider = document.getElementById('cell-radius');

const arrow = document.getElementById('arrow');

const addRowButton = document.getElementById('add-row');
const deleteRowButton = document.getElementById('delete-row');
const addColButton = document.getElementById('add-col');
const deleteColButton = document.getElementById('delete-col');

let isDarkMode = false;
let isMagicOn = false;

const gameButton = document.getElementById('game');
let runSpeed = 200;
const speedSlider = document.getElementById('game-speed');

let grid_col = 50;
let grid_row = 30;
document.documentElement.style.setProperty('--grid-col', grid_col);
document.documentElement.style.setProperty('--grid-row', grid_row);

let pointer = [7, 1];
drawEmptyGrid();
let font = fetchAlphabethBitmap();

function drawEmptyGrid() {
  const grid = document.querySelector('.grid');

  for (let i = 0; i < grid_col * grid_row; i++) {
    let cell = createNewCell(Math.floor(i / grid_col), i % grid_col);
    grid.appendChild(cell);
  }
  loadGridToObject();
}

function clearGrid() {
  document.querySelectorAll('.cell').forEach((cell) => {
    cell.classList.remove('full');
    if (isMagicOn) {
      cell.removeAttribute('style');
    }
  });
  message('Grid cleared 🧹', 'success');
}

function magic() {
  if (!isMagicOn) {
    document.querySelectorAll('.full').forEach((cell) => {
      cell.style.backgroundColor = getRandomColor();
    });
    isMagicOn = true;
    message('Magic ON 🪄', 'success');
  } else {
    document.querySelectorAll('.full').forEach((cell) => {
      cell.removeAttribute('style');
    });
    isMagicOn = false;
    message('Magic OFF 🪄', 'success');
  }
}

function getCell(row, col) {
  if (row > grid_row - 1 || col > grid_col - 1) {
    throw new Error('out of range');
  }
  return grid.querySelector(`div[row="${row}"][col="${col}"]`);
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
  return `hsl(${h},${s}%,${l}%)`;
}

function handleKeypress(e) {
  // Don'r show R on screen before reloadnig the page
  if (event.metaKey && event.shiftKey && event.key.toLowerCase() === 'r') {
    return;
  }

  if (e.code == 'Backspace') {
    if (cursorBlinkingId) {
      backspace();
      return;
    }
  }

  if (e.code == 'Space') {
    if (!cursorBlinkingId) {
      runCursorBlinking();
      return;
    }
  }
  if (e.code == 'Escape') {
    stopCursorBlinking();
    if (gameRunId) {
      stopGame();
    }
  }
  if (e.code == 'Enter' || (e.key == 'r' && !cursorBlinkingId)) {
    handleGameRun();
  }
  if (e.key.toLowerCase() == 'm' && !cursorBlinkingId) {
    switchMode();
  }
  if (e.key.toLowerCase() == 'c' && !cursorBlinkingId && !gameRunId) {
    clearGrid();
  }
  if (e.key.toLowerCase() == 'g' && !cursorBlinkingId) {
    magic();
  }
  if (e.key.startsWith('Arrow') && cursorBlinkingId) {
    moveCursor(e.key);
  }
  if (cursorBlinkingId && returnKeyBitmap(e.key)) {
    renderBitmapLetter(returnKeyBitmap(e.key));
  }
}

function moveCursor(direction) {
  if (direction == 'ArrowUp') {
    pointer = [pointer[0] - 1, pointer[1]];
    if (pointer[0] < 0) {
      pointer[0] = grid_row - 9;
    }
  } else if (direction == 'ArrowDown') {
    pointer = [pointer[0] + 1, pointer[1]];
    if (pointer[0] + 9 > grid_row) {
      pointer[0] = 0;
    }
  }
  if (direction == 'ArrowLeft') {
    pointer = [pointer[0], pointer[1] - 1];
    if (pointer[1] < 0) {
      pointer[1] = grid_col - 1;
    }
  }
  if (direction == 'ArrowRight') {
    pointer = [pointer[0], pointer[1] + 1];
    if (pointer[1] > grid_col - 1) {
      pointer[1] = 0;
    }
  }
}

function nextLine() {
  if (pointer[0] + 17 < grid_row) {
    pointer[0] = pointer[0] + 9;
    pointer[1] = 1;
  } else {
    message('Not enough space in the bottom', 'error');
    throw new Error('Not enough space in the bottom');
  }
}

function returnKeyBitmap(key) {
  return font[key] ?? null;
}

function drawOrEraseTheCell(e) {
  if (e.target.classList.contains('cell')) {
    if (
      // draw when pointer down
      (e.type === 'pointerdown' && e.buttons == 1) ||
      // draw when pointer over and button is clicked
      (e.type === 'pointerover' && e.buttons > 0)
    ) {
      e.target.classList.toggle('full');
      if (isMagicOn) {
        if (e.target.classList.contains('full')) {
          e.target.style.backgroundColor = getRandomColor();
        } else {
          e.target.removeAttribute('style');
        }
      }
    }
  }

  loadGridToObject();
}

grid.addEventListener('pointerdown', drawOrEraseTheCell);
grid.addEventListener('pointerover', drawOrEraseTheCell);

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

function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function renderBitmapLetter(letterBmp) {
  cursorOff();

  let [row, col] = pointer;

  if (col + 5 > grid_col) {
    try {
      nextLine();
    } catch (error) {
      console.error(error);
    }
  }

  for (let i = 0; i < letterBmp.length; i++) {
    // convert to binary
    const pixelRow = letterBmp[i].toString(2).padStart(5, '0');
    const rowArray = pixelRow.split('').reverse(); // why I need reverse?
    for (let j = 0; j < rowArray.length; j++) {
      if (rowArray[j] == '1') {
        const cell = getCell(i + +row, j + +col);
        cell.classList.add('full');
        if (isMagicOn) {
          cell.style.backgroundColor = getRandomColor();
        }
      } else {
        const cell = getCell(i + +row, j + +col);
        cell.classList.remove('full');
        if (isMagicOn) {
          cell.removeAttribute('style');
        }
      }
    }
  }
  oneLineSpace(row, col + 5);
  oneLineSpace(row, col + 6);
  pointer[1] = pointer[1] + 6;
}

function backspace() {
  cursorOff();

  let [row, col] = pointer;

  if (col - 6 < 0) {
    throw new Error('Out of range');
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j > -5; j--) {
      const cell = getCell(i + +row, j + +col);
      cell.classList.remove('full');
      if (isMagicOn) {
        cell.removeAttribute('style');
      }
    }
  }

  // setting new pointer
  oneLineSpace(row, col - 5);
  oneLineSpace(row, col - 6);
  pointer[1] = pointer[1] - 6;
}

function oneLineSpace(row, col) {
  for (let i = 0; i < 9; i++) {
    const cell = getCell(i + row, col);
    cell.classList.remove('full');
    if (isMagicOn) {
      cell.removeAttribute('style');
    }
  }
}

function switchMode() {
  if (isDarkMode) {
    document.documentElement.style.setProperty(
      '--body-background',
      'hsl(36, 90%, 88%)',
    );
    document.documentElement.style.setProperty(
      '--cell-background',
      'hsl(36, 100%, 90%)',
    );
    document.documentElement.style.setProperty(
      '--cell-border-color',
      'hsla(36, 60%, 80%, 0.3)',
    );
    isDarkMode = false;
    message('Light mode', 'success');
  } else {
    document.documentElement.style.setProperty(
      '--body-background',
      'hsl(36, 9%, 14%)',
    );
    document.documentElement.style.setProperty(
      '--cell-background',
      'hsl(36, 10%, 15%)',
    );
    document.documentElement.style.setProperty(
      '--cell-border-color',
      'hsla(36, 8%, 10%, 0.45)',
    );
    isDarkMode = true;
    message('Dark mode', 'success');
  }
  glass.classList.toggle('dark-mode');
}

function handleRightClick(e) {
  e.preventDefault();
  const row = +e.target.getAttribute('row');
  const col = +e.target.getAttribute('col');

  pointer = [row, col];
  runCursorBlinking();
}

function selectCell([row, col]) {
  const cell = document.querySelector(`div[row="${row}"][col="${col}"]`);
  cell.classList.add('selected');
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

function deselectCell([row, col]) {
  const cell = document.querySelector(`div[row="${row}"][col="${col}"]`);
  cell.classList.remove('selected');
}

function setCellRadius(e) {
  document.documentElement.style.setProperty(
    '--cell-border-radius',
    `${e.target.value}px`,
  );
}

function setMaximumCellRadius() {
  const cell = document.querySelector('.cell');
  const maxRadius = cell.offsetHeight / 2;
  cellRadiusSlider.setAttribute('max', maxRadius);
}

function createNewCell(row, col) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.setAttribute('row', row);
  cell.setAttribute('col', col);
  return cell;
}

function addRow(e) {
  if (e.target.classList.contains('disabled')) {
    return;
  }
  for (let i = 0; i < grid_col; i++) {
    const cell = createNewCell(grid_row, i);
    grid.appendChild(cell);
  }
  grid_row += 1;
  document.documentElement.style.setProperty('--grid-row', grid_row);
}

function deleteRow(e) {
  if (e.target.classList.contains('disabled')) {
    return;
  }
  grid
    .querySelectorAll(`div[row="${grid_row - 1}"]`)
    .forEach((cell) => cell.remove());
  grid_row -= 1;
  document.documentElement.style.setProperty('--grid-row', grid_row);
}

function addCol(e) {
  if (e.target.classList.contains('disabled')) {
    return;
  }
  grid.querySelectorAll(`div[col="${grid_col - 1}"]`).forEach((cell, row) => {
    const newCell = createNewCell(row, grid_col);
    cell.after(newCell);
  });
  grid_col += 1;
  document.documentElement.style.setProperty('--grid-col', grid_col);
}
function deleteCol(e) {
  if (e.target.classList.contains('disabled')) {
    return;
  }
  grid
    .querySelectorAll(`div[col="${grid_col - 1}"]`)
    .forEach((cell) => cell.remove());
  grid_col -= 1;
  document.documentElement.style.setProperty('--grid-col', grid_col);
}

function disableGridAdjusting() {
  addRowButton.classList.add('disabled');
  deleteRowButton.classList.add('disabled');
  addColButton.classList.add('disabled');
  deleteColButton.classList.add('disabled');
}

function enableGridAdjusting() {
  addRowButton.classList.remove('disabled');
  deleteRowButton.classList.remove('disabled');
  addColButton.classList.remove('disabled');
  deleteColButton.classList.remove('disabled');
}

function loadGridToObject() {
  gridObject = [];
  for (let i = 0; i < grid_row; i++) {
    let row = [];
    for (let j = 0; j < grid_col; j++) {
      const cell = document.querySelector(`div[row="${i}"][col="${j}"]`);
      if (cell.classList.contains('full')) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    gridObject.push(row);
  }
}

function nextRound() {
  let newGridObject = [];
  for (let row = 0; row < grid_row; row++) {
    let newRow = [];
    for (let col = 0; col < grid_col; col++) {
      let lives = gridObject[row][col];

      const neighboursCount = countNeighbours(row, col);

      if (lives) {
        if (neighboursCount < 2) {
          newRow.push(0);
        } else if (neighboursCount > 3) {
          newRow.push(0);
        } else {
          newRow.push(1);
        }
      } else {
        if (neighboursCount == 3) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      }
    }
    newGridObject.push(newRow);
  }
  if (areObjectsSame(gridObject, newGridObject)) {
    stopGame();
  }

  gridObject = newGridObject;
  drawGridFromObject();
}

function areObjectsSame(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function countNeighbours(row, col) {
  let counter = 0;
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (
        i < 0 ||
        j < 0 ||
        i > grid_row - 1 ||
        j > grid_col - 1 ||
        (i == row && j == col)
      ) {
        counter += 0;
      } else {
        counter += +gridObject[i][j];
      }
    }
  }
  return counter;
}

function drawGridFromObject(innerGridObject = gridObject) {
  for (const cell of grid.children) {
    const row = +cell.getAttribute('row');
    const col = +cell.getAttribute('col');
    if (innerGridObject[row][col]) {
      cell.classList.add('full');
      if (isMagicOn) {
        cell.style.backgroundColor = getRandomColor();
      }
    } else {
      cell.classList.remove('full');
      cell.removeAttribute('style');
    }
  }
}

function handleGameRun() {
  if (gameButton.classList.contains('run')) {
    stopCursorBlinking();
    runGame();
  } else {
    stopGame();
  }
}

function runGame() {
  gameButton.innerHTML = 'STOP ❌';
  gameButton.classList.add('stop');
  gameButton.classList.remove('run');

  glass.classList.remove('hidden');
  disableGridAdjusting();

  clearInterval(gameRunId);
  loadGridToObject();
  gameRunId = setInterval(nextRound, runSpeed);
  message('Game running 🚀', 'success');
}

function stopGame() {
  gameButton.innerHTML = 'RUN 🚀';
  gameButton.classList.add('run');
  gameButton.classList.remove('stop');

  glass.classList.add('hidden');
  enableGridAdjusting();

  clearInterval(gameRunId);
  gameRunId = null;
  saveToStorage();
  message('Game stopped ❌', 'success');
}

function setGameSpeed(e) {
  console.log(typeof e);
  if (typeof e === 'object') {
    const speeds = [2000, 1000, 700, 400, 300, 200, 100, 50];
    runSpeed = speeds[+e.target.value];
  } else {
    runSpeed = +e;
  }
  if (gameRunId) {
    stopGame();
    handleGameRun();
  }
}

function isGridEmpty(grid) {
  return !grid.flat().includes(1);
}

function cursorOn() {
  const row = pointer[0];
  let col = +pointer[1];
  for (let i_row = row; i_row < row + 9; i_row++) {
    selectCell([i_row, col]);
  }
}

function cursorOff() {
  grid
    .querySelectorAll('.selected')
    .forEach((cell) => cell.classList.remove('selected'));
}

function runCursorBlinking() {
  clearInterval(cursorBlinkingId);

  cursorBlinkingId = setInterval(() => {
    cursorOn();
    setTimeout(() => {
      cursorOff();
    }, 250);
  }, 500);
}

function stopCursorBlinking() {
  cursorOff();
  clearInterval(cursorBlinkingId);
  cursorBlinkingId = null;
}

document.addEventListener('keydown', handleKeypress);
document.querySelectorAll('.slider').forEach((slider) => {
  slider.addEventListener('input', getColor);
});
document.getElementById('mode').addEventListener('click', switchMode);
document.getElementById('clear').addEventListener('click', clearGrid);
document.getElementById('magic').addEventListener('click', magic);
arrow.addEventListener('click', growSetup);
grid.addEventListener('contextmenu', handleRightClick);
cellRadiusSlider.addEventListener('input', setCellRadius);
cellRadiusSlider.addEventListener('pointerup', (e) =>
  message(
    `Cell radius: ${(e.target.value / Math.floor(e.target.max)) * 100}%`,
    'success',
  ),
);

document.addEventListener('DOMContentLoaded', () => {
  setArrowDown();
  switchMode();
  getColor();
  setMaximumCellRadius(1);
});

addRowButton.addEventListener('click', addRow);
deleteRowButton.addEventListener('click', deleteRow);
addColButton.addEventListener('click', addCol);
deleteColButton.addEventListener('click', deleteCol);

gameButton.addEventListener('click', handleGameRun);
speedSlider.addEventListener('input', setGameSpeed);
speedSlider.addEventListener('pointerup', (e) =>
  message(`Game speed: ${e.target.value}`, 'success'),
);

// STORAGE
function saveToStorage() {
  let gameToSave = {
    pointer: pointer,
    isDarkMode: isDarkMode,
    isMagicOn: isMagicOn,
    gridSize: [grid_row, grid_col],
    color: color,
    gameSpeed: runSpeed,
    grid: gridObject,
  };

  localStorage.setItem('game', JSON.stringify(gameToSave));
  console.log('saved');
}

function loadFromStorage() {
  const gameData = localStorage.getItem('game');
  if (gameData) {
    setGameSpeed(gameData.gameSpeed);
    drawGridFromObject(gameData.grid);
  }
}

function message(text, type, timeout = 1200) {
  const messageElement = document.getElementById('message');
  messageElement.removeAttribute('class');
  messageElement.classList.add(type);
  messageElement.innerHTML = text;

  setTimeout(() => {
    messageElement.classList.add('hidden');
  }, timeout);
}

async function instructions() {
  drawGridFromObject(initGrid);
  runCursorBlinking();
  let letters = ['W', 'r', 'i', 't', 'e'];
  for (const letter of letters) {
    const bmp = returnKeyBitmap(letter);
    if (bmp) renderBitmapLetter(bmp);
    await delay(100);
  }

  await delay(1000);

  for (let i = 0; i < 5; i++) {
    backspace();
    await delay(100);
  }

  letters = ['D', 'r', 'a', 'w'];
  for (const letter of letters) {
    const bmp = returnKeyBitmap(letter);
    if (bmp) renderBitmapLetter(bmp);
    await delay(100);
  }

  await delay(1000);

  for (let i = 0; i < 4; i++) {
    backspace();
    await delay(100);
  }

  letters = ['S', 'w', 'i', 't', 'c', 'h'];
  for (const letter of letters) {
    const bmp = returnKeyBitmap(letter);
    if (bmp) renderBitmapLetter(bmp);
    await delay(70);
  }
  nextLine();
  delay(500);
  letters = ['m', 'o', 'd', 'e'];
  for (const letter of letters) {
    const bmp = returnKeyBitmap(letter);
    if (bmp) renderBitmapLetter(bmp);
    await delay(70);
  }
  await delay(700);
  switchMode();
  await delay(700);
  switchMode();
  await delay(700);
  switchMode();
  await delay(700);
  switchMode();
  await delay(400);

  for (let i = 0; i < 4; i++) {
    backspace();
    await delay(70);
  }
  pointer = [7, 37];
  for (let i = 0; i < 6; i++) {
    backspace();
    await delay(70);
  }

  letters = ['D', 'o', ' ', 'm', 'a', 'g', 'i', 'c'];
  for (const letter of letters) {
    const bmp = returnKeyBitmap(letter);
    if (bmp) renderBitmapLetter(bmp);
    await delay(70);
  }
  magic();
  await delay(1000);

  for (let i = 0; i < 8; i++) {
    backspace();
    await delay(70);
  }
  // Let it live
  letters = ['L', 'e', 't', ' ', 'i', 't'];
  for (const letter of letters) {
    const bmp = returnKeyBitmap(letter);
    if (bmp) renderBitmapLetter(bmp);
    await delay(80);
  }
  nextLine();

  letters = ['l', 'i', 'v', 'e', '!'];
  for (const letter of letters) {
    const bmp = returnKeyBitmap(letter);
    if (bmp) renderBitmapLetter(bmp);
    await delay(80);
  }

  await delay(800);

  setTimeout(() => {
    stopGame();
  }, 6000);
  setTimeout(() => {
    clearGrid();
    message('show instructions');
    setGameSpeed(200);
  }, 7000);

  stopCursorBlinking();
  pointer = [7, 1];
  setGameSpeed(40);
  runGame();
}
