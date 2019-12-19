const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descr: 'Direccion de la ciudad para informar del clima',
        demand: true
    }
}).argv;

const getInfo = async(dir) => {

    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${dir}.`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(e => console.log(e))