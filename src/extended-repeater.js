module.exports = function repeater(str, options) {
  options = Object.assign(
    {
      separator: '+',
      additionSeparator: '|',
      addition: '',
    },
    options
  );

  const separetedAddition = `${String(options.addition)}${options.additionSeparator}`
    .repeat(options.additionRepeatTimes || 1)
    .slice(0, -options.additionSeparator.length);
  const strWithAddition = `${String(str)}${separetedAddition}${options.separator}`
    .repeat(options.repeatTimes || 1)
    .slice(0, -options.separator.length);

  return strWithAddition;
};
