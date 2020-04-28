var plotdata2 = clinicalTrials[2];
console.log(plotdata2)

count = [];
phase = [];

for (var i = 0; i < plotdata2.length; ++i) {
  count.push(plotdata2[i]["count"]);
  phase.push(plotdata2[i]["phase"]);
};

var data = [{
    values: count,
    labels: phase,
    type: 'pie'
  }];
  
  var layout = {
    title: "Count of Clinical Trials per Phase",
    height: 400,
    width: 500
  };
  Plotly.newPlot("plot2", data, layout,{responsive:true});
  