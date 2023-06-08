import { useState } from 'react';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from "./Date.module.scss";
import clsx from 'clsx';

const Date = () => {
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
        <span className={styles.value}>3 дня</span>
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
        <MenuItem onClick={handleClose}>3 дня</MenuItem>
        <MenuItem onClick={handleClose}>Неделя</MenuItem>
        <MenuItem onClick={handleClose}>Месяц</MenuItem>
        <MenuItem onClick={handleClose}>Год</MenuItem>
        <MenuItem onClick={handleClose}>Указать даты</MenuItem>
      </Menu>
    </div>
  )
}

export default Date
