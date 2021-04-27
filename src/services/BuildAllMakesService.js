import { React, useEffect } from "react"
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"
import MakeRowForMake from "./../components/MakeRowForMake"
import SpinnerComponent from "./../components/SpinnerComponent"
import GetAllMakesAPI from "./../api/GetAllMakesAPI"
import "./../extensions/ArrayPrototypeChunk"

function BuildAllMakesService() {
    const store = useStore();
    GetAllMakesAPI();

    useEffect(() => {
        console.log("!if", store.allMakes);
        console.log(!!(store.allMakes));
        if(!!(store.allMakes)) { // zašto moram imati !!() da bi if radio
            console.log(store.allMakes.Count);
            console.log(store.getChunkCount(10))
            store.setAllMakesBuild(store.allMakes.Results.map((obj, index) => {
                return (
                    <MakeRowForMake obj={obj} index={index} key={index} />
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
                ? <>{store.allMakesBuild}</>
                : <><tr><td></td><td style={{ textAlign: "right" }}><SpinnerComponent /></td></tr></>
            }
        </>
    ));
}

export default BuildAllMakesService;
