import { React, useEffect } from "react";
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"

function GetAllMakesAPI() {
    const store = useStore();
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json");
                const data = await res.json();
                await store.setAllMakes(data);
                await console.log(store.allMakes);
            }
            catch {
                console.log("bzzz 🐝");
            }
        })();
    },
    []
    );

    return useObserver(() => (
        <div>GetAllMakes Ran: {store.allMakes.Results ? store.allMakes.Results[0].Make_Name : "loading"}</div>
    ));
}

export default GetAllMakesAPI;
