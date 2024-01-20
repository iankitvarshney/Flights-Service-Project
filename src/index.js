const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

  // BAD CODE ALERT

  // const { Airport, City } = require("./models");

  // const cities = await City.findAll();
  // console.log(cities);

  // const bengaluru = await City.findByPk(4);
  // console.log(bengaluru);

  // const airport = await Airport.create({
  //   name: "Kempegowda Airport",
  //   code: "BLR",
  //   cityId: 4,
  // });
  // console.log(airport);

  // const kmpAirport = await bengaluru.createAirport({
  //   name: "Kempegowda Airport",
  //   code: "BLR",
  // });
  // console.log(kmpAirport);

  // const hblAirport = await bengaluru.createAirport({
  //   name: "Hubballi Airport",
  //   code: "HBL",
  // });
  // console.log(hblAirport);

  // const airportsInBlr = await bengaluru.getAirports();
  // console.log(airportsInBlr);

  // const hblAirport = await Airport.findByPk(8);
  // await bengaluru.removeAirport(hblAirport);

  /**
   * The above two lines will throw an error.
   * removeAirport() -> Un-associate one or several target rows.
   * removeAirport() trying to un-associate airport from city.
   * And trying to update cityId inside airport as null.
   * But we have set a constraint on cityId to be "not null" inside Airport model and also inside database using migrations.
   */

  // await City.destroy({
  //   where: {
  //     id: 4,
  //   },
  // });

  /**
   * The above code will destroy the given city and its associated airports.
   */
});
