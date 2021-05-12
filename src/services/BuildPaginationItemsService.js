import React from "react"
import {observer} from "mobx-react"
import {useStoreApp} from "./../stores/StoreApp";
import {useStorePagination} from "./../stores/StoreMobxPagination";
import GetAllMakesAPI from "./../api/GetAllMakesAPI"
import MakePaginationItem from "./../components/fragments/MakePaginationItem"
import SpinnerComponent from "./../components/fragments/SpinnerComponent"
import MakeRowForMake from "./../components/fragments/MakeRowForMake"

export const BuildPaginationItemsService = observer(() => {
    const storePagination = useStorePagination();
    GetAllMakesAPI();

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
