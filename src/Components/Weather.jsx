import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CardEx({ weatherData }) {
  return (
    <Col xs={6} className="d-flex justify-content-center">
      <Card className=" bg-light bg-gradient w-100">
        <Card.Body className="text-start p-4 d-flex flex-column ">
          <div className="d-flex align-items-center justify-content-center">
            <p className=" fw-bold m-0 h2">{weatherData.name}</p>
          </div>
          <hr className="w-75 m-auto"></hr>
          <div className="d-flex align-items-center flex-column justify-content-evenly">
            <div>
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  weatherData.weather[0].icon +
                  ".png"
                }
                alt="icon"
                width={90}
              />
              <span className="fw-semibold h4 pe-2">
                {" "}
                {weatherData.weather[0].main}
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-thermometer-half"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
              </svg>
              <span className="m-1 fw-semibold h3">
                {parseInt(weatherData.main.temp)} °C
              </span>
            </div>
          </div>
          <div className="d-flex mt-3 justify-content-around ">
            <div>
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-sun-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
                <span className="m-1">
                  {new Date(weatherData.sys.sunrise * 1000)
                    .toLocaleTimeString("en-IN")
                    .slice(0, 4)}
                  am
                </span>
              </div>
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-moon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                </svg>
                <span className="m-1">
                  {new Date(weatherData.sys.sunset * 1000)
                    .toLocaleTimeString("en-IN")
                    .slice(0, 4)}
                  pm
                </span>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <p className="fw-bold m-0"> max:</p>

                <span className="m-1 h5">
                  {parseInt(weatherData.main.temp_max)} °C
                </span>
              </div>
              <div className="d-flex align-items-center">
                <p className="fw-bold m-0"> min:</p>

                <span className="m-1 h5">
                  {parseInt(weatherData.main.temp_min)} °C
                </span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardEx;
