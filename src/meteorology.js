class Meteorology {
  static async getMeteorologicalData(location) {
    try {
      location = location.toLowerCase();
      let response = await fetch(` 
                                https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&elements=add:sunrise,add:sunset
                            `);
      if (response.ok) {
        let meteorologicalData = await response.json();
        return meteorologicalData;
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.info("this is the end");
    }
  }

  static getUsefulMeteorologicalData(meteorologicalData) {
    const address = meteorologicalData.address;
    const temp = meteorologicalData.currentConditions.temp;
    const tempMax = meteorologicalData.days[0].tempmax;
    const tempMin = meteorologicalData.days[0].tempmin;
    const feelslike = meteorologicalData.currentConditions.feelslike;
    const conditions = meteorologicalData.currentConditions.conditions;
    const humidity = meteorologicalData.currentConditions.humidity;
    const icon = meteorologicalData.currentConditions.icon;
    const windspeed = meteorologicalData.currentConditions.windspeed;
    const pressure = meteorologicalData.currentConditions.pressure;
    const sunrise = meteorologicalData.currentConditions.sunrise;
    const sunset = meteorologicalData.currentConditions.sunset;

    const usefulMeteorologicalData = {
      address,
      temp,
      tempMax,
      tempMin,
      feelslike,
      conditions,
      humidity,
      icon,
      windspeed,
      pressure,
      sunrise,
      sunset,
    };

    return usefulMeteorologicalData;
  }
}

export { Meteorology };
