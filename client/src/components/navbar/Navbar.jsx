import 'bootstrap/dist/css/bootstrap.css';
import { Button, Navbar,Nav,Container,Form,FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const TopBar =()=>
{

    return(

      <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand as={Link} to='/'>Course</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to ='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
        <Nav.Link as={Link} to='/Register'>Register</Nav.Link>
        <Nav.Link  disabled>Logout</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
}
export default TopBar