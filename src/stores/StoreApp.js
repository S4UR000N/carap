import React from "react";
import { makeAutoObservable, observable, computed, action, flow } from "mobx"
import "./../extensions/ArrayPrototypeChunk"


/* Store start */
export default class StoreApp {
    constructor() {
        makeAutoObservable(this,
            {
                setAllMakesChunked: action,
                fetchAllMakes: flow
            },
            { autoBind: true }
        );
    };

    /* Properties */
    store = {
        allMakes: false,
        allMakesChunked: false,
        chunkLength: 5,
        error: false,
    };

    /* Setters */
    set setStore(obj) {this.store = {...this.store, ...obj}};

    /* Getters */
    get allMakesChunked() {return this.store.allMakesChunked};

    /* Actions */
    /* Computeds */

    /* API Requests */
    *fetchAllMakes() {
        try {
            const allMakesFetch = yield fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json");
            const allMakesData = yield allMakesFetch.json();
            const allMakes = yield allMakesData.Results;
            this.setStore = {allMakes: allMakes};
        } catch (error) {throw error};
    };
}
/* Store end */


/* Store helpers */
const StoreContext = React.createContext();

export const StoreAppProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStoreApp = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStoreApp = (Component) => (props) => {
  return <Component {...props} store={useStoreApp()} />;
};
