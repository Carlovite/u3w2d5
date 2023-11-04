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
              <p className="m-1">T: {weatherData.main.temp} °C</p>
            </div>
            <div>
              <p className="m-1">
                Sunrise:{" "}
                {new Date(weatherData.sys.sunrise * 1000)
                  .toLocaleTimeString("en-IN")
                  .slice(0, 4)}
                am
              </p>
            </div>
            <div>
              <p className="m-1">
                Sunset:{" "}
                {new Date(weatherData.sys.sunset * 1000)
                  .toLocaleTimeString("en-IN")
                  .slice(0, 4)}
                pm
              </p>
            </div>
            <div>
              {" "}
              <p className="m-1">Sky: {weatherData.weather[0].main}</p>
            </div>
            <div>
              <p className="m-1">Humidity: {weatherData.main.humidity} %</p>
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
