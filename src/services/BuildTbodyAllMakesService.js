import React from "react"
import {observer} from "mobx-react"
import {useStoreTable} from "./../stores/StoreMobxTable";
import SpinnerComponent from "./../components/fragments/SpinnerComponent"

const BuildTbodyAllMakesService = observer(() => {
    const storeTable = useStoreTable();

    return (
        storeTable.storeApp.store.allMakesChunked
        ? storeTable.getAllMakesTableBodyBuild
        : <><tr><td style={{ textAlign: "center" }}><SpinnerComponent /></td></tr></>
    );
});

export default BuildTbodyAllMakesService;
