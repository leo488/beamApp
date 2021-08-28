import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budget",
  initialState: {},

  reducers: {
    createBudget: (state, action) => {
      const newBudget = {
        id: Math.random(),
        title: action.payload.nameText,
        description: action.payload.description,
        amount: action.payload.amount,
        dateTime: JSON.stringify(new Date()),
      };
      Object.assign(state, { newBudget });
    },
  },
});

export const { createBudget } = budgetSlice.actions;

export default budgetSlice.reducer;
