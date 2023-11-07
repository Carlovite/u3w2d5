import "./App.css";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import Milan from "./Components/Milan";
import Berlin from "./Components/Berlin";
import Tokyo from "./Components/Tokyo";
import { Col, Container, Row } from "react-bootstrap";
import Tenerife from "./Components/Tenerife";

function App() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="text-center text-white titolo">
          <span>THE WEATHER</span>
        </div>
        <div className="d-flex justify-content-center">
          <div className="today">
            {" "}
            <p className="text-white fs-3">
              Day: {moment().format("dddd")} {moment().format("LL")}
            </p>
          </div>
        </div>
        <Row className=" mt-2 gy-5 gx-5 mb-5">
          <Milan></Milan>
          <Berlin></Berlin>
          <Tokyo></Tokyo>
          <Tenerife></Tenerife>
        </Row>
      </Container>
    </>
  );
}

export default App;
