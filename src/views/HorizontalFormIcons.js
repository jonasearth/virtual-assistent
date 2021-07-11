import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  Label,
  CustomInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { User, Mail, Smartphone, Lock } from "react-feather";

const HorizontalFormIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Horizontal Form with Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup row>
            <Label sm="3" for="EmailIcons">
              Email
            </Label>
            <Col sm="9">
              <InputGroup className="input-group-merge">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Mail size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="email"
                  name="Email"
                  id="EmailIcons"
                  placeholder="Email"
                />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm="3" for="passwordIcons">
              Password
            </Label>
            <Col sm="9">
              <InputGroup className="input-group-merge">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Lock size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="password"
                  id="passwordIcons"
                  placeholder="Password"
                />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup className="mb-0" row>
            <Col className="d-flex" md={{ size: 9, offset: 3 }}>
              <Button className="mr-1" color="primary" type="submit">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
export default HorizontalFormIcons;
