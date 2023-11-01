import { createSlice } from "@reduxjs/toolkit";

interface ModalWithLoadingType {
  loading: boolean;
  open: boolean;
}

interface ModalSliceType {
  siteMapModalVisibility: boolean;
  authModalVisibility: ModalWithLoadingType;
}
const initialState: ModalSliceType = {
  siteMapModalVisibility: false,
  authModalVisibility: {
    loading: false,
    open: false,
  },
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setSiteMapModalVisibility(state) {
      state.siteMapModalVisibility = !state.siteMapModalVisibility;
    },
    setAuthModalVisibility(state, { payload }) {
      state.authModalVisibility = payload;
    },
  },
});

export default modalSlice.reducer;
export const { setSiteMapModalVisibility, setAuthModalVisibility } =
  modalSlice.actions;
