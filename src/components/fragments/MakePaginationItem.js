import React from "react"
import Pagination from 'react-bootstrap/Pagination'

export default function MakePaginationItem(props) {
    return (
        <Pagination.Item onClick={() => props.handler(props.index)}>{props.index+1}</Pagination.Item>
    );
}
