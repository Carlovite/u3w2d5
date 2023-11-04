import "./App.css";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import Milan from "./Components/Milan";
import Berlin from "./Components/Berlin";
import London from "./Components/London";
import { Col, Container, Row } from "react-bootstrap";
import Tenerife from "./Components/Tenerife";

function App() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-center text-white">
          <span>THE WEATHER</span>
        </div>
        <div className="d-flex justify-content-center">
          <div>
            {" "}
            <p className="text-white">
              Day: {moment().format("dddd")} {moment().format("LL")}
            </p>
          </div>
        </div>
        <Row className="mt-3 gy-3 gx-5">
          <Milan></Milan>
          <Berlin></Berlin>
          <London></London>
          <Tenerife></Tenerife>
        </Row>
      </Container>
    </>
  );
}

export default App;
