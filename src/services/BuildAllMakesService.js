import { React, useEffect } from "react";
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"
import GetAllMakesAPI from "./../api/GetAllMakesAPI";


function BuildAllMakesService() {
    const store = useStore();
    /* Pitanje:
        kada stavim GetAllMakesAPI van return-a jsx u return-u ne primjeti da je store updated i ne prikaže podatke.
        zašto GetAllMakesAPI mora biti unutar return-a da bi se ispisali rezultati od API-a?
        ako je mobx store dostupan svima unutar StoreProvider-a?

    /* Cilj:
        pokušavam logiku odvojiti od html-a
        ovdje će se kreirati <Table> elementi,
        <Table> će biti u DisplayAllMakes i on će uzeti podatke za <Table> od ovog service-a i sve će renderati u App.js
        je li to dobar plan?
    */
        GetAllMakesAPI();

    return useObserver(() => (
        <>
            <div>GetAllMakes Ran: {store.allMakes.Results ? store.allMakes.Results[0].Make_Name : "loading"}</div>
        </>
    ));
}

export default BuildAllMakesService;
