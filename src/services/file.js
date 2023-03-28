import data from '../data/data.json'

const getSiteData = async () => {
  const { site } = data
  return site
}

const getProfileData = async () => {
  const { profile } = data
  return profile
}

const getEarthquakeData = async () => {
  const { data: earthquakeData } = data
  return earthquakeData
}

const fileService = {
  getSiteData,
  getProfileData,
  getEarthquakeData
}

export default fileService
