import { useParams } from 'react-router-dom'
import { useEarthquakeStateValue } from '../../common/context/EarthquakesContext'
import find from 'lodash.find'
import moment from 'moment'
import DetailRow from './DetailRow'

const Detail = () => {
  const { featureId } = useParams()
  const [
    {
      earthquakeData: { features }
    }
  ] = useEarthquakeStateValue()
  const feature = find(features, { id: featureId })

  return (
    <div className="Page">
      <div className="Page-Header">
        <h3>{feature?.properties?.title}</h3>
      </div>
      <div className="Page-Contents">
        <div class="Detail-Info">
          <DetailRow
            fieldName={'Title'}
            fieldValue={feature?.properties?.title}
          />
          <DetailRow
            fieldName={'Magnitude'}
            fieldValue={feature?.properties?.mag}
          />
          <DetailRow
            fieldName={'Time'}
            fieldValue={moment(feature?.properties?.time).format(
              'MMM DD, YYYY, h:mm A'
            )}
          />
          <DetailRow
            fieldName={'Status'}
            fieldValue={feature?.properties?.status}
          />

          <DetailRow
            fieldName={'Tsunami'}
            fieldValue={feature?.properties?.tsunami}
          />
          <DetailRow
            fieldName={'Type'}
            fieldValue={feature?.properties?.type}
          />
        </div>
      </div>
    </div>
  )
}

export default Detail
