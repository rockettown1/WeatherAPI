const { getLocation } = require("./location.js");
const { getWeather } = require("./weather.js");

const main = async place => {
  try {
    const locationData = await getLocation(place);
    const weatherData = await getWeather(locationData);

    return {
      place: locationData.name,
      temp: weatherData.temperature,
      summary: weatherData.summary
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  main
};
