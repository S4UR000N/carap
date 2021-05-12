import React from "react";
import { makeAutoObservable, observable, computed, action,  reaction, when } from "mobx"
import {withStoreApp} from "./StoreApp";
import MakePaginationItem from "./../components/fragments/MakePaginationItem"


/* Store start */
export default class StoreMobxPagination {
    constructor(storeApp, storeMobxTable) {
        this.storeApp = storeApp;
        this.storeMobxTable = storeMobxTable;
        this.disposeReaction = reaction(
            () => this.storeApp.getAllMakesChunked,
            getAllMakesChunked => this.setStore = {paginationPageCount: getAllMakesChunked.length}
        );
        when(
            // Once...
            () => this.storeApp.getAllMakesChunked,
            // ... then.
            () => this.disposer()
        );
        makeAutoObservable(this);
    };

    /* Properties */
    store = {
        paginationPageCount: false,
        paginationCurrentPageIndex: 0,
        paginationCanNext: false,
        paginationCanPrevious: false,
    };

    /* Setters */
    set setStore(obj) {this.store = {...this.store, ...obj}};

    /* Getters */
    get getPaginationPageCount() {return this.store.paginationPageCount};
    get getPaginationCurrentPageIndex() {return this.store.paginationCurrentPageIndex};
    get getPaginationCanNext() {return this.store.paginationCanNext};
    get getPaginationCanPrevious() {return this.store.paginationCanPrevious};

    /* Actions */
    /* Computeds */
    get paginationPageIsActive() {};
    get paginationBuild() {
        return (
            Array.apply(null, Array(this.getPaginationPageCount)).map((_, i) =>
                <MakePaginationItem
                    key={i} index={i}
                    active={this.getPaginationCurrentPageIndex == i ? true : false}
                />
            )
        );
    };

    /* Disposer function */
    disposer() {
        this.disposeReaction();
    }
}
/* Store end */


/* Store helpers */
const StoreContext = React.createContext();

export const StoreMobxPaginationProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/* Hook to use store in any functional component */
export const useStorePagination = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStorePagination = (Component) => (props) => {
  return <Component {...props} store={useStorePagination()} />;
};
