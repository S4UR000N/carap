import React from "react"
import { useLocalObservable, useObserver } from "mobx-react"
import StoreContext from "./StoreContext"

export function StoreProvider({children}) {
    const store = useLocalObservable(() => ({
        allMakes: false,
        allMakesTheadBuild: false,
        allMakesTbodyBuild: false,
        allMakesChunked: false,
        chunkLength: 5,
        setAllMakes: allMakes => {
            store.allMakes = allMakes;
        },
        setallMakesTheadBuild: allMakesTheadBuild => {
            store.allMakesTheadBuild = allMakesTheadBuild;
        },
        setallMakesTbodyBuild: allMakesTbodyBuild => {
            store.allMakesTbodyBuild = allMakesTbodyBuild;
        },
        setAllMakesChunked: allMakesChunked => {
            store.allMakesChunked = allMakesChunked;
        },
        setChunkLength: chunkLength => {
            store.chunkLength = chunkLength;
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
