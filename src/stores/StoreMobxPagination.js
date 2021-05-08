import React from "react";
import { makeAutoObservable, observable, computed, action } from "mobx"

/* Store start */
export default class StoreMobxPagination {
    constructor() {makeAutoObservable(this)};

    /* Properties */
    store = {
        paginationBuild: false,
        paginationPageCount: 0,
        paginationFirstPageIndex: 0,
        paginationCurrentPageIndex: 0,
        paginationLastPageIndex: 0,
        paginationCanNext: false,
        paginationCanPrevious: false,
    };

    /* Setters */
    set setStore(obj) {this.store = {...this.store, ...obj}};

    /* Getters */
    get paginationBuild() {return this.store.paginationBuild};
    get paginationPageCount() {return this.store.paginationPageCount};
    get paginationFirstPageIndex() {return this.store.paginationFirstPageIndex};
    get paginationCurrentPageIndex() {return this.store.paginationCurrentPageIndex};
    get paginationLastPageIndex() {return this.store.paginationLastPageIndex};
    get paginationCanNext() {return this.store.paginationCanNext};
    get paginationCanPrevious() {return this.store.paginationCanPrevious};


    /* Actions */
    /* Computeds */
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
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStorePagination()} />;
};
