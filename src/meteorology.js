class Meteorology {
    static async getMeteorologicalData(location) {
        try {
            location = location.toLowerCase();
            let response = await fetch(` 
                                https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric
                            `);
            if(response.ok) {
                let meteorologicalData = await response.json();
                console.log(meteorologicalData)
                return meteorologicalData;
            }
        }
        catch(error) {
            console.error(error);
        }
        finally{
            console.info("this is the end");
        }
    }
}

export { Meteorology }