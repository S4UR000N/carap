// import {useStore} from "./../stores/StoreProvider"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TableComponent from "./TableComponent"
import PaginationComponent from "./PaginationComponent"
import BuildTheadAllMakesService from "./../services/BuildTheadAllMakesService"
import BuildTbodyAllMakesService from "./../services/BuildTbodyAllMakesService"

export default function DisplayAllMakes() {
    return(
        <Container fluid>
            <Row>  {/* <Table striped bordered hover variant="dark"> -- probably good to put table and thead here and get other elements via service */}
                <TableComponent buildThead={BuildTheadAllMakesService} buildTbody={BuildTbodyAllMakesService} />
                <PaginationComponent />
            </Row>
        </Container>
    );
}
