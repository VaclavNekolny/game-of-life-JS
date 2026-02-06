export function loadFromStorage() {
  localStorage.getItem('hello');
}

export function saveToStorage() {
  // OBJECT PATTERN
  // let objectToSave = {
  //     pointer: [0,0],
  //     isDarkMode: false,
  //     gridSize: [row, col],
  //     hsl: [h,s,l],
  //     cellRadius: '0px',
  //     gameSpeed: 1,
  //     grid: [],
  // }

  localStorage.setItem('hello', 'it is me');
}
