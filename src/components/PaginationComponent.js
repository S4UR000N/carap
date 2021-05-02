import React from "react"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

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
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>
                        <Pagination.Item>{20}</Pagination.Item>
                    </Pagination>
                </Row>
            </Container>
        </>
    );
}
