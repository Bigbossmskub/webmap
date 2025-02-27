<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1, user-scalable=no, maximum-scale=1, width=device-width">
    <title>Interactive Map</title>
    <link rel="stylesheet" href="css/leaflet.css">
    <link rel="stylesheet" href="css/qgis2web.css">
    <style>
        html, body, #map { width: 100%; height: 100%; margin: 0; padding: 0; }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="js/leaflet.js"></script>
    <script>
        var map = L.map('map').setView([18.7903, 98.9849], 10);
        L.tileLayer(`https://${s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        var geoJsonData = [
            {"type": "FeatureCollection", "features": []}, // ข้อมูลจาก _1.js
            {"type": "FeatureCollection", "features": []}, // ข้อมูลจาก _2.js
            {"type": "FeatureCollection", "features": []}  // ข้อมูลจาก _4.js
        ];

        function onEachFeature(feature, layer) {
            if (feature.properties) {
                let popupContent = `<b>${feature.properties.Name_res || 'ข้อมูล'}</b>`;
                layer.bindPopup(popupContent);
            }
        }

        geoJsonData.forEach(data => {
            L.geoJson(data, { onEachFeature: onEachFeature }).addTo(map);
        });
    </script>
</body>
</html>
