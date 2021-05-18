import { React, useEffect, useCallback } from "react"
import {useObserver} from "mobx-react"
import {useStoreApp} from "./../stores/StoreApp";
import {useStoreTable} from "./../stores/StoreMobxTable";
import GetAllMakesAPI from "./../api/GetAllMakesAPI"
import MakeRowForMake from "./../components/fragments/MakeRowForMake"
import SpinnerComponent from "./../components/fragments/SpinnerComponent"
import "./../extensions/ArrayPrototypeChunk"

export default function BuildTbodyAllMakesService() {
    const useStoreApp = useStoreApp();
    const useStoreTable = useStoreTable();

    console.log(useStoreTable);

    return useObserver(() => (
        <>
            {
                useStoreTable.storeApp.store.allMakesChunked
                ? <>{useStoreApp.allMakesTbodyBuild}</>
                : <><tr><td style={{ textAlign: "center" }}><SpinnerComponent /></td></tr></>
            }
        </>
    ));
}
