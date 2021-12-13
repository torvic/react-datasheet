import logo from '../../logo.svg'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand='lg'>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt='logo' width='40px' height='40px' />
          Shopping Cart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto align-items-lg-center'>
            <Nav.Link>
              <Link to='/' className='btn btn-secondary'>
                Store
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/cart'>
                <button
                  type='button'
                  className='btn btn-secondary position-relative'
                >
                  Cart
                  <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                    99+
                  </span>
                </button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
