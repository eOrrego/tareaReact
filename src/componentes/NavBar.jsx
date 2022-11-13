import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

function NavBar() {

  const isLogged = JSON.parse(localStorage.getItem("userLogged"));


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand id="Brand">
          <h1>
            RICK AND MORTY
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            {isLogged &&
            <Stack direction="horizontal" gap={2}>
              <Form.Control className="ms-auto" placeholder="Personaje..." />
              <Button variant="outline-warning">Buscar</Button>
              <Button variant="outline-danger">Reset</Button>
            </Stack>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar