module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / (turnsSpeed / 3600));
  const solution = {
    turns: turns,
    seconds: seconds,
  };
  return solution;
};
