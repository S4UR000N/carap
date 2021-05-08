import React, {useEffect} from "react"
import {autorun} from "mobx"
import {observer} from "mobx-react"
import {useStoreApp} from "./../stores/StoreApp"

export default function GetAllMakesAPI() {
    const storeApp = useStoreApp();
    useEffect(() => {
        autorun(() => {
            storeApp.fetchAllMakes();
        });
    }, []);
};
