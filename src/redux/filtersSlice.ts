import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (s) => s.filters.name;

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
