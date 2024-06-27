function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Username from "./Username";
import { getAddress } from "../../services/apiGeocoding";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
export const fetchAddres = createAsyncThunk(
  "user/fetchAddress",
  // 1) We get the user's geolocation position
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  },
);

const initialState = {
  userName: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(
        fetchAddres.pending,
        (state, action) => (state.status = "loading"),
      )
      .addCase(fetchAddres.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddres.rejected, (state, action) => {
        state.status = "error";
        state.error = action.erro.message;
      }),
});
export const { updateName } = userSlice.actions;
export default userSlice.reducer;
