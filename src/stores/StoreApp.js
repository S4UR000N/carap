import React from "react";
import { makeAutoObservable, observable, computed, action } from "mobx"

/* Store start */
export default class StoreApp {
    constructor() {makeAutoObservable(this, {})};

    /* Properties */
    store = {
        allMakes: false,
        allMakesChunked: false,
        chunkLength: 5
    };

    /* Setters */
    set setStore(obj) {this.store = {...this.store, ...obj}};

    /* Getters */
    get allMakesChunked() {return this.store.allMakesChunked};

    /* Actions */
    toggle() {this.finished = !this.finished};

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
export const useStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStore()} />;
};
