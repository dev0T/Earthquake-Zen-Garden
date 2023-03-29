import { useEarthquakeStateValue } from '../../common/context/EarthquakesContext'
import EarthquakesTable from './EarthquakesTable'

const Home = () => {
  const [
    {
      earthquakeData: {
        metadata: { title },
        features
      }
    }
  ] = useEarthquakeStateValue()

  return (
    <div className="Page">
      <div className="Page-Header">
        <h3>{title}</h3>
      </div>
      <div className="Page-Contents">
        <EarthquakesTable features={features} />
      </div>
    </div>
  )
}

export default Home
