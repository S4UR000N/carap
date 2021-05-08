import React from "react"
import {observer} from "mobx-react"
import {useStoreApp} from "./../stores/StoreApp";
import {useStorePagination} from "./../stores/StoreMobxPagination";
import GetAllMakesAPI from "./../api/GetAllMakesAPI"
import MakePaginationItem from "./../components/fragments/MakePaginationItem"
import SpinnerComponent from "./../components/fragments/SpinnerComponent"
import MakeRowForMake from "./../components/fragments/MakeRowForMake"

export const BuildPaginationItemsService = observer(() => {
    const storeApp = useStoreApp();
    const storePagination = useStorePagination();
    GetAllMakesAPI();
    return (
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    );
});
