import React from "react"
import {observer} from 'mobx-react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TableComponent from "./TableComponent"
import PaginationComponent from "./PaginationComponent"
import GetAllMakesAPI from "./../api/GetAllMakesAPI"
import BuildTheadAllMakesService from "./../services/BuildTheadAllMakesService"
import BuildTbodyAllMakesService from "./../services/BuildTbodyAllMakesService"
import BuildPaginationItemsService from "./../services/BuildPaginationItemsService"

const DisplayAllMakes = observer(() => {
    GetAllMakesAPI();

    return(
        <Container fluid>
            <Row>  {/* <Table striped bordered hover variant="dark"> -- probably good to put table and thead here and get other elements via service */}
                <TableComponent buildThead={<BuildTheadAllMakesService/>} buildTbody={<BuildTbodyAllMakesService/>} />
                <PaginationComponent buildPaginationItems={<BuildPaginationItemsService/>} />
            </Row>
        </Container>
    );
});

export default DisplayAllMakes;
