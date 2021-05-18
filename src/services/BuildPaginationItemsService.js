import React from "react"
import {observer} from "mobx-react"
import {useStorePagination} from "./../stores/StoreMobxPagination"
import MakePaginationItem from "./../components/fragments/MakePaginationItem"
import SpinnerComponent from "./../components/fragments/SpinnerComponent"

const BuildPaginationItemsService = observer(() => {
    const storePagination = useStorePagination();

    return (
        <>
            {
                storePagination.storeApp.store.allMakesChunked
                ? storePagination.paginationBuild
                : <SpinnerComponent/>
            }
        </>
    );
});

export default BuildPaginationItemsService;
