import { useEarthquakeStateValue } from '../../common/context/EarthquakesContext'
import { setSortParams } from '../../common/context/EarthquakesReducer'

const TableHeader = () => {
  const [
    {
      sortParams: { column, order }
    },
    dispatch
  ] = useEarthquakeStateValue()

  const handleColumnSort = clickedColumn => {
    dispatch(
      setSortParams({
        column: clickedColumn,
        order: order === 'desc' ? 'asc' : 'desc'
      })
    )
  }

  return (
    <thead>
      <tr className="Table-Header">
        <th
          className="Table-Column-Header"
          onClick={() => handleColumnSort('title')}
        >
          {column === 'title'
            ? order === 'desc'
              ? 'Title ↓'
              : 'Title ↑'
            : 'Title'}
        </th>
        <th
          className="Table-Column-Header"
          onClick={() => handleColumnSort('mag')}
        >
          {column === 'mag'
            ? order === 'desc'
              ? 'Magnitude ↓'
              : 'Magnitude ↑'
            : 'Magnitude'}
        </th>
        <th
          className="Table-Column-Header"
          onClick={() => handleColumnSort('time')}
        >
          {column === 'time'
            ? order === 'desc'
              ? 'Time ↓'
              : 'Time ↑'
            : 'Time'}
        </th>
      </tr>
    </thead>
  )
}

export default TableHeader
