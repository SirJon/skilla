import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_STATUS } from '@/constant/fetch_status';
import skillaAPI from '@/services/skillaApi';

const token = 'testtoken';

const nameSlice = 'calls';

function hashCalls(dateArray) {
  const result = {};
  for (const it of dateArray) {
    const { date } = it;
    const currentDay = new Date(date);
    currentDay.setHours(0, 0, 0, 0);
    if (!result[currentDay]) {
      result[currentDay] = [it];
    } else {
      result[currentDay].push(it);
    }
  }
  return result;
};

const initialState = {
  calls: [],
  hash: {},
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
        if (Array.isArray(payload.results)) {
          state.calls = payload.results;
          state.hash = hashCalls(payload.results);
        }
      })
      .addCase(fetchCalls.rejected, (state, action) => {
        state.status = FETCH_STATUS.rejected;
      })
  },
})

export const { } = callsSlice.actions

export default callsSlice.reducer