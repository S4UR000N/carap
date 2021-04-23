import React from "react"
import { useLocalObservable, useObserver } from "mobx-react"
import StoreContext from "./StoreContext"

export function StoreProvider({children}) {
    const store = useLocalObservable(() => ({
        allMakes: false,
        setAllMakes: allMakes => {
            store.allMakes = allMakes;
        },
        // get lol() {
        //     return store.allMakes;
        // }

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
