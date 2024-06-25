
import { getDatabase, onValue, ref, set } from "firebase/database";
import { createContext, useContext } from "react";
import { createFirebaseApp } from "../firebase/clientApp";

export const DbContext = createContext();

export default function DbContextComp({ children }) {
    const app = createFirebaseApp();
    const db = getDatabase(app);

    console.log({ DbContext, app, db });

    return (
        <DbContext.Provider value={{ db, ref, set, onValue }}>
            {children}
        </DbContext.Provider>
    );
}

// Custom hook that shorthands the context!
export const useDb = () => useContext(DbContext);
