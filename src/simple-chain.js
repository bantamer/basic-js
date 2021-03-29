const chainMaker = {
  resultArr: [],
  getLength() {
    return this.resultArr.length;
  },
  addLink(value) {
    this.resultArr.push(String(`( ${value} )`));
    return this;
  },
  removeLink(position) {
    if (
      typeof position === 'number' &&
      position % 1 === 0 &&
      position > 0 &&
      position <= this.resultArr.length
    ) {
      this.resultArr.splice(position - 1, 1);
      return this;
    }
    this.resultArr = [];
    throw Error;
  },
  reverseChain() {
    this.resultArr.reverse();
    return this;
  },
  finishChain() {
    const result = this.resultArr.join('~~');
    this.resultArr = [];
    return result;
  },
};

module.exports = chainMaker;
