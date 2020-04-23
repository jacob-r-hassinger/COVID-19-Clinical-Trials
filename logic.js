var map = L.map("map", { center: [40, -95], zoom: 4 });

L.tileLayer(
  "https://api.maptiler.com/maps/topographique/{z}/{x}/{y}.png?key=G18kR4B5cKkYaH1F1cW3",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);
