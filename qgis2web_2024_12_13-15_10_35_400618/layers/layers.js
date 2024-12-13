var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format_earthquakes19702014_1 = new ol.format.GeoJSON();
var features_earthquakes19702014_1 = format_earthquakes19702014_1.readFeatures(json_earthquakes19702014_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_earthquakes19702014_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_earthquakes19702014_1.addFeatures(features_earthquakes19702014_1);
cluster_earthquakes19702014_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_earthquakes19702014_1
});
var lyr_earthquakes19702014_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_earthquakes19702014_1, 
                style: style_earthquakes19702014_1,
                popuplayertitle: 'earthquakes1970-2014',
                interactive: true,
                title: '<img src="styles/legend/earthquakes19702014_1.png" /> earthquakes1970-2014'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_earthquakes19702014_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_earthquakes19702014_1];
lyr_earthquakes19702014_1.set('fieldAliases', {'DateTime': 'DateTime', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Depth': 'Depth', 'Magnitude': 'Magnitude', 'MagType': 'MagType', 'NbStations': 'NbStations', 'Gap': 'Gap', 'Distance': 'Distance', 'RMS': 'RMS', 'Source': 'Source', 'EventID': 'EventID', });
lyr_earthquakes19702014_1.set('fieldImages', {'DateTime': '', 'Latitude': '', 'Longitude': '', 'Depth': '', 'Magnitude': '', 'MagType': '', 'NbStations': '', 'Gap': '', 'Distance': '', 'RMS': '', 'Source': '', 'EventID': '', });
lyr_earthquakes19702014_1.set('fieldLabels', {'DateTime': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Depth': 'no label', 'Magnitude': 'no label', 'MagType': 'no label', 'NbStations': 'no label', 'Gap': 'no label', 'Distance': 'no label', 'RMS': 'no label', 'Source': 'no label', 'EventID': 'no label', });
lyr_earthquakes19702014_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});