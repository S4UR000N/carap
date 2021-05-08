import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Pagination from 'react-bootstrap/Pagination'

export default function PaginationComponent(props) {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-center">
                    <Pagination size="lg">
                        <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Row>
            </Container>

            <Container fluid>
                <Row className="justify-content-center">
                    <Pagination size="sm" className="pagination-items justify-content-center flex-wrap">
                        {props.buildPaginationItems}
                    </Pagination>
                </Row>
            </Container>
        </>
    );
}
