const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (address) {
  geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecaseData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecaseData);
    });
  });
} else {
  console.log("!please provide an address");
}
