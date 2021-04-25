import { React, useEffect } from "react"
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import GetAllMakesAPI from "./../api/GetAllMakesAPI"
import "./../extensions/ArrayPrototypeChunk"


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
                        <td key={index}>{index+1}</td>
                        <td key={obj.Make_ID}>{obj.Make_ID}</td>
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
                ? <>{store.allMakesBuild}</>
                : <Spinner animation="border" role="status" className="align-items-center">
                      <span className="sr-only">Loading...</span>
                  </Spinner>
            }
        </>
    ));
}

export default BuildAllMakesService;
