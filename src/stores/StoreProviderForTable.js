import React from "react"
import { useLocalObservable, useObserver } from "mobx-react"
import StoreContext from "./StoreContext"

export function StoreProviderForTable({children}) {
    const store = useLocalObservable(() => ({
        allMakes: false,
        chunkLength: 5,
        allMakesChunked: false,
        allMakesTheadBuild: false,
        allMakesTbodyBuild: false,
        pagination: {
            paginationBuild: false,
            paginationPageCount: 0,
            paginationFirstPageIndex: 0,
            paginationCurrentPageIndex: 0,
            paginationLastPageIndex: 0,
            paginationCanNext: false,
            paginationCanPrevious: false,
        },

        __setPagination: (name, value) => {
            store.pagination = {...store.pagination, [name]: value}
        },
        setAllMakes: allMakes => {
            store.allMakes = allMakes;
        },
        setChunkLength: chunkLength => {
            store.chunkLength = chunkLength;
        },
        setAllMakesChunked: allMakesChunked => {
            store.allMakesChunked = allMakesChunked;
        },
        setallMakesTheadBuild: allMakesTheadBuild => {
            store.allMakesTheadBuild = allMakesTheadBuild;
        },
        setallMakesTbodyBuild: allMakesTbodyBuild => {
            store.allMakesTbodyBuild = allMakesTbodyBuild;
        },
        setPaginationBuild: paginationBuild => {
            store.pagination.paginationBuild = paginationBuild;
        },
        setPaginationPageCount: paginationPageCount => {
            store.pagination.paginationPageCount = paginationPageCount;
        },
        setPaginationFirstPageIndex: paginationFirstPageIndex => {
            store.pagination.paginationFirstPageIndex = paginationFirstPageIndex;
        },
        setPaginationCurrentPageIndex: paginationCurrentPageIndex => {
            store.pagination.paginationCurrentPageIndex = paginationCurrentPageIndex;
        },
        setPaginationLastPageIndex: paginationLastPageIndex => {
            store.pagination.paginationLastPageIndex = paginationLastPageIndex;
        },
        getAllMakesChunkedFirst: () => {
            return store.allMakesChunked[0];
        },
        getAllMakesChunkedLast: () => {
            return store.allMakesChunked[store.allMakesChunked.length - 1];
        },
        calculatePaginationNextPageIndex: () => {
            let nextIndex = Number(store.pagination.paginationCurrentPageIndex) + 1;
            return nextIndex;
        },
        calculatePaginationPreviousPageIndex: () => {
            let previousIndex = Number(store.pagination.paginationCurrentPageIndex) - 1;
            return previousIndex;
        },
        calculatePaginationCanNext: () => {
            return Number(store.pagination.paginationCurrentPageIndex) < Number(store.pagination.paginationPageCount) ? true : false
        },
        calculatePaginationCanPrevious: () => {
            return Number(store.pagination.paginationCurrentPageIndex) > Number(store.pagination.paginationFirstPageIndex) ? true : false
        },
        calculateChunkCount: singleChunkLength => {
            let chunkCount = Number(store.allMakes.Count) / Number(singleChunkLength);
            return chunkCount.toString().split('.').reduce((acc, val, i) => (i ? Number(acc) + 1 : acc));
        },
    }));
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = (Component) => (props) => {
    return <Component {...props} store={useStore()} />;
}
