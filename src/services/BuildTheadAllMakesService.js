import React from "react"
import {observer} from "mobx-react"
import {useStoreTable} from "./../stores/StoreMobxTable";
import TheadForAllMakes from "./../components/fragments/TheadForAllMakes"
import SpinnerComponent from "./../components/fragments/SpinnerComponent"

const BuildTheadAllMakesService = observer(() => {
    const storeTable = useStoreTable();

    return (
        storeTable.storeApp.store.allMakesChunked
        ? <TheadForAllMakes/>
        : <><tr><td style={{ textAlign: "center" }}><SpinnerComponent /></td></tr></>
    );
});

export default BuildTheadAllMakesService
