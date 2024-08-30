import { createSlice } from '@reduxjs/toolkit';

// Define the initial state and slice
const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Export actions and reducer
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

// Export selector
export const selectNameFilter = (state) => state.filters.filter;
