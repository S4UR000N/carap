import {useEffect} from "react"
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProviderForTable"

function GetAllMakesAPI() {
    const store = useStore();
    useEffect(() => {
        if(!store.allMakes) {
            (async () => {
                try {
                    // const res = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json");
                    // const data = await res.json();
                    // await store.setAllMakes(data);
                    // FAKE DATA
                    await store.setAllMakes(
                        {
                            Results: [
                                {"Make_ID": 400, "Make_Name": "BMW"},
                                {"Make_ID": 401, "Make_Name": "Nissan"},
                                {"Make_ID": 402, "Make_Name": "Audi"},
                                {"Make_ID": 403, "Make_Name": "Fiat"},
                                {"Make_ID": 404, "Make_Name": "Wolf"},
                                {"Make_ID": 405, "Make_Name": "Ekko"},
                                {"Make_ID": 406, "Make_Name": "Jokes"},
                                {"Make_ID": 407, "Make_Name": "On"},
                                {"Make_ID": 408, "Make_Name": "You"},
                                {"Make_ID": 409, "Make_Name": "Jokes"},
                                {"Make_ID": 410, "Make_Name": "On"},
                                {"Make_ID": 411, "Make_Name": "Me"},
                            ]
                        }
                    );
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
