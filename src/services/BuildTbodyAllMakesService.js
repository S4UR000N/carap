import { React, useEffect, useCallback } from "react"
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProviderForTable"
import MakeRowForMake from "./../components/fragments/MakeRowForMake"
import SpinnerComponent from "./../components/fragments/SpinnerComponent"
import GetAllMakesAPI from "./../api/GetAllMakesAPI"
import "./../extensions/ArrayPrototypeChunk"

export default function BuildTbodyAllMakesService() {
    const store = useStore(); // access mobx store
    GetAllMakesAPI(); // fetch api data

    // callback function used in pagination to display correct table data on page change
    const createTableRows = useCallback(arr => {
        store.setallMakesTbodyBuild(arr.map((obj, index) => {
            return (
                <MakeRowForMake obj={obj} index={index} key={index} />
            );
        }));
    },
    [store.paginationCurrentPageIndex]
    );

    /** called after api fetch
     * chunks all makes into smaller chunks for bootstrap pagination to use with table
     */
    useEffect(() => {
        if(!!(store.allMakes)) { // zašto moram imati !!() da bi if radio
            store.setAllMakesChunked(store.allMakes.Results.chunk(store.chunkLength));
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
