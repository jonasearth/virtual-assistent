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
import CardComponent from "./views/CardComponent";

function App() {
  return (
    <Container fluid>
      <Row className="cented-row">
        <Col xl={4} lg={4} md={8} sm={12}className="offset-md-2 offset-xl-4 offset-lg-4">
          <CardComponent></CardComponent>
        </Col>
       
      </Row>
    </Container>
  );
}

export default App;
