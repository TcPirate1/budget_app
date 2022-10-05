import { createContext } from "react";
import { weeklyBudget } from "./SurveyScreen";

export const BudgetContext = createContext(weeklyBudget); //This allows other files to use the context. The param needed to be passed can be done with useContext.