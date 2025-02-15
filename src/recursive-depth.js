module.exports = class DepthCalculator {
  calculateDepth = arr => {
    return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(this.calculateDepth)) : 0;
  };
};
