import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
const CardComponent = () => {
  return (
    <Card className="login">
      <CardBody>
        <CardTitle tag="h5">login</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Liz
        </CardSubtitle>
        <CardText>
         <form>
         <label for='email' name='email'>E-mail</label>
         <input type="email" name="email" id="exampleEmail" placeholder="Email" /><br></br>
         <label for="examplePassword" name='password'>Password</label>
        <input type="password" name="password" id="examplePassword" placeholder="Password" />
         </form>
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};
export default CardComponent;
