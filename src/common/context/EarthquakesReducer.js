import orderBy from 'lodash.orderby'

export const earthquakeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EARTHQUAKE_DATA':
      return { ...state, earthquakeData: { ...action.payload } }
    case 'SET_SORT_PARAMS':
      const ordered = orderBy(
        state.earthquakeData.features,
        [`properties.${action.payload.column}`],
        [action.payload.order]
      )
      return {
        ...state,
        earthquakeData: { ...state.earthquakeData, features: ordered },
        sortParams: { ...action.payload }
      }
    default:
      return state
  }
}

export const setEarthquakeData = data => ({
  type: 'SET_EARTHQUAKE_DATA',
  payload: data
})

export const setSortParams = data => ({
  type: 'SET_SORT_PARAMS',
  payload: data
})
