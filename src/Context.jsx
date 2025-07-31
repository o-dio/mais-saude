import { createContext, useState, useContext } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [selecionado, setSelecionado] = useState(null);

    return (
        <Context.Provider value={[selecionado, setSelecionado]}>
            {children}
        </Context.Provider>
    );
};

export const useSelecionado = () => useContext(Context);

export default Context;
