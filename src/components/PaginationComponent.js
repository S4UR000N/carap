import React from "react"
import {observer} from 'mobx-react'
import {useStoreTable} from "./../stores/StoreMobxTable"
import {useStorePagination} from "./../stores/StoreMobxPagination"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = observer((props) => {
    const storeTable = useStoreTable();
    const storePagination = useStorePagination();

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Pagination>
                    <Pagination.First
                        onClick={() => {
                            storePagination.setStore = {paginationCurrentPageIndex: 0};
                            storeTable.setAllMakesTableBodyBuild(0);
                        }}
                        disabled={storePagination.getPaginationCanFirst}
                    />
                    <Pagination.Prev
                        onClick={() => {
                            storePagination.setStore = {paginationCurrentPageIndex: storePagination.getPaginationCurrentPageIndex-1};
                            storeTable.setAllMakesTableBodyBuild(storePagination.getPaginationCurrentPageIndex);
                        }}
                        disabled={storePagination.getPaginationCanFirst}
                    />
                        {props.buildPaginationItems}
                    <Pagination.Next
                        onClick={() => {
                            storePagination.setStore = {paginationCurrentPageIndex: storePagination.getPaginationCurrentPageIndex+1};
                            storeTable.setAllMakesTableBodyBuild(storePagination.getPaginationCurrentPageIndex);
                        }}
                        disabled={storePagination.getPaginationCanLast}
                    />
                    <Pagination.Last
                        onClick={() => {
                            storePagination.setStore = {paginationCurrentPageIndex: storePagination.getPaginationPageCount-1};
                            storeTable.setAllMakesTableBodyBuild(storePagination.getPaginationCurrentPageIndex);
                        }}
                        disabled={storePagination.getPaginationCanLast}
                    />
                </Pagination>
            </Row>
        </Container>
    );
});

export default PaginationComponent;
