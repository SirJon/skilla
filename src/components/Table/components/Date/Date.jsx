import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPeriod } from '@/store/slices/calls/callsSlice';
import { TABLE_PERIOD } from '@/constant/table_period';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Menu from '@mui/material/Menu';

import DateItem from './components/DateItem';
import DateItemRange from './components/DateItemRange';

import styles from "./Date.module.scss";

const Date = () => {
  const dispatch = useDispatch();
  const { periodText } = useSelector(state => state.calls);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.date}>
      <button className={styles.button}>
        <KeyboardArrowLeftIcon />
      </button>
      <button className={styles.button} onClick={handleClick}>
        <CalendarTodayIcon />
        <span className={styles.value}>
          {periodText}
        </span>
      </button>
      <button className={styles.button}>
        <KeyboardArrowRightIcon />
      </button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={styles.menu}
        variant="selectedMenu"
      >
        {Object.keys(TABLE_PERIOD).map(it => {
          return (
            <DateItem
              key={it}
              handleClose={handleClose}
              onClick={() => dispatch(setPeriod(TABLE_PERIOD[it]))}
              title={TABLE_PERIOD[it].text}
            />
          )
        })}
        <DateItemRange
          handleClose={handleClose}
        />
      </Menu>
    </div>
  )
};

export default Date;
