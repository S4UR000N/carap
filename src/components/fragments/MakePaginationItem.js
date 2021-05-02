import React from "react"
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

export default function MakePaginationItem(props) {
    return (
        <Pagination.Item>{props.index+1}</Pagination.Item>
    );
}
