import React from "react";
import { makeAutoObservable, observable, computed, action,  reaction, when } from "mobx"

/* Store start */
export default class StoreMobxTable {
    constructor(storeApp) {
        this.storeApp = storeApp;
        // this.disposeReaction = reaction(
        //     () => this.storeApp.getAllMakesChunked,
        //     getAllMakesChunked => null
        // );
        // when(
        //     // Once...
        //     () => this.storeApp.getAllMakesChunked,
        //     // ... then.
        //     () => this.disposer()
        // );
        makeAutoObservable(this);
    };

    /* Properties */
    store = {};

    /* Setters */
    set setStore(obj) {this.store = {...this.store, ...obj}};

    /* Getters */
    /* Actions */
    /* Computeds */
    /* Disposer function */
    // disposer() {
    //     this.disposeReaction();
    // }
}
/* Store end */


/* Store helpers */
const StoreContext = React.createContext();

export const StoreMobxTableProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStoreTable = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStoreTable = (Component) => (props) => {
  return <Component {...props} store={useStoreTable()} />;
};
