import { React, useEffect } from "react";
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"
import GetAllMakesAPI from "./../api/GetAllMakesAPI";
import parse from "html-react-parser"

function BuildAllMakesService() {
    const store = useStore();

    GetAllMakesAPI();

    useEffect(() => {
        console.log("!if", store.allMakes);
        console.log(!!(store.allMakes));
        if(!!(store.allMakes)) { // zašto moram imati !!() da bi if radio
            store.setAllMakesBuild(store.allMakes.Results.map((obj, index) => {
                return (

                    <tr key={obj.Make_Name}>
                        <td key={obj.Make_Name}>{index}</td>
                        <td key={obj.Make_Name}>{obj.Make_ID}</td>
                        <td key={obj.Make_Name}>{obj.Make_Name}</td>
                    </tr>

                );
            }));
        }
    },
    [store.allMakes]
);


    return useObserver(() => (
        <>
            {
                store.allMakes.Results
                ?
                    <>
                        {store.allMakesBuild}
                    </>
                    :
                    <tr>
                        <td>
                            {
                                store
                                ?
                                store.allMakes.Results
                                    ?
                                    store.allMakesBuild
                                    :
                                    "loading"
                                :
                                "this does nothing but code breaks without it"
                            }
                        </td>
                    </tr>
            }
        </>
    ));
}

export default BuildAllMakesService;
