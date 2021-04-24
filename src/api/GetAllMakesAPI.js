import { React, useEffect } from "react";
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"

function GetAllMakesAPI() {
    const store = useStore();
    useEffect(() => {
        if(!store.allMakes) {
            (async () => {
                try {
                    const res = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json");
                    const data = await res.json();
                    await store.setAllMakes(data);
                    // await console.log(store.allMakes);
                }
                catch {
                    console.log("bzzz 🐝");
                }
            })();
        }
    },
    [store]
    );

    return null;
}

export default GetAllMakesAPI;
