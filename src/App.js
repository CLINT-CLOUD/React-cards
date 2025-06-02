import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Navbar, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar className="navbar-custom" expand="lg">
          <Container>
            <Navbar.Brand href="#">Clint React App</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-5">
          <h1>Welcome to a Colorful World of React</h1>

          <Row className="mt-4 justify-content-center g-4">
            <Col md={4}>
              <Card className="card-custom">
                <Card.Body>
                  <Card.Title>✨ Magic Card</Card.Title>
                  <Card.Text>
                    This card is filled with vibrant energy and magic.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="card-custom">
                <Card.Body>
                  <Card.Title>🌈 Rainbow Card</Card.Title>
                  <Card.Text>
                    Enjoy a splash of rainbow color and joyful design.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="card-custom">
                <Card.Body>
                  <Card.Title>💎 Crystal Card</Card.Title>
                  <Card.Text>
                    Sleek, shiny, and stunning — just like a gem.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
