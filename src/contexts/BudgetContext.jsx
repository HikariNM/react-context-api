import { createContext, useState, useContext } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {

    const [budget, setBudget] = useState(null);

    return <BudgetContext.Provider value={[budget, setBudget]}>
        {children}
    </BudgetContext.Provider>
}

function useBudget() {
    const budget = useContext(BudgetContext);
    return budget;
}

export { BudgetProvider, useBudget };