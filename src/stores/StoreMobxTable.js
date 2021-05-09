import React from "react";
import { makeAutoObservable, observable, computed, action } from "mobx"

/* Store start */
export default class StoreMobxTable {
    constructor() {makeAutoObservable(this)};

    /* Properties */
    store = {
        allMakesTheadBuild: false,
        allMakesTbodyBuild: false,
    };

    /* Setters */
    set setStore(obj) {this.store = {...this.store, ...obj}};

    /* Getters */
    get allMakesTheadBuild() {return this.store.allMakesTheadBuild};
    get allMakesTbodyBuild() {return this.store.allMakesTbodyBuild};

    /* Actions */
    /* Computeds */
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
