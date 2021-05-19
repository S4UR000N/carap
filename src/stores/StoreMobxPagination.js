import React from "react";
import { makeAutoObservable, observable, computed, action,  reaction, when } from "mobx"
import {withStoreApp} from "./StoreApp"
import Range from "./../extensions/Range"
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
        paginationSize: 10
    };

    /* Setters */
    set setStore(obj) {this.store = {...this.store, ...obj}};

    /* Getters */
    get getPaginationPageCount() {return this.store.paginationPageCount};
    get getPaginationCurrentPageIndex() {return this.store.paginationCurrentPageIndex};
    get getPaginationSize() { return this.store.paginationSize};
    get getPaginationCanFirst() {return this.getPaginationCurrentPageIndex === 0 ? 'disabled' : ''};
    get getPaginationCanLast() {return (this.getPaginationCurrentPageIndex === (this.getPaginationPageCount-1)) ? 'disabled' : ''};

    /* Actions */
    /* Computeds */
    get paginationPageIsActive() {};
    get paginationRange() {
        if(this.getPaginationCurrentPageIndex < Math.ceil(this.getPaginationSize/2)) {
            console.log("first");
            return Range(0, (this.getPaginationSize - 1), 1);
        }
        else if(this.getPaginationCurrentPageIndex > (this.getPaginationPageCount - this.getPaginationSize - 1)) {
            console.log("second");
            return Range((this.getPaginationPageCount - this.getPaginationSize), (this.getPaginationPageCount - 1), 1);
        }
        else {
            console.log("third");
            return Range((this.getPaginationCurrentPageIndex - 5), (this.getPaginationCurrentPageIndex + 4), 1);
        }
    };
    get paginationBuild() {
        return (
            this.paginationRange.map(i =>
                <MakePaginationItem
                    key={i} index={i}
                    active={this.getPaginationCurrentPageIndex == i ? true : false}
                    handleMobxTableData={() => this.storeMobxTable.setAllMakesTableBodyBuild(i)}
                    handleMobxPaginationCurrentIndex={() => this.setStore = {paginationCurrentPageIndex: i}}
                />
            )
        );
    };

    /* Disposer function */
    disposer() {
        this.disposeReaction();
    };
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
