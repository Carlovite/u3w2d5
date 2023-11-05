import Weather from "./Weather";
import React, { useEffect, useState } from "react";
function Tokyo() {
  const [data, setData] = useState([]);

  const [isError, setIsError] = useState(false);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${35.652832}&lon=${139.839478}&units=metric&APPID=cbeb546c45498dd09cc8af010de299d3`
    )
      .then((response) => {
        if (response.ok) {
          // fetch finita bene
          return response.json();
        } else {
          // fetch finita male
          throw new Error("Errore nel recupero prenotazioni!");
        }
      })
      .then((data) => {
        console.log("fetch completata, DATI RECUPERATI", data);

        setData(data);
      })
      .catch((error) => {
        console.log("ERROR!", error);

        setIsError(true);
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Tokyo;
