import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import logo from './../assets/images/logo.jpg';
import GetAllMakesAPI from "./../api/GetAllMakesAPI"

export default function Header() {
    return(
        <Container>
            <Row className="justify-content-center align-items-center">
                {/* 1. Logo */}
                <Col className="col-1"><Row className="justify-content-center align-items-center"><img id="logo" src={logo} alt="car logo"/><h1 className="App-header text-dark mr-2">carap</h1></Row></Col>

                {/* 2. Get All Makes Option */}
                <Col className="col-2 align-items-center">
                    <Row className="justify-content-center"><Button>Get All Makes</Button></Row>
                </Col>

                {/* 3. Get All Models Option */}
                <Col className="col-4 border-right">
                    <Row className="justify-content-center">Get All Models for Make</Row>
                    <Row className="justify-content-center">
                        <input className="w-50" placeholder="enter Make(Abbreviation)" />
                        <Button className="btn-sm">Get</Button>
                    </Row>
                </Col>

                {/* 4. display Sort/Filter options for models, after models have been fetched */}
                <Col id="sort-filter-models" className="col-3 bg-dark"><svg className="styleSVG"><line x1="0" y1="100%" x2="100%" y2="0" className="styleLine"/></svg></Col>
            </Row>
        </Container>
    );
}
