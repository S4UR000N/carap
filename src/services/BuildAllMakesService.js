import { React, useEffect } from "react";
import {useObserver} from "mobx-react"
import {useStore} from "./../stores/StoreProvider"
import GetAllMakesAPI from "./../api/GetAllMakesAPI";


function BuildAllMakesService() {
    return (
        <GetAllMakesAPI />
    )
}

export default BuildAllMakesService;
