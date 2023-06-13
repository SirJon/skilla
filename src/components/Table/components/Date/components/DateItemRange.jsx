import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setPeriod } from '@/store/slices/calls/callsSlice';

import MenuItem from '@mui/material/MenuItem';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DateItemRange = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const handlerStart = (e) => {
    if (!end) {
      setStart(e.target.value);
      return;
    };
    if (new Date(e.target.value) < new Date(end)) {
      setStart(e.target.value);
    };
  };
  const handlerEnd = (e) => {
    if (!start) {
      setEnd(e.target.value);
      return;
    };
    if (new Date(e.target.value) > new Date(start)) {
      setEnd(e.target.value);
    };
  };
  const handlerButton = () => {
    if (!start || !end) return;
    const startDate = new Date(start);
    const endDate = new Date(end);
    endDate.setDate(endDate.getDate() + 1);
    dispatch(setPeriod({
      text: `${start} - ${end}`,
      title: 'range',
      start: startDate.setHours(0, 0, 0, 0),
      end: endDate.setHours(0, 0, 0, -1),
    }));
    handleClose();
  };
  return (
    <MenuItem >
      <span>Указать даты</span>
      <input
        type="date"
        value={start}
        onChange={handlerStart}
      />
      <input
        type="date"
        value={end}
        onChange={handlerEnd}
      />
      <button onClick={handlerButton}>
        <CalendarTodayIcon />
      </button>
    </MenuItem>
  )
};

export default DateItemRange;
