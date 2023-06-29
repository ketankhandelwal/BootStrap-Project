import logo from "./logo.svg";
import "./App.css";
import { Button, Alert, Breadcrumb, Card, Form , Row, Col, Container} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          
          <Form>
          <Row>
          
            <Col>
            <Form.Group className="mb-4">
       
          
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Email"></Form.Control>
            <Form.Text
              style={{
                color: "#FFFFFF",
              }}
            >
              We are secure as FB!
            </Form.Text>
            </Form.Group>
            </Col>
            <Col>
            <Form.Group>

            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Password"></Form.Control>
            </Form.Group>
            </Col>
          
          </Row>
        </Form>
      
       
      

        <Card>
          <Card.Img src="https://vuku-dev.s3.amazonaws.com/raymond-lee-C_cPa1FbUtM-unsplash.jpg" />
          <Card.Body>
            <Card.Title>Hello World</Card.Title>
            <Card.Text>This is my 1st react bootstrap project</Card.Text>
            <Button>Hit me Hard Ketan!</Button>
          </Card.Body>
        </Card>
        <Breadcrumb  color="#FFFFFF">
          <Breadcrumb.Item>React JS</Breadcrumb.Item>
          <Breadcrumb.Item>Node Js</Breadcrumb.Item>
          <Breadcrumb.Item >AWS</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">This is a warning </Alert>
        <Button>This is a test button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
