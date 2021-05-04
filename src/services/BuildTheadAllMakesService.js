import { React, useEffect, useCallback } from "react"
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"
import SpinnerComponent from "./../components/fragments/SpinnerComponent"
import TheadForAllMakes from "./../components/fragments/TheadForAllMakes"

export default function BuildTheadAllMakesService() {
    const store = useStore(); // access mobx store

    /** called after api fetch
     * renders table head made from fetched data
     */
    useEffect(() => {
        if(!!(store.allMakes)) {
            store.setallMakesTheadBuild(<TheadForAllMakes />);
        }
    },
    [store.allMakes]
    );

    return useObserver(() => (
        <>
            {
                store.allMakes.Results
                ? <>{store.allMakesTheadBuild}</>
                : <><tr><td style={{ textAlign: "center" }}><SpinnerComponent /></td></tr></>
            }
        </>
    ));
}
