import React from "react"
import {observer} from 'mobx-react'
import {useStoreTable} from "./../stores/StoreMobxTable"
import Table from 'react-bootstrap/Table'

const TableComponent = observer((props) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                {props.buildThead}
            </thead>
            <tbody>
                <>{props.buildTbody}</>
            </tbody>
        </Table>
    );
});

export default TableComponent;
