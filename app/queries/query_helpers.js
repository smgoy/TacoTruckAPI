//Standard display for tacos
function parseData () {
  var values = Array.prototype.slice.call(arguments);
  var data = values[0];
  var dataLabels = values.slice(1, values.length);
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
  return string.split(' ').map(word => {
    var lowerCase = word.toLowerCase();
    return lowerCase[0].toUpperCase() + lowerCase.slice(1, lowerCase.length);
  }).join(' ');
}

module.exports = {
  parseData,
  capitalize
};
