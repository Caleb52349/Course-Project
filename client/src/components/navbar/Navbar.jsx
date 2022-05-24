import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { Button, Navbar,Nav,Container,Form,FormControl} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import {isAuthenticated,logout} from '../../helpers/auth';

const TopBar =()=>
{
  const[user=isAuthenticated(),setUser]=useState({})
  useEffect(()=>{
    setInterval(()=>{
            setUser(isAuthenticated());
    },[])
  },5000)
const navigate = useNavigate();

const handleLogout = e=>{
  logout(()=>{
    navigate('/Login')
  });
}





if(!isAuthenticated()){
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

if(user.role ===0){
  return(
    <div>
      <Navbar bg="light" expand="lg">
<Container fluid>
  <Navbar.Brand >Course</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >

      <Nav.Link as={Link} to ='/user/dashboard'>Dashbaord</Nav.Link>
      <Nav.Link as={Link} to ='/user/items'>Items</Nav.Link>
      <Nav.Link as={Link} to ='/user/profile'>Profile</Nav.Link>
      <Nav.Link as ={Link} to ='/Login'onClick={handleLogout}>Logout</Nav.Link>
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

if(user.role ===1){
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

      <Nav.Link as={Link} to ='/admin/dashboard'>Home</Nav.Link>
      <Nav.Link as={Link} to ='/admin/items'>Items</Nav.Link>
      <Nav.Link as={Link} to ='/admin/profile'>Profile</Nav.Link>
      <Nav.Link as ={Link} to ='/Login'onClick={handleLogout}>Logout</Nav.Link>
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
}


export default (TopBar)