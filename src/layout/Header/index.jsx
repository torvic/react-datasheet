import logo from '../../logo.svg'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand='lg'>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt='logo' width='40px' height='40px' />
          logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto align-items-lg-center'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className='d-flex'>
              <Button variant='light' className='mt-2 mb-2'>Iniciar Sesión</Button>
              <Button variant='light' className='m-2'>
                Registrarse
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
