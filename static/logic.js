




var data = [clinicalTrials];
  // console.log(Object.entries(data));
  console.log(data);


// for (var i = 0; i < data.length; i++) {
//     var covid = data[i];
//     L.marker(covid.latitude, covid.longitude)
//       .bindPopup("<h1>" + covid.facility + "</h1> <hr> <h3>Population " + covid.brieftitle + "</h3>")
//       .addTo(map);
//   }

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


var gl = L.mapboxGL({
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  accessToken: 'not-needed',
  style: 'https://api.maptiler.com/maps/3d26a01e-f289-425f-b403-d7737e1ae42f/style.json?key=G18kR4B5cKkYaH1F1cW3'
}).addTo(map)

var marker = L.marker([lats, longs], {
    draggable: true,
    title: "My First Marker"
}).addTo(map);

