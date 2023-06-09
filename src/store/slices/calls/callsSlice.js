import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_STATUS } from '@/constant/fetch_status';
import skillaAPI from '@/services/skillaApi';

const token = 'testtoken';

const nameSlice = 'calls';

const initialState = {
  calls: [],
  status: 'loading',
  error: null,
  periodStart: null,
  periodEnd: null,
};

export const fetchCalls = createAsyncThunk(
  `${nameSlice}/fetchCalls`,
  async (_, thunkAPI) => {
    const response = await skillaAPI(token).getList()
    return response
  }
);

export const callsSlice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalls.pending, (state) => {
        state.status = FETCH_STATUS.pending;
      })
      .addCase(fetchCalls.fulfilled, (state, { payload }) => {
        state.status = FETCH_STATUS.fulfilled;
        state.calls = Array.isArray(payload.results) ? payload.results : [];
      })
      .addCase(fetchCalls.rejected, (state, action) => {
        state.status = FETCH_STATUS.rejected;
      })
  },
})

export const { } = callsSlice.actions

export default callsSlice.reducer