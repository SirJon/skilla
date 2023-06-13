import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_STATUS } from '@/constant/fetch_status';
import skillaAPI from '@/services/skillaApi';

const token = 'testtoken';

const nameSlice = 'calls';

const initialState = {
  periodTitle: null,
  periodStart: null,
  periodEnd: null,
  periodText: null,
  list: [],
  status: 'loading',
  error: null,
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
    setPeriod: (state, { payload }) => {
      state.periodText = payload.text;
      state.periodTitle = payload.title;
      state.periodStart = payload.start;
      state.periodEnd = payload.end;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalls.pending, (state) => {
        state.status = FETCH_STATUS.pending;
      })
      .addCase(fetchCalls.fulfilled, (state, { payload }) => {
        state.status = FETCH_STATUS.fulfilled;
        if (Array.isArray(payload.results)) {
          state.list = payload.results;
        }
      })
      .addCase(fetchCalls.rejected, (state, action) => {
        state.status = FETCH_STATUS.rejected;
      })
  },
})

export const {
  setPeriod,
} = callsSlice.actions;

export default callsSlice.reducer;