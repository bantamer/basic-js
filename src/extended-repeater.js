module.exports = function repeater(str, options) {
  if (options.addition !== undefined) {
    const separetedAddition = ` ${options.addition}`
      .repeat(options.additionRepeatTimes || 1)
      .trim()
      .split(' ')
      .join(options.additionSeparator || '|');
    const strWithAddition = `${str} `.split(' ').join(separetedAddition || '');
    const resultStr = `${strWithAddition} `
      .repeat(options.repeatTimes || 1)
      .trim()
      .split(' ')
      .join(options.separator || '+');

    return resultStr;
  }
  const resultStr = `${str} `
    .repeat(options.repeatTimes || 1)
    .trim()
    .split(' ')
    .join(options.separator || '+');

  return resultStr;
};
