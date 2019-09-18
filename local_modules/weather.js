const request = require("request");
const { promisify } = require("util");

const promisifiedRequest = promisify(request);

// request({ url: apiCall }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log(data.currently);
// });
const getWeather = async locationData => {
  try {
    let data = await promisifiedRequest({
      url: `https://api.darksky.net/forecast/e27129024dff90544bc3b8962ef70c80/${locationData.lng},${locationData.lat}`,
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
