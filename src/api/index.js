import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) => {
  let changedUrl = url;
  if (country) {
    changedUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changedUrl);

    return { confirmed, deaths, recovered, lastUpdate };

    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  // const url = "https://covid19.mathdro.id/api";

  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  // const url = "https://covid19.mathdro.id/api";/

  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
