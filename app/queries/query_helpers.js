//Standard display for tacos
function parseData(data, ...dataLabels) {
  return data.map( datum => {
    var result = {};
    dataLabels.forEach(label => {
      result[label] = datum[label];
    });
    return result;
  });
}

//capitalize words
function capitalize(string) {
  return string.split('-').map(word => {
    var lowerCase = word.toLowerCase();
    return lowerCase[0].toUpperCase() + lowerCase.slice(1, lowerCase.length);
  }).join(' ');
}

module.exports = {
  parseData,
  capitalize
};
