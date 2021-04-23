// import bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from './../assets/images/logo.jpg';


function Header() {
    return(
        <Container>
            <Row className="justify-content-center align-items-center mt-2">
                <h1 className="App-header text-dark mr-2">carap</h1>
                <img id="logo" src={logo} alt="car logo"/>
            </Row>
        </Container>
    );
}

export default Header;
