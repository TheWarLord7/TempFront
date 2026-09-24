import * as maplibregl from 'https://unpkg.com/maplibre-gl@6.11.1/dist/maplibre-gl.mjs';

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://tiles.openfreemap.org/styles/bright',
    center: [78.85975369872553, 13.031991985723119],
    zoom: 8
});

