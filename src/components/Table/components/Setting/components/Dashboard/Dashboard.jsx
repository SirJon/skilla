import { useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from "./Dashboard.module.scss";

const Dashboard = ({ title, items = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.dashboard}>
      <button
        className={styles.button}
        onClick={handleClick}
      >
        <span>{title}</span>
        <KeyboardArrowDownIcon className={styles.svg} />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map(it => {
          return (
            <MenuItem
              className={styles.item}
              key={it}
              onClick={handleClose}
            >
              {it}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  );
}

export default Dashboard
