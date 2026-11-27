import "./styles.css";
import { Meteorology } from "./meteorology.js";

let meteoData = Meteorology.getMeteorologicalData("Rio de Janeiro");
let usefulMeteorologicalData = null;

meteoData.then((response) => {
  usefulMeteorologicalData = Meteorology.getUsefulMeteorologicalData(response);
  console.log(usefulMeteorologicalData);
});
