

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
  marker: {
    color: 'rgb(28, 144, 153)',
    opacity: 0.6,
  }

};

var data = [trace1];

var layout = {
  margin: {l:20, r:20, t:15},
  font: {
    size: 9,
    color: '#7f7f7f'
  }
};

Plotly.newPlot("plot1", data, layout, {responsive: true});


// gba(28, 144, 153, 0.6)



