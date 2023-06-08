import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { getTimeString } from '@/utils/getTimeString';

const TableData = (props) => {
  const TIME = 60;
  const { in_out, date, person_avatar, from_number, source, errors = [], time } = props;
  const duration = `${Math.floor(time/TIME).toString().padStart(2, '0')}:${(time - Math.floor(time/TIME) * TIME).toString().padStart(2, '0')}`
  return (
    <tr>
      <td>
        {in_out === ""
          ? <></>
          : in_out === 1
            ? <CallMadeIcon />
            : <CallReceivedIcon />
        }
      </td>
      <td>
        {getTimeString(date)}
      </td>
      <td>
        <img width="32px" height="32px" src={person_avatar} alt="avatar" />
      </td>
      <td>+{from_number}</td>
      <td>{source}</td>
      <td>{errors}</td>
      <td>{duration}</td>
    </tr>
  )
}

export default TableData
