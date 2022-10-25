import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigasi() {
    return (
        <Navbar expand="lg" class="">
            <Container>
                <Navbar.Brand href="#home" className='text-light'>RPL Film</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
                        <Nav.Link href="#trending" className='text-light'>Trending</Nav.Link>
                        <Nav.Link href="#superhero" className='text-light'>SuperHero</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigasi;