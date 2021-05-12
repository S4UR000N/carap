import React from "react"
import Pagination from 'react-bootstrap/Pagination'

export default function MakePaginationItem(props) {
    return (
        <Pagination.Item>{props.index+1}</Pagination.Item>
    );
}
