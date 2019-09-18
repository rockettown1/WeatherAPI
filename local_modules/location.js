const request = require("request");
const { promisify } = require("util");

const token =
  "pk.eyJ1Ijoicm9ja2V0dG93biIsImEiOiJjanQ2ZmEyZnowZjloNDRtd2VtemR3dzZmIn0.JLgxwoeoCASsZ8WDYI3-5A";

const promisifiedRequest = promisify(request);

const getLocation = async place => {
  try {
    let data = await promisifiedRequest({
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${token}`,
      json: true
    });
    return {
      name: data.body.features[0].place_name,
      lat: data.body.features[0].center[0],
      lng: data.body.features[0].center[1]
    };
  } catch (error) {
    console.log("oh no");
  }
};

module.exports = {
  getLocation
};
