import React from "react"
import Pagination from 'react-bootstrap/Pagination'

export default function MakePaginationItem(props) {
    return (
        <Pagination.Item
            active={props.active}
            onClick={() => {
                props.handleMobxPaginationCurrentIndex();
                props.handleMobxTableData();
            }}
        >{props.index+1}
        </Pagination.Item>
    );
}
