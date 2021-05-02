import React from "react"
import { useLocalObservable, useObserver } from "mobx-react"
import StoreContext from "./StoreContext"

export function StoreProvider({children}) {
    const store = useLocalObservable(() => ({
        allMakes: false,
        chunkLength: 5,
        allMakesChunked: false,
        allMakesTheadBuild: false,
        allMakesTbodyBuild: false,
        paginationBuild: false,
        paginationFirstPageIndex: 0,
        paginationCurrentPageIndex: 0,
        paginationLastPageIndex: 0,

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
            store.paginationBuild = paginationBuild;
        },
        setPaginationFirstPageIndex: paginationFirstPageIndex => {
            store.paginationFirstPageIndex = paginationFirstPageIndex;
        },
        setPaginationCurrentPageIndex: paginationCurrentPageIndex => {
            store.paginationCurrentPageIndex = paginationCurrentPageIndex;
        },
        setPaginationLastPageIndex: paginationLastPageIndex => {
            store.paginationLastPageIndex = paginationLastPageIndex;
        },
        getAllMakesChunkedFirst: () => {
            return store.allMakesChunked[0];
        },
        getAllMakesChunkedLast: () => {
            return store.allMakesChunked[store.allMakesChunked.length - 1];
        },
        calculateChunkCount: singleChunkLength => {
            let chunkCount = Number(store.allMakes.Count) / Number(singleChunkLength);
            return chunkCount.toString().split('.').reduce((acc, val, i) => (i ? Number(acc) + 1 : acc));
        }
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
