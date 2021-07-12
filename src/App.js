import SpeechService from "./services/Speech.service";
import {
  Container,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import HorizontalFormIcons from "./views/HorizontalFormIcons";

function App() {
  return (
    <Container fluid>
      <Row className="cented-row">
        <Col
          xl={4}
          lg={4}
          md={8}
          sm={12}
          className="offset-md-2 d-flex justify-content-center offset-xl-4 offset-lg-4"
        >
          <HorizontalFormIcons />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
