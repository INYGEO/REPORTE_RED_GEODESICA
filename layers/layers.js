var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LOCALIZADASCONPLACA_1 = new ol.format.GeoJSON();
var features_LOCALIZADASCONPLACA_1 = format_LOCALIZADASCONPLACA_1.readFeatures(json_LOCALIZADASCONPLACA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOCALIZADASCONPLACA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOCALIZADASCONPLACA_1.addFeatures(features_LOCALIZADASCONPLACA_1);
var lyr_LOCALIZADASCONPLACA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOCALIZADASCONPLACA_1, 
                style: style_LOCALIZADASCONPLACA_1,
                popuplayertitle: 'LOCALIZADAS CON PLACA',
                interactive: true,
                title: '<img src="styles/legend/LOCALIZADASCONPLACA_1.png" /> LOCALIZADAS CON PLACA'
            });
var format_LOCALIZADOSAMONUMENTAR_2 = new ol.format.GeoJSON();
var features_LOCALIZADOSAMONUMENTAR_2 = format_LOCALIZADOSAMONUMENTAR_2.readFeatures(json_LOCALIZADOSAMONUMENTAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOCALIZADOSAMONUMENTAR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOCALIZADOSAMONUMENTAR_2.addFeatures(features_LOCALIZADOSAMONUMENTAR_2);
var lyr_LOCALIZADOSAMONUMENTAR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOCALIZADOSAMONUMENTAR_2, 
                style: style_LOCALIZADOSAMONUMENTAR_2,
                popuplayertitle: 'LOCALIZADOS A MONUMENTAR',
                interactive: true,
                title: '<img src="styles/legend/LOCALIZADOSAMONUMENTAR_2.png" /> LOCALIZADOS A MONUMENTAR'
            });
var format_PROPUESTOSPORCATASTRO_3 = new ol.format.GeoJSON();
var features_PROPUESTOSPORCATASTRO_3 = format_PROPUESTOSPORCATASTRO_3.readFeatures(json_PROPUESTOSPORCATASTRO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROPUESTOSPORCATASTRO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPUESTOSPORCATASTRO_3.addFeatures(features_PROPUESTOSPORCATASTRO_3);
var lyr_PROPUESTOSPORCATASTRO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROPUESTOSPORCATASTRO_3, 
                style: style_PROPUESTOSPORCATASTRO_3,
                popuplayertitle: 'PROPUESTOS POR CATASTRO',
                interactive: true,
                title: '<img src="styles/legend/PROPUESTOSPORCATASTRO_3.png" /> PROPUESTOS POR CATASTRO'
            });
var format_PRIMARIAYSECUNDARIA_4 = new ol.format.GeoJSON();
var features_PRIMARIAYSECUNDARIA_4 = format_PRIMARIAYSECUNDARIA_4.readFeatures(json_PRIMARIAYSECUNDARIA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRIMARIAYSECUNDARIA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRIMARIAYSECUNDARIA_4.addFeatures(features_PRIMARIAYSECUNDARIA_4);
var lyr_PRIMARIAYSECUNDARIA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRIMARIAYSECUNDARIA_4, 
                style: style_PRIMARIAYSECUNDARIA_4,
                popuplayertitle: 'PRIMARIA Y SECUNDARIA',
                interactive: true,
    title: 'PRIMARIA Y SECUNDARIA<br />\
    <img src="styles/legend/PRIMARIAYSECUNDARIA_4_0.png" /> PRIMARIA<br />\
    <img src="styles/legend/PRIMARIAYSECUNDARIA_4_1.png" /> SECUNDARIA<br />' });

lyr_google_0.setVisible(true);lyr_LOCALIZADASCONPLACA_1.setVisible(true);lyr_LOCALIZADOSAMONUMENTAR_2.setVisible(true);lyr_PROPUESTOSPORCATASTRO_3.setVisible(true);lyr_PRIMARIAYSECUNDARIA_4.setVisible(true);
var layersList = [lyr_google_0,lyr_LOCALIZADASCONPLACA_1,lyr_LOCALIZADOSAMONUMENTAR_2,lyr_PROPUESTOSPORCATASTRO_3,lyr_PRIMARIAYSECUNDARIA_4];
lyr_LOCALIZADASCONPLACA_1.set('fieldAliases', {'NUMERO': 'NUMERO', '489458.365': '489458.365', '3598923.27': '3598923.27', });
lyr_LOCALIZADOSAMONUMENTAR_2.set('fieldAliases', {'NUMERO': 'NUMERO', '488450.765': '488450.765', '3598211.23': '3598211.23', });
lyr_PROPUESTOSPORCATASTRO_3.set('fieldAliases', {'NUMERO': 'NUMERO', '488766.036': '488766.036', '3599377.08': '3599377.08', });
lyr_PRIMARIAYSECUNDARIA_4.set('fieldAliases', {'NUMERO': 'NUMERO', 'X': 'X', 'Y': 'Y', 'CLASE': 'CLASE', 'UBICACION': 'UBICACION', });
lyr_LOCALIZADASCONPLACA_1.set('fieldImages', {'NUMERO': 'TextEdit', '489458.365': 'TextEdit', '3598923.27': 'TextEdit', });
lyr_LOCALIZADOSAMONUMENTAR_2.set('fieldImages', {'NUMERO': 'TextEdit', '488450.765': 'TextEdit', '3598211.23': 'TextEdit', });
lyr_PROPUESTOSPORCATASTRO_3.set('fieldImages', {'NUMERO': 'TextEdit', '488766.036': 'TextEdit', '3599377.08': 'TextEdit', });
lyr_PRIMARIAYSECUNDARIA_4.set('fieldImages', {'NUMERO': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CLASE': 'TextEdit', 'UBICACION': 'TextEdit', });
lyr_LOCALIZADASCONPLACA_1.set('fieldLabels', {'NUMERO': 'inline label - visible with data', '489458.365': 'hidden field', '3598923.27': 'hidden field', });
lyr_LOCALIZADOSAMONUMENTAR_2.set('fieldLabels', {'NUMERO': 'inline label - visible with data', '488450.765': 'hidden field', '3598211.23': 'hidden field', });
lyr_PROPUESTOSPORCATASTRO_3.set('fieldLabels', {'NUMERO': 'inline label - visible with data', '488766.036': 'hidden field', '3599377.08': 'hidden field', });
lyr_PRIMARIAYSECUNDARIA_4.set('fieldLabels', {'NUMERO': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', 'CLASE': 'inline label - visible with data', 'UBICACION': 'inline label - visible with data', });
lyr_PRIMARIAYSECUNDARIA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});