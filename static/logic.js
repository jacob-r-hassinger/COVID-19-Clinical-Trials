// var map = L.map("map", {
//   center: [10.0, 5.0],
//   minZoom: 2,
//   zoom: 2
// }).setView([35, -99], 4.3);

var map = L.map("map", {
  center: [10.0, 5.0],
  minZoom: 2,
  zoom: 2,
});

// Add a tile layer
L.tileLayer(
  "https://api.maptiler.com/maps/positron/{z}/{x}/{y}.png?key=G18kR4B5cKkYaH1F1cW3",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

var data = clinicalTrials[0];

var myURL = "https://i.ibb.co/VNqwM47/icon-512x512-2x.png";

var myIcon = L.icon({
  iconUrl: myURL,
  iconSize: [48, 48],
});

var markerClusters = L.markerClusterGroup();

for (var i = 0; i < data.length; ++i) {
  var popupContent =
    "<br/><b>FACILITY:<b>   " +
    data[i].facility +
    "<br/><b>Brief Title:</b>" +
    data[i].brieftitle +
    "<br/><b>Enrollment Count:</b> " +
    data[i].enrollmentcount +
    "<br/><b>Contact Name:</b> " +
    data[i].contactname +
    "<br/><b>Contact Phone:</b> " +
    data[i].contactphone;

  var popupOptions = {
    maxWidth: "500",
    className: "another-popup",
  };
  var marker = L.marker([data[i].latitude, data[i].longitude], {
    icon: myIcon,
    trialid: data[i].nctid,
    trialtitle: data[i].brieftitle,
    trialsumm: data[i].briefsummary,
    trialstatus: data[i].overallstatus,
    trialsponsor: data[i].leadsponsor,
  }).bindPopup(popupContent, popupOptions);

  markerClusters.addLayer(marker);

  marker.on("click", marker_clicked);
  marker.on("popupclose", clearTable);

  function marker_clicked(e) {
    let clicked = e.target;
    document.getElementById("nctid-space").innerHTML =
      "<b>NCTID: </b>" + clicked.options.trialid;
    document.getElementById("brieftitle-space").innerHTML =
      "<b>Brief Title: </b>" + clicked.options.trialtitle;
    document.getElementById("briefsummary-space").innerHTML =
      "<b>Brief Summary: </b>" + clicked.options.trialsumm;
    document.getElementById("overallstatus-space").innerHTML =
      "<b>Overall Status: </b>" + clicked.options.trialstatus;
    document.getElementById("leadsponsor-space").innerHTML =
      "<b>Lead Sponsor: </b>" + clicked.options.trialsponsor;
  }
}

map.addLayer(markerClusters);

function clearTable() {
  document.getElementById("nctid-space").innerHTML =
    "Click on any individual map marker to learn more about the clinical trial in question.";
  document.getElementById("brieftitle-space").innerHTML = "";
  document.getElementById("briefsummary-space").innerHTML = "";
  document.getElementById("overallstatus-space").innerHTML = "";
  document.getElementById("leadsponsor-space").innerHTML = "";
}
