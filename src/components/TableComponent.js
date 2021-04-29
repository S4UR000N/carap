import React from "react"
import Table from 'react-bootstrap/Table'

export default function TableComponent(props) {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                {props.buildThead()}
            </thead>
            <tbody>
                <>{props.buildTbody()}</>
            </tbody>
        </Table>
    );
}
