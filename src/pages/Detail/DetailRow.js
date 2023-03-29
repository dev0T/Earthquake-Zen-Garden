const DetailRow = ({ fieldName, fieldValue }) => {
  return (
    <div className="Info-Row">
      <div className="Field-Name">{fieldName}</div>
      <div className="Field-Value">{fieldValue}</div>
    </div>
  )
}
export default DetailRow
