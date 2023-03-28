import moment from 'moment'
import { Link } from 'react-router-dom'

const TableRow = ({ feature: { id, properties } }) => {
  return (
    <tr className="Place-Row">
      <td>
        <Link to={`${id}`}>{properties.place}</Link>
      </td>
      <td className="Mag-Row">{properties.mag}</td>
      <td>{moment(properties.time).format('MMM DD, YYYY, h:mm A')}</td>
    </tr>
  )
}

export default TableRow
