import { React, useEffect, useCallback } from "react"
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"
import MakePaginationItem from "./../components/fragments/MakePaginationItem"
import SpinnerComponent from "./../components/fragments/SpinnerComponent"

export default function BuildPaginationItemsService() {
    const store = useStore(); // access mobx store

    /** called after api fetch
     * chunks all makes into smaller chunks for bootstrap pagination to use with table
     */
    useEffect(() => {
        if(!!(store.allMakes)) { // zašto moram imati !!() da bi if radio
            store.setAllMakesChunked(
                arr => {
                    store.setPaginationBuild(arr.map((obj, index) => {
                        return (
                            <MakeRowForMake obj={obj} index={index} key={index} />
                        );
                    })
            );
            createTableRows(store.allMakesChunked[0]);
            // setTimeout(() => { createTableRows(store.allMakesChunked[20]) }, 10000);
        }
    },
    [store.allMakes]
    );

    return useObserver(() => (
        <>
            {
                store.allMakes.Results
                ? <>{store.allMakesTbodyBuild}</>
                : <><tr><td style={{ textAlign: "center" }}><SpinnerComponent /></td></tr></>
            }
        </>
    ));
}
