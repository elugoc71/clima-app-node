const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=784f11a7d4ceb0c2dc7d2d66f55b50ea&units=metric`);

    return resp.data.main.temp;



}

module.exports = {

    getClima: getClima
}