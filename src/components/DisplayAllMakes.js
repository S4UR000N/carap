// import bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function DisplayAllMakes() {
    return(
        <Container fluid>
            <Row>  {/* <Table striped bordered hover variant="dark"> -- probably good to put table and thead here and get other elements via service */}
                <div>DisplayAllMakes</div> {/* GetAllMakesService AS (Create/Build)AllMakesService */}
            </Row>
        </Container>
    );
}

export default DisplayAllMakes;
