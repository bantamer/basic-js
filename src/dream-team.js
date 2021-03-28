module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const result = [];
    members.forEach(el => {
      if (typeof el === 'string') {
        const [firstLetter] = el.trim().split('');
        result.push(firstLetter.toUpperCase());
      }
    });
    return result.sort().join('');
  }
  return false;
};
