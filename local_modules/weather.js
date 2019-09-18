const request = require("request");
const { promisify } = require("util");

const promisifiedRequest = promisify(request);

const getWeather = async locationData => {
  try {
    let data = await promisifiedRequest({
      url: `https://api.darksky.net/forecast/YOUR_API_KEY/${locationData.lng},${locationData.lat}`,
      json: true
    });

    return data.body.currently;
  } catch {
    console.log("oops an error has occured");
  }
};

module.exports = {
  getWeather
};
