import React from "react"
import {observer} from "mobx-react"
import {useStoreTable} from "./../stores/StoreMobxTable";

const BuildTbodyAllMakesService = observer(() => {
    const storeTable = useStoreTable();

    return null;
});

export default BuildTbodyAllMakesService;

// : <><tr><td style={{ textAlign: "center" }}><SpinnerComponent /></td></tr></>
