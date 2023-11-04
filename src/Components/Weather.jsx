import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CardEx({ weatherData }) {
  return (
    <Col xs={6} md={3} className="d-flex justify-content-center ">
      <Card className=" bg-light bg-gradient">
        <Card.Body className="text-start">
          <div className="d-flex align-items-center justify-content-center">
            <Card.Title className=" fw-bold">{weatherData.name}</Card.Title>
            <img
              src={
                "http://openweathermap.org/img/w/" +
                weatherData.weather[0].icon +
                ".png"
              }
              alt="icon"
            />
          </div>
          <hr></hr>
          <div className="d-flex flex-column ">
            <div>
              <p>Temprature: {weatherData.main.temp}</p>
            </div>
            <div>
              <p>
                Sunrise:{" "}
                {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                  "en-IN"
                )}
              </p>
            </div>
            <div>
              <p>
                Sunset:{" "}
                {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                  "en-IN"
                )}
              </p>
            </div>
            <div>
              {" "}
              <p>Description: {weatherData.weather[0].main}</p>
            </div>
            <div>
              <p>Humidity: {weatherData.main.humidity} %</p>
            </div>
            {/* <div>
              {" "}
              <p>Day: {moment().format("dddd")}</p>
            </div>
            <div>
              {" "}
              <p>Date: {moment().format("LL")}</p>
            </div> */}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardEx;
