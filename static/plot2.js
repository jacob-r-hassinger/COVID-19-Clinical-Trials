var plotdata2 = clinicalTrials[2];

count = [];
phase = [];

for (var i = 0; i < plotdata2.length; ++i) {
  count.push(plotdata2[i]["count"]);
  phase.push(plotdata2[i]["phase"]);
}

// var ultimateColors = [
//   ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
//   ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
//   ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
//   ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
// ];

var ultimateColors = [
  ['rgba(166, 189, 219, 0.6)', 'rgba(166, 189, 219, 0.6)', 'rgba(28, 144, 153, 0.6)', 'rgba(28, 144, 153, 0.6)', 'rgba(12, 75, 80, 0.6)', 'rgba(12, 75, 80, 0.6)']
];

var data = [
  {
    values: count,
    labels: phase,
    type: "pie",
    marker: {
      colors: ultimateColors[0]
    },
  },
];

var layout = {
  margin: { l: 20, r: 20, t: 15 },
};
Plotly.newPlot("plot2", data, layout, { responsive: true });
