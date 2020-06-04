

var plotdata = clinicalTrials[1];

yVals = [];
xVals = [];

for (var i = 0; i < plotdata.length; ++i) {
  yVals.push(plotdata[i]["count"]);
  xVals.push(plotdata[i]["locationcountry"]);
};

var trace1 = {
  x: xVals,
  y: yVals,
  type: "bar",
  text: [xVals, yVals],
  textposition: 'bottom',
  

};

var data = [trace1];

var layout = {
  margin: {l:20, r:20, t:15},
  title: 'Global Font',
  font: {
    size: 9,
    color: '#7f7f7f'
  }
};

Plotly.newPlot("plot1", data, layout, {responsive: true});






