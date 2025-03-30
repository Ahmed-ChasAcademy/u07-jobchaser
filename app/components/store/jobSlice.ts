import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jobData from "../data"; 

interface JobState {
  search: string;
  jobs: typeof jobData;
}

const initialState: JobState = {
  search: "",
  jobs: jobData, 
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = jobSlice.actions;
export default jobSlice.reducer;
