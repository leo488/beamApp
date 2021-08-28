import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "./budgetSlice";
import budgetCategorySlice from "./budgetCategorySlice";

export default configureStore({
  reducer: {
    budget: budgetSlice,
    budgetCategory: budgetCategorySlice,
  },
});
