const color = ['white', 'yellow', 'purple', 'red'];

let Ghost = function() {
  this.color = getRandomColor();
};

function getRandomColor() {
  const lenghtOfColorArray = color.length;

  const randomIndex = Math.floor(Math.random()*lenghtOfColorArray);

  return color[randomIndex];
}

module.exports = Ghost;
