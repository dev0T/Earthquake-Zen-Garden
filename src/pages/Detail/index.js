import { useParams } from 'react-router-dom'

const Detail = () => {
  const { featureId } = useParams()

  return <div>Detail View</div>
}

export default Detail
