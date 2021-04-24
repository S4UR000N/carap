// import bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import BuildAllMakesService from "./../services/BuildAllMakesService"

function DisplayAllMakes() {
    return(
        <Container fluid>
            <Row>  {/* <Table striped bordered hover variant="dark"> -- probably good to put table and thead here and get other elements via service */}
                <div>DisplayAllMakes</div> {/* GetAllMakesService AS (Create/Build)AllMakesService */}
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Make ID</th>
                            <th>Make Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BuildAllMakesService />
                    </tbody>
              </Table>
            </Row>
        </Container>
    );
}

export default DisplayAllMakes;
