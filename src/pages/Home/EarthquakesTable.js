import TableHeader from './TableHeader.js'
import TableRow from './TableRow.js'

const EarthquakesTable = ({ features }) => {
  return (
    <table>
      <TableHeader />
      <tbody>
        {features.map(feature => (
          <TableRow feature={feature} key={feature.id} />
        ))}
      </tbody>
    </table>
  )
}

export default EarthquakesTable
