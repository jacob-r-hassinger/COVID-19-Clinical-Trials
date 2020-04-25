// //var gl = L.mapboxGL({
//    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
//     accessToken: 'not-needed',
//     style: 'https://api.maptiler.com/maps/3d26a01e-f289-425f-b403-d7737e1ae42f/style.json?key=G18kR4B5cKkYaH1F1cW3'
//   }).addTo(map)


var data = [clinicalTrials];
// console.log(Object.entries(data));
console.log(data);

// Create empty arrays to store the latitude
lats = []; 
longs = [];
names = [];
titles = [];
for (i = 0; i < clinicalTrials.length; i++) {
  lats.push(clinicalTrials[i]["latitude"]);
  longs.push(clinicalTrials[i]["longitude"]);
  titles.push(clinicalTrials[i]["brieftitle"]);
  names.push(clinicalTrials[i]["facility"]);
};

// Use map to build array
var latMapped = data.map(datapoint => data.latitude);


console.log(latMapped);

