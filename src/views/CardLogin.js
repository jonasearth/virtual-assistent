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
import { useState } from "react";

const CardLogin = () => {

  const [email,SetEmail] =useState('')

 const  submitForm = (e) =>{

   e.preventDefault();

   SetEmail(document.getElementById("EmailIcon").value);
   console.log("email");

  
  }
  return (
    <Card className='box'>
      <CardHeader>
        <CardTitle tag="h4">{email}</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup row>
           
            <Col sm="12">
              <InputGroup className="pb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Mail size={24} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="email"
                  name="Email"
                  id="EmailIcons"
                  placeholder="Email"
                  className="pr-2"
                  value={email}
                  onInput={(e)=>SetEmail(e.target.value)}
                />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
           
            <Col sm="12">
              <InputGroup className="pb-2">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Lock size={24} />
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

          <FormGroup className="mb-1" row>
            <Col className="d-flex  justify-content-center" md={{ size: 6, offset: 3 }}>
              <Button className="mr-1" color="primary" type="submit" value={email} onClick={e =>submitForm(e.target.value)}>
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};
export default CardLogin;
