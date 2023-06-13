import MenuItem from '@mui/material/MenuItem';

const DateItem = ({ handleClose, title, onClick }) => {
  const handler = () => {
    onClick()
    handleClose()
  }
  return (
    <MenuItem onClick={handler}>
      {title}
    </MenuItem>
  )
};

export default DateItem;
