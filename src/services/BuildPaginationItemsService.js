import memoize from "fast-memoize";
import { React, useEffect, useCallback } from "react"
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"
import MakePaginationItem from "./../components/fragments/MakePaginationItem"
import SpinnerComponent from "./../components/fragments/SpinnerComponent"
import MakeRowForMake from "./../components/fragments/MakeRowForMake"

export default function BuildPaginationItemsService() {
    const store = useStore(); // access mobx store

    // callback function used in pagination to display correct table data on page change
    function createTableRows(index) {
        store.setPaginationCurrentPageIndex(index);
        store.setallMakesTbodyBuild(store.allMakesChunked[index].map((obj, index) => {
            return (
                <MakeRowForMake obj={obj} index={index} key={index} />
            );
        }));
    }
    const memoizedCallback = useCallback(
       memoize((index) => () => createTableRows(index)),
       []
     );
    /** called after api fetch
     * chunks all makes into smaller chunks for bootstrap pagination to use with table
     */
    useEffect(() => {
        if(!!(store.allMakes)) {
            // set pagination data
            store.setPaginationPageCount(store.allMakesChunked.length);
            store.setPaginationFirstPageIndex(store.allMakesChunked.indexOf(store.getAllMakesChunkedFirst()));
            store.setPaginationCurrentPageIndex(store.pagination.paginationFirstPageIndex);
            store.setPaginationLastPageIndex(store.allMakesChunked.indexOf(store.getAllMakesChunkedLast()));

            // create pages
            store.setPaginationBuild(store.allMakesChunked.map((obj, index) => {
                console.log("huh?");

                return (
                    <MakePaginationItem obj={obj} index={index} key={index} handler={memoizedCallback} />
                );
            }));
        }
    },
    [store.allMakes]
    );

    return useObserver(() => (
        <>
            {
                store.allMakes.Results
                ? <>{store.pagination.paginationBuild}</>
                : <SpinnerComponent />
            }
        </>
    ));
}
