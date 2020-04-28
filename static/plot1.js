var plotdata = clinicalTrials[1];
console.log(plotdata)

var trace1 = {
  x: [],
  y: [],
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "Count of Clinical Trials per State"
};

Plotly.newPlot("plot1", data, layout);