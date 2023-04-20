import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface ThemeState {
  primaryColour: string;
  secondaryColour: string;
}

const initialState: ThemeState = {
  primaryColour: "#fafafa",
  secondaryColour: "#171717",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeState>) {
      (state.primaryColour = action.payload.primaryColour),
        (state.secondaryColour = action.payload.secondaryColour);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;